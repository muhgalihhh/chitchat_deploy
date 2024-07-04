import express from 'express';
import { getGroupsForSidebar, createGroup, addParticipantToGroup, leaveGroup } from '../controllers/group.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.get('/', protectRoute, getGroupsForSidebar);
router.post('/', protectRoute, createGroup);
router.post('/add-participant', protectRoute, addParticipantToGroup);
router.post('/leave-group/:groupId', protectRoute, leaveGroup);

export default router;
