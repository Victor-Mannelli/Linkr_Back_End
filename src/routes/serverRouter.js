import { Router } from "express";
import authRouter from "./authRouter.js";
import trendRouter from "./trendRouter.js";
import userRouter from "./userRouter.js";
import likesRouter from "./likesRouter.js";
<<<<<<< Updated upstream
import  followRouter from "./followRouter.js";

//import postRouter from "./postRouter.js";

=======
import postRouter from "./postRouter.js";
>>>>>>> Stashed changes

const serverRouter = Router();

serverRouter.use(authRouter);
serverRouter.use(trendRouter);
serverRouter.use(userRouter);
serverRouter.use(likesRouter);
<<<<<<< Updated upstream
serverRouter.use(followRouter);
=======
serverRouter.use(postRouter);
>>>>>>> Stashed changes

export default serverRouter;