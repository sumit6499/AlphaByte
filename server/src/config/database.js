const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("Success: Database connected"))
  .catch((error) => {
    console.log("Failure: Database connection issue");
    console.log(error);
    process.exit(1);
  });
