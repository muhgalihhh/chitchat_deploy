import ConversationList from './ConversationList';
import LogoutButton from './LogoutButton';
import SearchInput from './SearchInput';
const Sidebar = () => {
  return (
    <div className="flex flex-col bg-white hidden md:block lg:w-1/3 xl:w-1/4 h-full p-4 border-slate-400 border-r-2">
      <SearchInput />
      <div className="divider px-3"></div>
      <ConversationList />
      <div className="divider px-3"></div>
      <LogoutButton />
    </div>
  );
};
export default Sidebar;
