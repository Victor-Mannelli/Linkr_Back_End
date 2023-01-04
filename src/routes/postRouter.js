import { Router } from "express";
import { updatePostSchema} from "../models/postModel.js";
import validateSchema from "../middlewares/validateSchema.js";
import { deletePost, updatePost } from "../controllers/postController.js";

const router = Router();

router.post("/post");
router.patch("/post/:postId", validateSchema(updatePostSchema), updatePost);
router.delete("/post/:postId", deletePost);

export default router;