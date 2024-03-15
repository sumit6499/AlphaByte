const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Hello form alphabyte server ",
  });
});

app.listen(PORT, () => {
  console.log("server running on port 3000");
});
