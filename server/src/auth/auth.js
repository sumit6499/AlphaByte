const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req, res, next) => {
  const token =
    req.cookies.token ||
    req.body ||
    req.header("Authorization").replace("Bearer", "");

  if (!token) {
    return res.json(401).json({
      success: true,
      message: "Token Missing",
    });
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token Payload:", decode);
    req.user = decode;
  } catch (error) {
    console.error("Error decoding token:", error);
    return res.status(401).json({
      success: false,
      message: "Token is invalid",
    });
  }
  next();
};
