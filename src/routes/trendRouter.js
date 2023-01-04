import { Router } from "express";
import { getTrending } from "../controllers/trendingController.js";
import { getTrendMd } from "../middlewares/getTrendingMiddleware.js";

const router = Router();

router.get("/hashtag/:hashtag",getTrending);
router.get("/hashtag",getTrending);

export default router;