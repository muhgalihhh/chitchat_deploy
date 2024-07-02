import React from 'react';
import Group from './Group';

const GroupList = () => {
  // Data groups (contoh data)
  const groups = [
    {
      id: 1,
      name: 'Group A',
      description: 'Gaming Group',
      participants: [
        { id: 1, name: 'Bannggg' },
        { id: 2, name: 'John Doe' },
        { id: 3, name: 'Jane Smith' },
      ],
    },
    {
      id: 2,
      name: 'Group B',
      description: 'Social Group',
      participants: [
        { id: 4, name: 'Alice Johnson' },
        { id: 5, name: 'Michael Brown' },
        { id: 6, name: 'Emily Davis' },
      ],
    },
    // Tambahkan lebih banyak jika diperlukan
  ];

  return (
    <div className="p-1 flex flex-col w-full">
      {/* Mapping data groups dan melemparkan ke Group */}
      {groups.map((group) => (
        <Group key={group.id} group={group} />
      ))}
    </div>
  );
};

export default GroupList;
