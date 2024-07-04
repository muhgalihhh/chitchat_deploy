import useRequestFriend from '../../../hooks/useRequestFriend';

const FriendRequest = ({ display }) => {
  const { requestFriend } = useRequestFriend();
  const handleSubmit = async (e) => {
    e.preventDefault();
    requestFriend(display._id);
  };
  return (
    <>
      <div className={`flex gap-2 items-center p-2 rounded-md cursor-pointer hover:bg-slate-100 border-b-2`}>
        <div className={`avatar`}>
          <div className="w-10 rounded-full">
            <img alt="user avatars" src={display.profilePicture} />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-xs text text-slate-800">{display.fullName}</p>
            <div className="flex gap-2">
              <form onSubmit={handleSubmit}>
                <input type="hidden" value={display._id} name="friendId" readOnly />
                <button className="btn bg-white" type="submit">
                  <i className="fa-solid fa-plus"></i>
                </button>
              </form>
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
