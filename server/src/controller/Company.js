const PostModel = require("../model/Post");

exports.postOpening = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, company, experince, reqskill, description } = req.body;

    if (!id || !title || !company || !experince || !reqskill || !description) {
      return res.status(400).json({
        success: false,
        message: "All Fields are required",
      });
    }

    const user = await CandidateAuth.create({
      _id: id,
      title: title,
      companyName: company,
      experince: experince,
      requiredSkills: reqskill,
      description: description,
    });

    return res.status(200).json({
      success: true,
      message: "Job post created successfully",
    });
  } catch (error) {
    console.error(error);
  }
};

exports.getResumeRanking = (req, res) => {
  const { id } = req.params;
  
};
