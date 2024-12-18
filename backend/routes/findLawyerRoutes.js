import express from "express";
import { getLawyersByPostcode } from "../controllers/findLawyerController.js";

const router = express.Router();

router.get("/search", getLawyersByPostcode);

export default router;
