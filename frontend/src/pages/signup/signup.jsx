import { EditOutlined, LockFilled, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';
import GenderCheckbox from './GenderCheckbox';
const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <>
      <div className="w-full h-full bg-slate-200 flex justify-center items-center">
        <div className="card card-side bg-white shadow-xl lg:w-1/2 md:w-2/3 h-auto flex flex-col gap-3 border-2">
          <div className="p-5 card-header w-full h-auto border-b-2">
            <h2 className="card-title justify-center items-center font-bold">
              <div className="loading loading-infinity loading-lg"></div>
              SignUp To <span className="font-bold text-slate-400">ChitChat</span>
            </h2>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-4 w-full ">
                <div className="flex w-full gap-2 lg:flex-row">
                  <label className="input input-bordered flex items-center gap-10 w-full">
                    <EditOutlined />
                    <input type="text" className="grow" placeholder="Fullname" value={inputs.fullName} onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
                  </label>
                  {/* Gender DropDown */}
                  <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
                </div>

                <label className="input input-bordered flex items-center gap-10">
                  <UserOutlined />
                  <input type="text" className="grow" placeholder="Username" value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
                </label>
                <label className="input input-bordered flex items-center gap-10">
                  <LockFilled />
                  <input type="password" className="grow" placeholder="****" value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                </label>
                <p>Confirm Password</p>
                <label className="input input-bordered flex items-center gap-10">
                  <LockFilled />
                  <input type="password" className="grow" placeholder="****" value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
                </label>
              </div>
              <Link to={'/login'} className="link link-hover">
                Already Have an Account?
              </Link>
              <div className="card-actions justify-center mt-2">
                <button type="submit" className="btn bg-slate-400 text-white w-1/2" disabled={loading}>
                  {loading ? <span className="loading loading-infinity loading-md"></span> : 'SignUp'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
