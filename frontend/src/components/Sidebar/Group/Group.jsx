import React, { useState } from 'react';
import ModalDetailGroup from '../../Modal/ModalDetailGroup'; // Pastikan path-nya sesuai

const Group = ({ group }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={`flex gap-2 items-center p-2 rounded-md cursor-pointer hover:bg-slate-100 border-b-2 w-full`}>
        <div className={`avatar`}>
          <div className="w-10 rounded-full">
            <img alt="user avatars" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-xs text-slate-800">{group.name}</p>
            <div className="flex gap-2">
              <button className="btn bg-white" onClick={handleOpenModal}>
                <i className="fas fa-ellipsis-v"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Detail Group */}
      <ModalDetailGroup isOpen={isModalOpen} onClose={handleCloseModal} group={group} />
    </>
  );
};

export default Group;
