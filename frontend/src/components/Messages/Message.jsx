import { useAuthContext } from '../../context/AuthContext';
import { extractTime } from '../../utils/extractTime';
import useConversation from '../../zustand/useConversation';

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const formattedTime = extractTime(message.createdAt);
  const isSent = message.senderId === authUser._id;
  const chatClassName = isSent ? 'chat-end' : 'chat-start';
  const profilePic = isSent ? authUser.profilePicture : selectedConversation?.profilePicture;
  const bubbleBgChat = isSent ? 'bg-slate-600' : 'bg-slate-500';
  const shakeClass = message.shouldShake ? 'shake' : '';
  return (
    <div>
      <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full ml-2">
            <img src={`${profilePic}`} alt="user avatars" />
          </div>
        </div>
        <div className={`chat-bubble ${bubbleBgChat} ${shakeClass} text-white pb-3`}>{message.message}</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
          <span>{formattedTime}</span>
        </div>
      </div>
    </div>
  );
};

export default Message;
