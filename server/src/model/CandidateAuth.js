const mongoose = require("mongoose");

const CandidateAuth = mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("candidateAuth", CandidateAuth);
