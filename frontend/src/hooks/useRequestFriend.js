import { useState } from 'react';
import toast from 'react-hot-toast';

const useRequestFriend = () => {
  const [loading, setLoading] = useState(false);
  const [refecth, setRefecth] = useState(null);

  const requestFriend = async (friendId) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/friend-list`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ friendId }),
      });
      const data = await res.json();
      setRefecth(true);
      if (data.error) throw new Error(data.error);
      toast.success('Friend Sent Successfully');

      console.log(refecth);
    } catch (error) {
      toast.error(error.message);
      setRefecth(false);
    } finally {
      setLoading(false);
    }
  };

  return { requestFriend, loading, refecth };
};
export default useRequestFriend;
