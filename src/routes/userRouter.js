import { Router } from "express";
import { getUserContr} from "../controllers/userController.js";
import { getUserMd } from "../middlewares/getUserMiddleware.js";

const userRouter = Router();

userRouter.get("/user",getUserMd,getUserContr);

export default userRouter;