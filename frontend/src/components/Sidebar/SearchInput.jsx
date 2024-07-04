import { useState } from 'react';
import toast from 'react-hot-toast';
import { IoSearch } from 'react-icons/io5';
import useGetConversation from '../../hooks/useGetConversation';
import useConversation from '../../zustand/useConversation';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const { setSelectedConversation } = useConversation();
  const { conversation } = useGetConversation();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error('Search query must be at least 3 characters');
    }
    const findConversation = conversation.find((conv) => conv.fullName.toLowerCase().includes(search.toLowerCase()));
    if (!findConversation) {
      return toast.error('No user found');
    } else {
      setSelectedConversation(findConversation);
      setSearch('');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full p-2 mt-2 h-full">
      <label className="input input-bordered flex items-center w-full">
        <input type="text" className="grow w-full" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
      </label>
      <button className="btn btn-square">
        <IoSearch style={{ fontSize: '1.75rem', color: '#707070' }} />
      </button>
    </form>
  );
};

export default SearchInput;
