import React from 'react';
import RequestFriendList from './RequestFriendList';

const ReqFriend = () => {
  return (
    <>
      <div className="flex gap-2 items-center p-2 rounded-md cursor-pointer">
        <RequestFriendList />
      </div>
    </>
  );
};

export default ReqFriend;
