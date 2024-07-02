import React from 'react';

const FriendRequest = () => {
  return (
    <>
      <div className={`flex gap-2 items-center p-2 rounded-md cursor-pointer hover:bg-slate-100 border-b-2`}>
        <div className={`avatar`}>
          <div className="w-10 rounded-full">
            <img alt="user avatars" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-xs text text-slate-800">Hai Bangg</p>
            <div className="flex gap-2">
              <button className="btn bg-white">
                <i className="fa-solid fa-plus"></i>
              </button>
              <button className="btn bg-white">
                {/* detail mata */}
                <i className="fa-solid fa-eye"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendRequest;
