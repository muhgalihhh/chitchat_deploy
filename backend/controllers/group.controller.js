import Group from '../models/group.model.js';
import mongoose from 'mongoose';

export const getGroupsForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    // const filteredGroups = await Group.find({ participants: { loggedInUserId } }); // all users except the logged in user
    // Find groups that the logged-in user is a participant of
    const filteredGroups = await Group.find({ participants: loggedInUserId }).populate('participants', 'fullName'); // Populate participants with name and email

    // Map the filtered groups to include only the relevant information
    const result = filteredGroups.map((group) => ({
      _id: group._id,
      name: group.name,
      participants: group.participants.map((participant) => ({
        _id: participant._id,
        fullName: participant.fullName,
      })),
    }));
    res.status(200).json(result);
  } catch (error) {
    console.log('Error in getGroupsForSidebar controller: ', error.message);
    res.status(500).json({ message: error.message });
  }
};

export const createGroup = async (req, res) => {
  try {
    const { groupName, participants } = req.body;

    const profilePicture = 'https://avatar.iran.liara.run/public/boy?username=' + groupName;

    const newGroup = new Group({
      groupName,
      participants,
      profilePicture,
    });

    if (newGroup) {
      await newGroup.save();

      res.status(201).json({
        _id: newGroup._id,
        groupName: newGroup.groupName,
        participants: newGroup.participants,
        profilePicture: newGroup.profilePicture,
      });
    } else {
      res.status(400).json({ message: 'Invalid group data' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const addParticipantToGroup = async (req, res) => {
  const { userId, groupId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(groupId)) {
    return res.status(400).json({ message: 'Invalid user ID or group ID' });
  }

  try {
    // Check if the group exists
    const group = await Group.findById(groupId);
    if (!group) {
      return res.status(404).json({ message: 'Group not found' });
    }

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the user is already a participant in the group
    if (group.participants.includes(userId)) {
      return res.status(400).json({ message: 'User is already a participant in the group' });
    }

    // Add the user to the group's participants
    group.participants.push(userId);
    await group.save();

    res.status(200).json({ message: 'Participant added successfully', group });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error', error: err.message });
  }
};

export const leaveGroup = async (req, res) => {};
