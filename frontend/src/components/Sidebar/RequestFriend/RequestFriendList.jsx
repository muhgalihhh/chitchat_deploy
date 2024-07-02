import React from 'react';
import RequestFriend from './RequestFriend';

const RequestFriendList = () => {
  return (
    <div className="p-1 flex flex-col">
      {/* Nanti di mapping */}
      <RequestFriend />
      {/* {loading ? <span className="loading loading-infinity loading-md"></span> : null} */}
    </div>
  );
};

export default RequestFriendList;
