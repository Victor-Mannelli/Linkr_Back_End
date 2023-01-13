import { Router } from "express";
import { postFollow,deleteFollow,getFollows} from "../controllers/followController.js";
import { followMd } from "../middlewares/followMiddleware.js";


const followRouter = Router();

followRouter.get("/follow",followMd,getFollows);
followRouter.post("/follow",followMd,postFollow);
followRouter.delete("/follow",followMd,deleteFollow);

export default followRouter;