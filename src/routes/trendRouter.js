import { Router } from "express";
import { getTrending,getTrendingPosts } from "../controllers/trendingController.js";
import { getTrendMd } from "../middlewares/getTrendingMiddleware.js";

const trendRouter = Router();

trendRouter.get("/hashtag/:hashtag",getTrendMd,getTrendingPosts);
trendRouter.get("/hashtag",getTrendMd,getTrending);

export default trendRouter;