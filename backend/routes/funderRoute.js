import express from "express";
import { registerFunder } from "../controllers/funderController.js";

const router = express.Router();

// POST route for funder registration
router.post("/register", registerFunder);

export default router;