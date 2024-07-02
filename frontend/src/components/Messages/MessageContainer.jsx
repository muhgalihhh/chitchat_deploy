import { useEffect, useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import { useAuthContext } from '../../context/AuthContext';
import { useVisibility } from '../../context/VisibilityContext';
import useConversation from '../../zustand/useConversation';
import Modal from '../Modal/ModalInfoUser';
import MessageInput from './MessageInput';
import MessageList from './MessagesList';
const MessageContainer = ({ onBackClick }) => {
  const { hideMessages, isMessageVisible } = useVisibility();
  const { selectedConversation, setSelectedConversation } = useConversation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Cleanup selected conversation when component unmounts or selected conversation changes or logout
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  const handleOpenModal = () => {
    setSelectedUser(selectedConversation);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <>
      <>
        {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            <div className="bg-slate-500 flex items-center rounded-md p-1 justify-between">
              <div className="flex items-center">
                <button className="md:hidden" onClick={hideMessages}>
                  <i className="fa-solid fa-arrow-left text-white"></i>
                </button>
                <img src={selectedConversation.profilePicture} alt="" className="w-7 h-7 rounded-full mx-2" />
                <h2 className="text-white text-md font-semibold p-3">{selectedConversation.fullName}</h2>
              </div>
              <div className="ml-auto bg-slate-600 rounded-md  hover:bg-slate-500 hover:border-white hover:border-2 hover:rounded-md mr-1">
                <button className="bg-transparent p-3" onClick={handleOpenModal}>
                  <HiDotsVertical style={{ color: 'white', fontSize: '1rem' }} />
                </button>
              </div>
            </div>
            <MessageList />
            <MessageInput />
          </>
        )}
      </>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} user={selectedUser} />
    </>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-slate-500 text-2xl font-semibold">Hallo "{authUser.fullName}", Select a chat to start messaging</h2>
    </div>
  );
};
