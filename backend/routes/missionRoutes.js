import { Router } from 'express';
import { getMission, postMission, updateMission, deleteMission } from '../controllers/missionController.js';

const router = Router();

router.get('/missions', getMission);
router.post('/missions', postMission);
router.put('/missions/:id', updateMission);
router.delete('/missions/:id', deleteMission);

export default router;
