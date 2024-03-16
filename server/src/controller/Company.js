exports.postOpening = async (req, res) => {
  try {
    const { name, description, post, jobtitle, skiils, experince } = req.body;

    if (!name || !description || !post || !jobtitle || !skiils || !experince) {
      return res.status(400).json({
        success: false,
        message: "All Fields are required",
      });
    }

    const companyDetails = {
      name,
      description,
      post,
      skiils,
      experince,
    };

    
  } catch (error) {
    console.error(error);
  }
};
