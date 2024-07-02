import React from 'react';
import FriendRequest from './FriendRequest';

const FriendRequestList = () => {
  return (
    <div className="p-1 flex flex-col">
      {/* Nanti di mapping */}
      <FriendRequest />
      {/* {loading ? <span className="loading loading-infinity loading-md"></span> : null} */}
    </div>
  );
};

export default FriendRequestList;
