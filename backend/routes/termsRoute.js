import express from "express";
import { getTermsAndConditions } from "../controllers/termsController.js";

const router = express.Router();

// GET route for fetching terms and conditions
router.get("/", getTermsAndConditions);

export default router;