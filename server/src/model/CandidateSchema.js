const mongoose = require("mongoose");

const CandidateDetails = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  resume: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  skill: {
    type: [String],
  },
  experince: {
    type: Number,
  },
});

module.exports = mongoose.model("candidateDetails", CandidateDetails);
