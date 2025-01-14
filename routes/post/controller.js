import express from "express";
import PostService from "./service.js";

const router = express.Router();

const validatePost = (req, res, next) => {
  const { title, content, author } = req.body;

  if (!title || typeof title !== "string") {
    return res
      .status(400)
      .json({ error: "Title is required and must be a string." });
  }
  if (!content || typeof content !== "string") {
    return res
      .status(400)
      .json({ error: "Content is required and must be a string." });
  }
  if (!author || typeof author !== "string") {
    return res
      .status(400)
      .json({ error: "Author is required and must be a string." });
  }

  next();
};

router.post("/", validatePost, PostService.addPost);

export default router;
