const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  experince: {
    type: Number,
    required: true,
  },
  requiredSkills: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("post", PostSchema);
