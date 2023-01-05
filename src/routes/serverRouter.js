import { Router } from "express";
import authRouter from "./authRouter.js";
import postRouter from "./postRouter.js";
import trendRouter from "./trendRouter.js";

import postRouter from "./postRouter.js";


const serverRouter = Router();

serverRouter.use(authRouter);
serverRouter.use(trendRouter);
serverRouter.use(postRouter);

export default serverRouter;