const { Router } = require("express");
const { login, signup, logout } = require("../controller/AdminAuth");
const { getResumeRank } = require("../controller/ResumeRank");
const router = Router();

router.post("/login", login);//ok
router.post("/signup", signup);//ok
router.post("/logout", logout);//ok

router.get("/getResume",getResumeRank)

module.exports = router;
