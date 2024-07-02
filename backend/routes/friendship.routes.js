import express from 'express';
import { getFriends, reqFriend, addFriend, rejectFriend } from '../controllers/friendship.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.get('/', protectRoute, getFriends);
router.post('/', protectRoute, reqFriend);
router.post('/add', protectRoute, addFriend);
router.post('/reject', protectRoute, rejectFriend);

export default router;
