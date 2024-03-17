const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  pdfName:{
    type:String
  },
  result: {
    type: String,
  },
});

module.exports = mongoose.model("result", resultSchema);
