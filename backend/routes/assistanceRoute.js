import express from "express";
import { requestAssistance } from "../controllers/assistanceController.js";

const router = express.Router();

// POST route for requesting immigration and legal assistance
router.post("/request", requestAssistance);

export default router;