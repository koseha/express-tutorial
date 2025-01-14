import express from "express";
import postRouter from "./post/controller.js";

const router = express.Router();

router.use("/post", postRouter);

export default router;
