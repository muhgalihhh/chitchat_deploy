import express from 'express';
import { getGroupMessages, sendGroupMessage } from '../controllers/groupMessage.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.get('/:id', protectRoute, getGroupMessages);
router.post('/send/:id', protectRoute, sendGroupMessage);

export default router;
