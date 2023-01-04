import { Router } from "express";
import { getTrending } from "../controllers/trendingController.js";
import { getTrendMd } from "../middlewares/getTrendingMiddleware.js";

const trendRouter = Router();

trendRouter.get("/hashtag/:hashtag",getTrending);
trendRouter.get("/hashtag",getTrending);

export default trendRouter;