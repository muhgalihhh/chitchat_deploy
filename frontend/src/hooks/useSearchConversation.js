import { useState, useEffect } from 'react';

const useSearchFriend = (keyword) => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!keyword) {
      setFriends([]);
      return;
    }

    const fetchFriends = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/friend-list/search?keyword=${encodeURIComponent(keyword)}`);
        const data = await response.json();
        setFriends(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFriends();
  }, [keyword]);

  return { friends, loading, error };
};

export default useSearchFriend;
