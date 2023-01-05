import { Router } from "express";
import authRouter from "./authRouter.js";
import trendRouter from "./trendRouter.js";
import postRouter from "module";

const serverRouter = Router();

serverRouter.use(authRouter);
serverRouter.use(trendRouter);
serverRouter.use(postRouter);

export default serverRouter;