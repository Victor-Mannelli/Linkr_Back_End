import { Router } from "express";
import { getTrending,getTrendingPosts } from "../controllers/trendingController.js";
import { getTrendMd } from "../middlewares/getTrendingMiddleware.js";

const trendRouter = Router();

router.get("/hashtag/:hashtag",getTrendingPosts);
router.get("/hashtag",getTrending);

export default trendRouter;