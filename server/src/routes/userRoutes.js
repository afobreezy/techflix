const express = require("express");
const {
  getMe,
} = require("../controllers/userController");


const Authenticate = require("../middlewares/Authtenticate")


const router = express.Router();
router.get("/me", Authenticate, getMe);


module.exports = router;
