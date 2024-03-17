const express = require("express");
const app = express();
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { login } = require("../controller/AdminAuth");
const { uploadResume } = require("../controller/upload");
const axios = require("axios");
const path = require("path");
const resultModel = require("../model/Result");

const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const FormData = require("form-data");

const fs = require("fs");
let data = new FormData();

const { S3Client, PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
const bucketName = process.env.BUCKET_NAME;
const region = process.env.BUCKET_REGION;
const accesskey = process.env.AWS_ACCESS_KEY;
const secretkey = process.env.AWS_SECRET_KEY;

const s3 = new S3Client({
  region: region,
  credentials: {
    accessKeyId: accesskey,
    secretAccessKey: secretkey,
  },
});

router.get("/login", login);


//NLP process 

app.use(express.urlencoded({ extended: true }));
router.post("/upload", upload.single("resume"), async (req, res) => {
  try {
    const id = 2;
    const { jd } = req.query;

    var result;
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: req.file.originalname,
      Body: req.file.buffer,
      ContentType: req.file.mimetype,
    });


    const getCommand=new GetObjectCommand({
        Bucket: bucketName,
        Key: req.file.originalname,
    })
    console.log(req.file.path);

    const __dirname = ".";

    data.append(
      "resume",
      fs.createReadStream(path.join(__dirname, `${req.file.path}`))
    );

    //flask backend of NLP process
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `https://ats-score-nlrw.onrender.com/evaluate-resume?jd=${jd}`,
      headers: {
        ...data.getHeaders(),
      },
      data: data,
    };
    await s3.send(command);

    const url = await getSignedUrl(s3, getCommand);
    console.log(url);

    axios
      .request(config)
      .then((response) => {
        result = response.data.result;

        return result;
      })
      .then(async () => {
        const user = await resultModel.create({
          _id: id,
          pdfName: req.file.originalname,
          result: result,
        });
        console.log("data saved");
      })
      .catch((error) => {
        console.log(error);
      });

    return res.status(200).json({
      success: true,
      message: "File upload successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

module.exports = router;
