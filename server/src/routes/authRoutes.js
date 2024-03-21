const express = require("express");
const { loginUser, logoutUser } = require("../controllers/authController");
const Authenticate = require("../middlewares/Authtenticate")

const router = express.Router();

router.post("/login", loginUser);
router.post("/logout", Authenticate, logoutUser);

module.exports = router;
