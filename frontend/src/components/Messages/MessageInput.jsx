import { useState } from 'react';
import { IoIosSend } from 'react-icons/io';
import useSendMessage from '../../hooks/useSendMessage';
const MessageInput = () => {
  const [message, setMessage] = useState('');
  const { loading, sendMessage } = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return console.log('Message is required');
    await sendMessage(message);
    setMessage('');
  };
  return (
    <form className="px-4 my-3 flex flex-grow justify-between w-full gap-3" onSubmit={handleSubmit}>
      <input type="text" placeholder="Type here" className="input input-bordered w-full" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button type="submit" className="btn bg-slate-100 border-slate-700">
        {loading ? <span className="loading loading-infinity loading-md"></span> : <IoIosSend className="text-slate-700" style={{ fontSize: '2rem' }} />}
      </button>
    </form>
  );
};

export default MessageInput;
