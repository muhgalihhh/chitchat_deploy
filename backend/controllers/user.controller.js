import User from '../models/user.model.js';
import Friendship from '../models/friendship.model.js';

export const getUsersForSidebar = async (req, res) => {
  // try {
  //   const loggedInUserId = req.user._id;

  //   const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select('-password'); // all users except the logged in user

  //   res.status(200).json(filteredUsers);
  // } catch (error) {
  //   console.log('Error in getUsersForSidebar controller: ', error.message);
  //   res.status(500).json({ message: error.message });
  // }
  const loggedInUserId = req.user._id; // Assuming you have middleware to set req.user

  if (!mongoose.Types.ObjectId.isValid(loggedInUserId)) {
    return res.status(400).json({ message: 'Invalid user ID' });
  }

  try {
    const friends = await Friendship.aggregate([
      {
        $match: {
          $or: [{ userId: mongoose.Types.ObjectId(loggedInUserId) }, { friendId: mongoose.Types.ObjectId(loggedInUserId) }],
          status: true, // Only confirmed friends
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
              $match: { _id: { $ne: mongoose.Types.ObjectId(loggedInUserId) } }, // Exclude the logged-in user
            },
          ],
          as: 'friendDetails',
        },
      },
      { $unwind: '$friendDetails' },
      { $project: { _id: 0, friendDetails: 1 } },
    ]);

    res.status(200).json(friends);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
};
