import express from "express";
import { handleSubscription } from "../controllers/supportOurMissionController.js";

const router = express.Router();

// POST /api/support-our-mission/subscribe
router.post("/subscribe", handleSubscription);

export default router;
