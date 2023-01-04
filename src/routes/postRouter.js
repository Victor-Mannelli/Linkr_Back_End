import { Router } from "express";
import { updatePostSchema} from "../models/postModel.js";
import validateSchema from "../middlewares/validateSchema.js";
import { deletePost, updatePost } from "../controllers/postController.js";

const postRouter = Router();

postRouter.post("/post");
postRouter.patch("/post/:postId", validateSchema(updatePostSchema), updatePost);
postRouter.delete("/post/:postId", deletePost);

export default postRouter;