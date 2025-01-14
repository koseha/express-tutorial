import express from "express";
import postRouter from "./post/controller.js";

const router = express.Router();

router.use("/posts", postRouter);

export default router;
