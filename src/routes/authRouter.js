import { Router } from "express";
import * as authValidation from "../middlewares/authMiddleware.js" 
import * as authController from "../controllers/authController.js" 

const authRouter = Router();

authRouter.post("/signup", authValidation.validateSignUp, authController.signUp);
authRouter.post("/signin", authValidation.validateSignIn, authController.signIn);
authRouter.delete("/logout", authValidation.validateLogOut, authController.logOut);

export default authRouter;
