import express from "express";
import { getAssignedTrainings, requestTraining } from "../controllers/getTrainedController.js";

const router = express.Router();

// Route to fetch assigned trainings for a user
router.get("/", getAssignedTrainings);

// Route to submit a training request
router.post("/request", requestTraining);

export default router;
