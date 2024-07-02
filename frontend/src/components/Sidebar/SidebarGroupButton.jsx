import React, { useState } from 'react';
import ModalAddGroup from '../Modal/ModalAddGroup'; // Sesuaikan dengan path yang benar

const ChangeSidebarGroupButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null); // State untuk tombol aktif

  const handleOpenModal = (buttonType) => {
    setIsModalOpen(true);
    setActiveButton(buttonType); // Set tombol aktif
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActiveButton(null); // Reset tombol aktif saat menutup modal
  };

  // Data participants (contoh data)
  const participants = [
    { id: 1, name: 'Bannggg' },
    { id: 2, name: 'John Doe' },
    { id: 3, name: 'Jane Smith' },
    { id: 4, name: 'Alice Johnson' },
    { id: 5, name: 'Michael Brown' },
    { id: 6, name: 'Emily Davis' },
    { id: 7, name: 'David Wilson' },
    { id: 8, name: 'Sarah Lee' },
    { id: 9, name: 'Chris Kim' },
    { id: 10, name: 'Anna White' },
    { id: 11, name: 'James Taylor' },
    { id: 12, name: 'Linda Martinez' },
    { id: 13, name: 'Robert Garcia' },
    { id: 14, name: 'Patricia Hernandez' },
    { id: 15, name: 'Mark Clark' },
    { id: 16, name: 'Elizabeth Lewis' },
    { id: 17, name: 'Joseph Walker' },
    { id: 18, name: 'Mary Young' },
    { id: 19, name: 'Charles Allen' },
    { id: 20, name: 'Barbara King' },
  ];

  return (
    <>
      <button className={`w-[3rem] h-[3rem] rounded-md hover:bg-slate-100 ${activeButton === 'users' ? 'bg-gray-200' : ''}`}>
        <i className="fa-solid fa-users-rectangle"></i>
      </button>
      <button className={`w-[3rem] h-[3rem] rounded-md hover:bg-slate-100 ${activeButton === 'plus' ? 'bg-gray-200' : ''}`} onClick={() => handleOpenModal('plus')}>
        <i className="fa-solid fa-plus"></i>
      </button>

      {/* Modal untuk menambahkan grup */}
      <ModalAddGroup isOpen={isModalOpen} onClose={handleCloseModal} participants={participants} />
    </>
  );
};

export default ChangeSidebarGroupButton;
