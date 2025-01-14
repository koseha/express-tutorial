import express from "express";
import commentController from "./controller.js";

const commentRouter = express.Router();

commentRouter.get("/", commentController.getComments);

export default commentRouter;
