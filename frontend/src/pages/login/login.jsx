const Login = () => {
  return (
    <div className="w-full h-full bg-slate-200 flex justify-center items-center">
      <div className="card card-side bg-white shadow-xl w-1/2 h-auto flex flex-col gap-3 border-2">
        <div className="p-5 card-header w-full h-auto border-b-2">
          <h2 className="card-title justify-center items-center font-bold">
            Login To <span className="font-bold text-slate-400">ChitChat</span>
          </h2>
        </div>
        <div className="card-body">
          <form action="">
            <div className="flex flex-col space-y-4 w-full ">
              <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" className="grow" placeholder="Username" />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input type="password" className="grow" placeholder="****" />
              </label>
            </div>
          </form>
          <a className="link link-hover">Don't Have an Account?</a>
          <div className="card-actions justify-center mt-2">
            <button className="btn bg-slate-400 text-white w-1/2">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// Starter Code for Login Page {Dont Delete and Keep it as it is}

// const Login = () => {
//   return (
//     <div className="w-full h-full bg-slate-200 flex justify-center items-center">
//       <div className="card card-side bg-white shadow-xl w-1/2 h-auto flex flex-col gap-3 border-2">
//         <div className="p-5 card-header w-full h-auto border-b-2">
//           <h2 className="card-title justify-center items-center font-bold">
//             Login To <span className="font-bold text-slate-400">ChitChat</span>
//           </h2>
//         </div>
//         <div className="card-body">
//           <form action="">
//             <div className="flex flex-col space-y-4 w-full ">
//               <label className="input input-bordered flex items-center gap-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
//                   <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
//                 </svg>
//                 <input type="text" className="grow" placeholder="Username" />
//               </label>
//               <label className="input input-bordered flex items-center gap-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
//                   <path
//                     fillRule="evenodd"
//                     d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 <input type="password" className="grow" placeholder="****" />
//               </label>
//             </div>
//           </form>
//           <a className="link link-hover">Don't Have an Account?</a>
//           <div className="card-actions justify-center mt-2">
//             <button className="btn bg-slate-400 text-white w-1/2">Login</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
