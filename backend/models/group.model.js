import mongoose from 'mongoose';

const groupSchema = new mongoose.Schema(
  {
    groupName: {
      type: String,
      required: true,
    },
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    profilePicture: {
      type: String,
      default: '',
    },
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'GroupMessage',
        default: [],
      },
    ],
    // createdAt, updatedAt => Member since <createdAt>
  },
  { timestamps: true }
);

const Group = mongoose.model('Group', groupSchema);

export default Group;
