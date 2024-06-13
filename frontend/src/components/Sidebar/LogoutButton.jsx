const LogoutButton = ({ onOpenModal }) => {
  return (
    <>
      <div className="flex items-center gap-2 w-full h-full p-2 mt-auto justify-between">
        <button className="btn btn-primary" onClick={onOpenModal}>
          <i className="fa-solid fa-sign-out"></i>
          Logout
        </button>
      </div>
    </>
  );
};

export default LogoutButton;
