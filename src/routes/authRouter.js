import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js";
import * as authValidation from "../middlewares/authMiddleware.js" 
import * as authController from "../controllers/authController.js" 
import * as authSchemas from "../models/authModel.js";

const authRouter = Router();

authRouter.post("/signup", validateSchema(authSchemas.signUpSchema), authValidation.validateSignUp, authController.signUp);
authRouter.post("/signin", validateSchema(authSchemas.signInSchema), authValidation.validateSignIn, authController.signIn);
authRouter.delete("/logout", authValidation.validateLogOut, authController.logOut);

export default authRouter;
