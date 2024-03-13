const express = require("express");
const {
  createUser,
  getUserById,
  getMe,
} = require("../controllers/userController");
const { validateUserData } = require("../middlewares/dataValidator");
const requireSignin = require("../middlewares/Authtenticate");
const router = express.Router();

router.post("/", validateUserData, createUser);
router.get("/me", requireSignin, getMe);
router.get("/:userId", getUserById);


module.exports = router;
