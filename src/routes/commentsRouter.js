import { Router } from "express";
import { getComments, postComments } from "../controllers/commentsController.js";
import { validatePostId, getOriginalPostId } from "../middlewares/postsMiddleware.js";


const commentsRouter = Router();


commentsRouter.post("/comments/:postId", validatePostId, getOriginalPostId, getComments);
commentsRouter.get("/comments/:postId", validatePostId, getOriginalPostId, postComments);