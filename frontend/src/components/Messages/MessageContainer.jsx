import { HiDotsVertical } from 'react-icons/hi';
import MessageInput from './MessageInput';
import MessageList from './MessagesList';
const MessageContainer = () => {
  const noChatSelected = false;
  return (
    <div className="flex flex-col flex-grow bg-white h-full p-4 border-slate-400 border-l-2 w-full">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 flex items-center rounded-md px-5 justify-between">
            <div className="flex items-center">
              <img src="" alt="" className="w-10 h-10 rounded-full m-3" />
              <h2 className="text-white text-xl font-semibold p-3">John Doe</h2>
            </div>
            <div className="ml-auto  bg-slate-600 rounded-md">
              <button className="btn btn-square bg-transparent">
                <HiDotsVertical style={{ color: 'white', fontSize: '1.5rem' }} />
              </button>
            </div>
          </div>
          <MessageList />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-slate-500 text-2xl font-semibold">Select a chat to start messaging</h2>
    </div>
  );
};
