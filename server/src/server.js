const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Database = require("./config/database");
const cookieParser = require("cookie-parser");
const adminRoute = require("./router/Admin");
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

//middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());

//routes
app.use("/api/v1/auth/admin", adminRoute);

//hits
app.use((req, res, next) => {
  console.log("http method->" + req.method + ",URL->" + req.url);
  next();
});

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Hello form alphabyte server ",
  });
});

app.listen(PORT, () => {
  console.log("server running on port 3000");
});
