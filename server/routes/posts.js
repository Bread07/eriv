import express from "express";

// middleware
import multer from "multer";
import auth from "../middleware/auth.js";

// controllers
import {
  getPosts,
  createPost,
  getPost,
  deletePost,
  likePost,
  queryPosts,
} from "../controllers/posts.js";

// run controllers on HTTP requests to routes

const upload = multer();
const router = express.Router();

router.get("/", getPosts);
router.get("/search", queryPosts);
router.post(
  "/",
  auth /* imported middleware to check if authorized */,
  upload.single("file") /* multer middleware to parse file */,
  createPost
);
router.get("/:id", getPost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);

export default router;
