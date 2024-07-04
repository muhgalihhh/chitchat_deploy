// import React from 'react';
import FriendRequest from './FriendRequest';

const FriendRequestList = ({ friends, loading }) => {
  if (!friends) {
    return <div className="container"></div>;
  }
  return (
    <div className="p-1 flex flex-col">
      {friends.map((friend) => (
        <FriendRequest key={friend._id} display={friend} />
      ))}
      {loading ? <span className="loading loading-infinity loading-md"></span> : null}
    </div>
  );
};

export default FriendRequestList;
