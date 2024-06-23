import Group from '../models/group.model.js';
import GroupMessage from '../models/groupMessage.model.js';
import { getGroupSocketId, io } from '../socket/socket.js';

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
    // await newMessage.save();
    // await conversation.save();

    // this will run in parallel
    await newMessage.save();

    // SOCKET IO FUNCQIONALITY TO BE ADDED HERE
    const groupSocketId = getGroupSocketId(groupId);
    if (groupSocketId) {
      io.to(groupSocketId).emit('newMessage', newMessage);
    }
    res.status(201).json(newMessage);
  } catch (error) {
    console.log('Error in sendMessage', error);
    res.status(500).json({ message: error.message });
  }
};

export const getGroupMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate('messages'); // NOT REFERENCE BUT ACTUAL MESSAGES

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log('Error in getMessages controller: ', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};
