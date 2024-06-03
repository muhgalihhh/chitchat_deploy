import { IoSearch } from 'react-icons/io5';
const SearchInput = () => {
  return (
    <form action="" className="flex items-center gap-2 w-full p-2 mt-2">
      <label className="input input-bordered flex items-center w-full">
        <input type="text" className="grow w-full" placeholder="Search" />
      </label>
      <button className="btn btn-square">
        <IoSearch style={{ fontSize: '1.75rem', color: '#707070' }} />
      </button>
    </form>
  );
};

export default SearchInput;
