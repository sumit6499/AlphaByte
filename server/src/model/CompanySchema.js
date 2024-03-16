const mongoose = require("mongoose");

const CompanyDetails = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  post: {
    type: String,
    trim: true,
    required: true,
  },
  jobTitle: {
    type: String,
    trim: true,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  experince: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("companyDetails", CompanyDetails);
