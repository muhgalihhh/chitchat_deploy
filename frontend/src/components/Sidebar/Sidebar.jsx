import ConversationList from './ConversationList';
import SearchInput from './SearchInput';

const Sidebar = () => {
  return (
    <>
      {/* SearchInput Component */}
      <div className="mb-1">
        <SearchInput />
      </div>

      {/* Divider */}
      <div className="divider px-3 mb-1"></div>

      {/* ConversationList Component */}
      <div className="flex-4 mb-1 overflow-y-auto scrollbar shadow-md rounded-md">
        <ConversationList />
      </div>

      {/* Divider */}
      <div className="divider px-3 mb-4"></div>

      {/* LogoutButton Component */}
    </>
  );
};
export default Sidebar;
