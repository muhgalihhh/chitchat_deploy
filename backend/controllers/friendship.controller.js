import Friendship from '../models/friendship.model.js';

export const getFriends = async (req, res) => {
  try {
    const friendsDetails = await Friendship.aggregate([
      {
        $match: {
          $or: [{ userId: mongoose.Types.ObjectId(loggedInUserId) }, { friendId: mongoose.Types.ObjectId(loggedInUserId) }],
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
              $match: { _id: { $ne: mongoose.Types.ObjectId(loggedInUserId) } },
            },
          ],
          as: 'friendDetails',
        },
      },
      { $unwind: '$friendDetails' },
      { $project: { _id: 0, friendDetails: 1 } },
    ]);

    console.log(friendsDetails);
    return friendsDetails;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const reqFriend = async (req, res) => {
  const { userId, friendId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(friendId)) {
    return res.status(400).json({ message: 'Invalid user ID or friend ID' });
  }

  try {
    // Check if the friendship already exists
    const existingFriendship = await Friendship.findOne({
      $or: [
        { userId, friendId },
        { userId: friendId, friendId: userId },
      ],
    });

    if (existingFriendship) {
      return res.status(400).json({ message: 'Friend request already exists or you are already friends' });
    }

    const friendship = new Friendship({
      userId,
      friendId,
      status: false, // pending request
    });

    await friendship.save();

    res.status(201).json({ message: 'Friend request sent successfully', friendship });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
};

export const addFriend = async (req, res) => {
  const { userId, friendId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(friendId)) {
    return res.status(400).json({ message: 'Invalid user ID or friend ID' });
  }

  try {
    // Check if the friendship request exists and is pending
    const friendship = await Friendship.findOne({
      userId: friendId, // Friend requested to logged in user
      friendId: userId, // Logged in user is the friendId
      status: false, // Pending request
    });

    if (!friendship) {
      return res.status(404).json({ message: 'Friend request not found or already accepted' });
    }

    // Update the status to true
    friendship.status = true;
    await friendship.save();

    res.status(200).json({ message: 'Friend request accepted successfully', friendship });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
};

export const rejectFriend = async (req, res) => {
  const { userId, friendId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(friendId)) {
    return res.status(400).json({ message: 'Invalid user ID or friend ID' });
  }

  try {
    // Check if the friendship request exists and is pending
    const friendship = await Friendship.findOneAndDelete({
      userId: friendId, // Friend requested to logged in user
      friendId: userId, // Logged in user is the friendId
      status: false, // Pending request
    });

    if (!friendship) {
      return res.status(404).json({ message: 'Friend request not found or already processed' });
    }

    res.status(200).json({ message: 'Friend request rejected successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
};
