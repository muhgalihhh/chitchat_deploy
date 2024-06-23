const LogoutButton = ({ onOpenModal }) => {
  return (
    <>
      <div className="flex items-center gap-2 w-full h-full p-2 mt-auto justify-between">
        <button className="btn bg-red-500 text-white pl-4 pr-6 hover:bg-red-700 " onClick={onOpenModal}>
          <i className="fa-solid fa-sign-out"></i>
        </button>
      </div>
    </>
  );
};

export default LogoutButton;
