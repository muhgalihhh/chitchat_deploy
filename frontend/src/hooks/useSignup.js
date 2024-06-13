import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
    const success = handleInputError({ fullName, username, password, confirmPassword, gender });
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
      });
      const data = await res.json();
      const error = data.message;
      console.log(error);
      if (!data.ok) {
        throw new Error(error);
      }
      toast.success('Signup Successful');
      // console.log(data);
      localStorage.setItem('chat-user', JSON.stringify(data));
      // call setAuthUser from context
      setAuthUser(data);
    } catch (error) {
      toast.error('error.message');
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;

function handleInputError({ fullName, username, password, confirmPassword, gender }) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error('Please fill all the fields');
    return false;
  }
  if (password !== confirmPassword) {
    toast.error('Confirm Password do not match');
    return false;
  }

  if (password.length < 6) {
    toast.error('Password must be atleast 6 characters long');
    return false;
  }
  return true;
}
