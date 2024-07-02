import Group from '../models/group.model.js';
import GroupMessage from '../models/groupMessage.model.js';
import mongoose from 'mongoose';
import { io } from '../socket/socket.js';

export const sendGroupMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: groupId } = req.params;
    const senderId = req.user._id;

    let group = await Group.findOne({
      _id: groupId,
    });

    const newMessage = new GroupMessage({
      groupId,
      senderId,
      message,
    });

    if (newMessage) {
      group.messages.push(newMessage._id);
    }

    // save newMessage
    await newMessage.save();

    // SOCKET IO FUNCQIONALITY TO BE ADDED HERE
    // Emit the new message to the group
    io.to(groupId).emit('newMessage', {
      groupId,
      senderId,
      message,
      createdAt: message.createdAt,
    });
    res.status(201).json(newMessage);
  } catch (error) {
    console.log('Error in sendMessage', error);
    res.status(500).json({ message: error.message });
  }
};

export const getGroupMessages = async (req, res) => {
  const { id: groupId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(groupId)) {
    return res.status(400).json({ message: 'Invalid group ID' });
  }
  try {
    // Check if the group exists
    const group = await Group.findById(groupId);
    if (!group) {
      return res.status(404).json({ message: 'Group not found' });
    }
    // Get messages from the group
    const conversation = await Group.findById(groupId).populate('messages'); // NOT REFERENCE BUT ACTUAL MESSAGES

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log('Error in getMessages controller: ', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};
