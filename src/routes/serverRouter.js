import { Router } from "express";
import authRouter from "./authRouter.js";
import postRouter from "./postRouter.js";
import trendRouter from "./trendRouter.js";
import userRouter from "../routes/userRouter.js";
import likesRouter from "../routes/likesRouter.js";

//import postRouter from "./postRouter.js";


const serverRouter = Router();

serverRouter.use(authRouter);
serverRouter.use(trendRouter);
serverRouter.use(postRouter);
serverRouter.use(userRouter);
serverRouter.use(likesRouter);

export default serverRouter;