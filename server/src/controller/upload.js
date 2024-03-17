const express = require("express");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const bucketName = process.env.BUCKET_NAME;
const region = process.env.BUCKET_REGION;
const accesskey = process.env.AWS_ACCESS_KEY;
const secretkey = process.env.AWS_SECRET_KEY;

const s3=new S3Client({
  region:region,
  credentials:{
    accessKeyId:accesskey,
    secretAccessKey:secretkey
  }
})

exports.uploadResume = async (req, res) => {
  try {

    return res.status(200).json({
      success: true,
      message: "File upload successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
