import { useState } from 'react';
import ModalLogout from '../Modal/ModalLogout';
import LogoutButton from './LogoutButton';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4 flex-col">
          <button className="text-sm font-semibold bg-slate-800 py-4 pl-4 pr-6 rounded-md hover:bg-slate-400 hover:text-slate-600 hover:shadow-md">
            <i className="fa-solid fa-comments "></i>
          </button>
          <button className="text-sm font-semibold bg-slate-800 py-4 pl-4 pr-6 rounded-md hover:bg-slate-400 hover:text-slate-600 hover:shadow-md">
            <i class="fa-solid fa-people-group "></i>
          </button>
          <button className="text-sm font-semibold bg-slate-800 py-4 pl-[1.2rem] pr-6 rounded-md hover:bg-slate-400 hover:text-slate-600 hover:shadow-md">
            <i class="fa-solid fa-address-book "></i>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-sm font-semibold">
          <LogoutButton onOpenModal={handleOpenModal} />
          <ModalLogout isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
