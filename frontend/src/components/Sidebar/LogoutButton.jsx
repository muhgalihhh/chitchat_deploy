import { RiLogoutBoxFill } from 'react-icons/ri';
const LogoutButton = () => {
  return (
    <div className="flex items-center gap-2 w-full p-2 mt-auto justify-between">
      <button className="btn btn-square">
        <RiLogoutBoxFill style={{ fontSize: '1.75rem', color: '707070' }} />
      </button>
    </div>
  );
};

export default LogoutButton;
