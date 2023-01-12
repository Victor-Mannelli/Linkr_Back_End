import { Router } from "express";
import authRouter from "./authRouter.js";
import trendRouter from "./trendRouter.js";
import userRouter from "./userRouter.js";
import likesRouter from "./likesRouter.js";
import followRouter from "./followRouter.js";
import postRouter from "./postRouter.js";

const serverRouter = Router();

serverRouter.use(authRouter);
serverRouter.use(trendRouter);
serverRouter.use(userRouter);
serverRouter.use(likesRouter);
serverRouter.use(followRouter);
serverRouter.use(postRouter);

export default serverRouter;