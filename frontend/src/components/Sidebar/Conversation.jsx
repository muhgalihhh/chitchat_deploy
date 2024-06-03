const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center bg-white hover:bg-slate-100 p-5 rounded-md">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={'https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'} alt="user avatars" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-slate-800">Username</p>
            <span></span>
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1"></div>
    </>
  );
};

export default Conversation;
