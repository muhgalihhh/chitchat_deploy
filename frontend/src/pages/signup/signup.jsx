import { EditOutlined, LockFilled, UserOutlined } from '@ant-design/icons';
import GenderCheckbox from './GenderCheckbox';
const Signup = () => {
  return (
    <div className="w-full h-full bg-slate-200 flex justify-center items-center">
      <div className="card card-side bg-white shadow-xl lg:w-1/2 md:w-2/3 h-auto flex flex-col gap-3 border-2">
        <div className="p-5 card-header w-full h-auto border-b-2">
          <h2 className="card-title justify-center items-center font-bold">
            SignUp To <span className="font-bold text-slate-400">ChitChat</span>
          </h2>
        </div>
        <div className="card-body">
          <form action="">
            <div className="flex flex-col space-y-4 w-full ">
              <div className="flex w-full gap-2 lg:flex-row">
                <label className="input input-bordered flex items-center gap-10 w-full">
                  <EditOutlined />
                  <input type="text" className="grow" placeholder="Fullname" />
                </label>
                {/* Gender DropDown */}
                <GenderCheckbox />
              </div>

              <label className="input input-bordered flex items-center gap-10">
                <UserOutlined />
                <input type="text" className="grow" placeholder="Username" />
              </label>
              <label className="input input-bordered flex items-center gap-10">
                <LockFilled />
                <input type="password" className="grow" placeholder="****" />
              </label>
              <p>Confirm Password</p>
              <label className="input input-bordered flex items-center gap-10">
                <LockFilled />
                <input type="password" className="grow" placeholder="****" />
              </label>
            </div>
          </form>
          <a className="link link-hover">Already Have an Account?</a>
          <div className="card-actions justify-center mt-2">
            <button className="btn bg-slate-400 text-white w-1/2">SignUp</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
