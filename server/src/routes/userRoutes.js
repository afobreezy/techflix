const express = require("express");
const {
  getMe,
} = require("../controllers/userController");
const requireSignin = require("../middlewares/Authtenticate");
const router = express.Router();
router.get("/me", requireSignin, getMe);


module.exports = router;
