import express from 'express';
import { getFriends, reqFriend, addFriend, rejectFriend } from '../controllers/friendList.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.get('/', protectRoute, getFriends);
router.post('/:id', protectRoute, reqFriend);
router.post('/add/:id', protectRoute, addFriend);
router.post('/reject/:id', protectRoute, rejectFriend);

export default router;
