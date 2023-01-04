import { Router } from "express";
import { getTrending,getTrendingPosts } from "../controllers/trendingController.js";
import { getTrendMd } from "../middlewares/getTrendingMiddleware.js";

const trendRouter = Router();

trendRouter.get("/hashtag/:hashtag",getTrendingPosts);
trendRouter.get("/hashtag",getTrending);

export default trendRouter;