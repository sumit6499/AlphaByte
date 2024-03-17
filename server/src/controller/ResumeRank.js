const express = require("express");

const resultModel = require("../model/Result");

exports.getResumeRank = async (req, res) => {
  try {
    const { company } = req.body;
    const data = await resultModel.find();

    res.status(200).json({
      success: true,
      message: "All Resume success fully fetched",
      data: data,
    });
  } catch (error) {
    console.error(error);
  }
};
