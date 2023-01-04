import { Router } from "express";
import { getTrending,getTrendingPosts } from "../controllers/trendingController.js";
import { getTrendMd } from "../middlewares/getTrendingMiddleware.js";

const router = Router();

router.get("/hashtag/:hashtag",getTrendingPosts);
router.get("/hashtag",getTrending);

export default router;