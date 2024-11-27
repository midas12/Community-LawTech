import express from 'express';
import { getMission, postMission, updateMission, deleteMission } from '../controllers/missionController.js';

const router = express.Router();

// Define routes for Mission page
router.get('/', getMission); // GET: Retrieve mission data
router.post('/', postMission); // POST: Add new mission data
router.put('/:id', updateMission); // PUT: Update mission data by ID
router.delete('/:id', deleteMission); // DELETE: Remove mission data by ID

export default router;
