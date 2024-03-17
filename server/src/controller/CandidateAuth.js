const bcrypt = require("bcrypt");
const CandidateAuth = require("../model/CandidateAuth");
const ResultModel = require("../model/Result");
const validator = require("validator");
const jwt = require("jsonwebtoken");

require("dotenv").config();

exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please Provide required fields",
      });
    }

    const existingUser = await CandidateAuth.findOne({ email });

    if (existingUser) {
      return res.status(403).json({
        success: false,
        message: "User Already Exist",
      });
    }

    const isValidatedEmail = validator.isEmail(email, {
      domain_specific_validation: true, //filters email that not fit in gmail standards
      host_whitelist: ["gmail.com", "yahoo.com", "gmail.in"], //validation fails for email other than this host
    });

    if (!isValidatedEmail) {
      return res.status(400).json({
        success: false,
        message: "Please provide correct email",
      });
    }

    const salt = await bcrypt.genSalt();

    const hasedPassword = bcrypt.hash(password, salt);

    const user = await CandidateAuth.create({
      email: email,
      password: hasedPassword,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Something Went Wrong",
    });
  }
};

exports.login = async () => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    const user = await CandidateAuth.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User doesn't exist",
      });
    }

    if (bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        {
          _id: user._id,
          email: user.email,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      );

      user.tokens = user.tokens.concat({ token });
      await user.save();

      user.token = token;
      user.password = undefined;

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      res.status(200).cookie("token", token, options);
    } else {
      return res.status(400).json({
        success: true,
        message: "Invalid Credentials",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server error",
    });
  }
};
