import express from "express";
import { adminLogin } from "../controllers/adminController.js";

import {
    getLawyers,
    createLawyer,
    updateLawyer,
    deleteLawyer,
    getCases,
    createCase,
    updateCase,
    deleteCase,
    // Additional functions for other links (Funders, Users, etc.)
  } from "../controllers/adminController.js";
  import { authenticateAdmin } from "../middlewares/authMiddleware.js";
  

const router = express.Router();

// POST route for admin login
router.post("/login", adminLogin);

// CRUD for Lawyers
router.get("/lawyers", authenticateAdmin, getLawyers);
router.post("/lawyers", authenticateAdmin, createLawyer);
router.put("/lawyers/:id", authenticateAdmin, updateLawyer);
router.delete("/lawyers/:id", authenticateAdmin, deleteLawyer);

// CRUD for Cases
router.get("/cases", authenticateAdmin, getCases);
router.post("/cases", authenticateAdmin, createCase);
router.put("/cases/:id", authenticateAdmin, updateCase);
router.delete("/cases/:id", authenticateAdmin, deleteCase);

// Add more routes for Funders, Users, Trainings, Announcements, etc.


export default router;
