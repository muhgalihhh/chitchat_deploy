import useChangeFriendSidebar from '../../zustand/useChangeFriendSidebar';

const ChangeSidebarButton = () => {
  const { showAddFriend, showNotifications, isShowAddFriend, isShowNotifications } = useChangeFriendSidebar();

  return (
    <>
      <button className={` w-[3rem] h-[3rem] rounded-md hover:bg-slate-100 ${isShowAddFriend ? 'bg-slate-400 text-white' : 'text-slate-600'}`} onClick={showAddFriend}>
        <i className="fa-solid fa-user-plus"></i>
      </button>
      <button className={` w-[3rem] h-[3rem] rounded-md hover:bg-slate-100  ${isShowNotifications ? 'bg-slate-400 text-white' : 'text-slate-600'}`} onClick={showNotifications}>
        <i className="fa-solid fa-bell"></i>
      </button>
    </>
  );
};

export default ChangeSidebarButton;
