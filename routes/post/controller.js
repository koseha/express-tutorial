import express from "express";
import postService from "./service.js";

const router = express.Router();

const validatePost = (req, res, next) => {
  const { title, content, author } = req.body;

  if (!title || typeof title !== "string") {
    return res
      .status(400)
      .send({ error: "Title is required and must be a string." });
  }
  if (!content || typeof content !== "string") {
    return res
      .status(400)
      .send({ error: "Content is required and must be a string." });
  }
  if (!author || typeof author !== "string") {
    return res
      .status(400)
      .send({ error: "Author is required and must be a string." });
  }

  next();
};

router.post("/", validatePost, async (req, res) => {
  try {
    const newPost = await postService.addPost(req.body);
    res.status(201).send(newPost);
  } catch (err) {
    console.log(`Error API in POST /posts | message::${err.message}`);
    res.status(500).send("에러");
  }
});

const validateGetPosts = (req, res) => {
  const { limit } = req.query;
  if (limit <= 0 || typeof limit !== Number) {
    return res.status(400).send({
      error: "limit is required, must be a number and must be greater than 0.",
    });
  }
};

router.get("/", validateGetPosts, async (req, res) => {
  try {
    const { limit } = req.query;
    const posts = await postService.fetchPosts({ limit });
    res.status(200).send(posts);
  } catch (err) {
    console.log(`Error API in GET /posts | message::${err.message}`);
    res.status(500).send("에러");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const post = await postService.fetchPostById(id);
    res.status(200).send(post);
  } catch (err) {
    console.log(`Error API in GET /posts/:id | message::${err.message}`);
    res.status(500).send("에러");
  }
});

router.patch("/:id", validatePost, async (req, res) => {
  try {
    const id = req.params.id;
    const { title, content, author } = req.body;

    const post = await postService.fetchPostById(id);

    if (post?.author !== author) {
      return res.status(400).send({
        error: "author cannot be modified.",
      });
    }

    if (post) {
      Object.keys(req.body).forEach((key) => {
        post[key] = req.body[key];
      });
      post.save();
    }

    res.status(200).send(post);
  } catch (err) {
    console.log(`Error API in PATCH /posts/:id | message::${err.message}`);
    res.status(500).send("에러");
  }
});

export default router;
