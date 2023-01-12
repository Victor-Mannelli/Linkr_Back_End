import { Router } from "express";
import * as userMiddleware from "../middlewares/userMiddleware.js";
import * as userController from "../controllers/userController.js";

const userRouter = Router();

userRouter.get("/user", userMiddleware.validateUser, userController.getUserById);
userRouter.get("/user/:id", userMiddleware.validateUserIdParams, userController.userPage);
userRouter.get("/users", userController.getAllUsers)

export default userRouter;
