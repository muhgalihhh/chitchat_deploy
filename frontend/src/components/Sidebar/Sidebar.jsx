import { useState } from 'react';
import ModalLogout from '../Modal/ModalLogout';
import ConversationList from './ConversationList';
import LogoutButton from './LogoutButton';
import SearchInput from './SearchInput';

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* SearchInput Component */}
      <div className="mb-1">
        <SearchInput />
      </div>

      {/* Divider */}
      <div className="divider px-3 mb-1"></div>

      {/* ConversationList Component */}
      <div className="flex-4 mb-1 overflow-y-auto scrollbar shadow-md rounded-md">
        <ConversationList />
      </div>

      {/* Divider */}
      <div className="divider px-3 mb-4"></div>

      {/* LogoutButton Component */}
      <div className="mb-1">
        <LogoutButton onOpenModal={handleOpenModal} />
        <ModalLogout isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </>
  );
};
export default Sidebar;
