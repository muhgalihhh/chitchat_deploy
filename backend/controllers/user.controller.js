import User from '../models/user.model.js';
import Friendship from '../models/friendship.model.js';
import mongoose from 'mongoose';

export const getUsersForSidebar = async (req, res) => {
  // try {
  //   const loggedInUserId = req.user._id;

  //   const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select('-password'); // all users except the logged in user

  //   res.status(200).json(filteredUsers);
  // } catch (error) {
  //   console.log('Error in getUsersForSidebar controller: ', error.message);
  //   res.status(500).json({ message: error.message });
  // }
  const userId = req.user._id;
  try {
    const friendsDetails = await Friendship.aggregate([
      {
        $match: {
          $or: [{ userId: userId }, { friendId: userId }],
          status: true,
        },
      },
      {
        $lookup: {
          from: 'users', // The 'users' collection
          let: { userId: '$userId', friendId: '$friendId' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $or: [{ $eq: ['$_id', '$$userId'] }, { $eq: ['$_id', '$$friendId'] }],
                },
              },
            },
            {
              $match: { _id: { $ne: userId } },
            },
            {
              $project: { _id: 1, username: 1, fullName: 1, gender: 1, profilePicture: 1 }, // Project specific fields you need
            },
          ],
          as: 'friendDetails',
        },
      },
      { $unwind: '$friendDetails' },
      { $replaceRoot: { newRoot: '$friendDetails' } }, // Replace the root with the friend details
    ]);

    res.status(201).json(friendsDetails); // Return the array of friend details directly
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
    throw err;
  }
};
