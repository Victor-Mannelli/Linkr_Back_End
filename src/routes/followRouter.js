import { Router } from "express";
import { postFollow,deleteFollow} from "../controllers/followController.js";
import { followMd } from "../middlewares/followMiddleware.js";


const followRouter = Router();

followRouter.post("/follow",followMd,postFollow);
followRouter.delete("/follow",followMd,deleteFollow);

export default followRouter;