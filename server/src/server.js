const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Hello form alphabyte server ",
  });
});
