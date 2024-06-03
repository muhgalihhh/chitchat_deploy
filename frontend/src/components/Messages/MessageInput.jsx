import { IoIosSend } from 'react-icons/io';
const MessageInput = () => {
  return (
    <form action="" className="px-4 my-3 flex flex-grow justify-between w-full gap-3">
      <input type="text" placeholder="Type here" className="input input-bordered w-full" />
      <button type="submit" className="btn bg-slate-100 border-slate-700">
        <IoIosSend className="text-slate-700" style={{ fontSize: '2rem' }} />
      </button>
    </form>
  );
};

export default MessageInput;
