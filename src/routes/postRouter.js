import validateSchema from "../middlewares/validateSchema.js";
import { Router } from "express";
import { updatePostSchema } from "../models/postModel.js";
import { postSchema } from "../models/originalPostModel.js";
import { authValidation } from "../middlewares/userLoggedMiddleware.js";
import { validateUsername } from "../middlewares/userParamsMiddleware.js";
import { deletePost, updatePost } from "../controllers/postController.js";
import { getPosts, postPost } from "../controllers/postsController.js";
import { userPage } from "../controllers/userPageController.js";
// import { validatePostId } from "../middlewares/postsMiddleware.js";

const postRouter = Router();

postRouter.get("/post/:username", validateUsername, userPage);
postRouter.post("/post", authValidation, validateSchema(postSchema), postPost);
postRouter.patch("/post/:postId", validateSchema(updatePostSchema), updatePost);
postRouter.delete("/post/:postId", deletePost);
postRouter.get("/post", authValidation, getPosts);

export default postRouter;
