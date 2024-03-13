const express = require("express");
const {
  getAllBlogs,
  createNewBlog,
  updateBlog,
  deleteBlog,
  getSingleBlog,
} = require("../controllers/blogController");
const requireSignin = require("../middlewares/Authtenticate");
const router = express.Router();

router.get("/", getAllBlogs);

router.get("/:blogTitle", getSingleBlog);

router.post("/", requireSignin, createNewBlog);

router.put("/:blogId", requireSignin, updateBlog);

router.delete("/:blogId", requireSignin, deleteBlog);

module.exports = router;
