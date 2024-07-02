import express from 'express';
import { getGroupsForSidebar, createGroup, addParticipantToGroup } from '../controllers/group.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.get('/', protectRoute, getGroupsForSidebar);
router.post('/', protectRoute, createGroup);
router.post('/add-participant', protectRoute, addParticipantToGroup);

export default router;
