import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';
import { getReceiverSocketId, io } from '../socket/socket.js';

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    // await newMessage.save();
    // await conversation.save();

    // this will run in parallel
    await Promise.all([newMessage.save(), conversation.save()]);

    // SOCKET IO FUNCQIONALITY TO BE ADDED HERE
    const reveiverSocketId = getReceiverSocketId(receiverId);
    if (reveiverSocketId) {
      io.to(reveiverSocketId).emit('newMessage', newMessage);
    }
    res.status(201).json(newMessage);
  } catch (error) {
    console.log('Error in sendMessage', error);
    res.status(500).json({ message: error.message });
  }
};

export const getMessages = async (req, res) => {
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
