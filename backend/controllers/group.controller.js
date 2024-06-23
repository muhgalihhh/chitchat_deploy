import Group from '../models/group.model.js';

export const getGroupsForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredGroups = await Group.find({ participants: { loggedInUserId } }); // all users except the logged in user

    res.status(200).json(filteredGroups);
  } catch (error) {
    console.log('Error in getGroupsForSidebar controller: ', error.message);
    res.status(500).json({ message: error.message });
  }
};

export const createGroup = async (req, res) => {
  try {
    const { groupName, participants, profilePicture } = req.body;

    if (profilePicture) {
      profilePicture = 'https://avatar.iran.liara.run/public/boy?username=' + groupName;
    }

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
