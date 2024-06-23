import express from 'express';
import { getGroupsForSidebar, createGroup } from '../controllers/group.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.get('/', protectRoute, getGroupsForSidebar);
router.post('/', protectRoute, createGroup);

export default router;
