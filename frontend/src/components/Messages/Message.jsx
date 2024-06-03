const Message = () => {
  return (
    <div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full ml-2">
            <img src={'https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'} alt="user avatars" />
          </div>
        </div>
        <div className="chat-bubble bg-slate-600">You underestimate my power!</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:00 PM</div>
      </div>
    </div>
  );
};

export default Message;
