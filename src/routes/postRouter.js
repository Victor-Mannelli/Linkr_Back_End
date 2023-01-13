import validateSchema from "../middlewares/validateSchema.js";
import { Router } from "express";
import { updatePostSchema } from "../models/postModel.js";
import { postSchema } from "../models/originalPostModel.js";
import { deletePost, updatePost } from "../controllers/postController.js";
import { getPosts, postPost } from "../controllers/postsController.js";
import * as userMiddlewares from "../middlewares/userMiddleware.js"
import { validatePostId } from "../middlewares/postsMiddleware.js";

const postRouter = Router();

postRouter.post("/post", userMiddlewares.authValidation, validateSchema(postSchema), postPost);
postRouter.patch("/post/:postId",  validatePostId, validateSchema(updatePostSchema), updatePost);
postRouter.delete("/post/:postId", validatePostId, deletePost);
postRouter.get("/post", userMiddlewares.authValidation, getPosts);

export default postRouter;
