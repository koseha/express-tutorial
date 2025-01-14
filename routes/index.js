import express from "express";
import postRouter from "./post/controller.js";
import commentRouter from "./comment/index.js";

const router = express.Router();

router.use("/posts", postRouter);
router.use("/comments", commentRouter);

export default router;
