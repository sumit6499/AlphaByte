const { Router } = require("express");
const { login, signup, logout } = require("../controller/AdminAuth");
const router = Router();

router.post("/login", login);//ok
router.post("/signup", signup);//ok
router.post("/logout", logout);//ok

module.exports = router;
