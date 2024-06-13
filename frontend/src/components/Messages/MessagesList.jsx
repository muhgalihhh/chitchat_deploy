import { useEffect, useRef } from 'react';
import useGetMessages from '../../hooks/useGetMessages';
import useListenMessages from '../../hooks/useListenMessages';
import MessageSkeleton from '../Skeletons/MessageSkeleton';
import Message from './Message';
const MessageList = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef(null);
  useListenMessages();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [messages]);

  return (
    <div className="flex-grow bg-slate-100 rounded-md mt-2 overflow-auto p-5 h-full">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          // eslint-disable-next-line react/jsx-key
          <div key={message._id} ref={lastMessageRef}>
            <Message key={message._id} message={message} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, i) => <MessageSkeleton key={i} />)}
      {!loading && messages.length === 0 && <h2 className="text-slate-500 text-xl font-semibold text-center">No messages yet</h2>}
    </div>
  );
};

export default MessageList;
