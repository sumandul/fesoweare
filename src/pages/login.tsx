import React, { useState } from "react";

import Subscription from "../componets/section/home/subscription";
import customerAuth, { authCustomerToken } from "../api/cutomerLoginAuth";
import Link from "next/link";
import { CLIENT_RENEG_LIMIT } from "tls";
import { toast } from "react-toastify";
// import notify from "../componets/section/utilities/alert";

const Login = () => {
  const [error, setError] = useState('');
  const [state, setState] = useState({ loading: false });
  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });


  const handleChange = (e: any) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value })

  }
 
  const showNotification = (loading:any, type:any, data:any) => {
    // notify(type, data.message, data.description);
    setState({ ...state, loading });
  };
  const onError = (description:any) => {
    return showNotification(false, 'error', {
      message: 'Login failed',
      description
    });
  };
  const onLogin = (description:any) => {
    showNotification(true, 'success', {
      message: 'Logged in',
      description
    });
  }
  const handleLoginResponse = ({ data, status }:any,username:any) => {
    if (status === 401) {
      return toast.success('Invalid username or password')
    }

    if (status === 200 && typeof data.code === 'string' && data.code) {
      console.log(data,'data')
      return authCustomerToken({
        username,
        code: data.code,
        callback: () => onLogin('Successfully logged in, please wait'),
        fallback: () => onError('Invalid username or password')
      });
    }

    onError('Something went wrong');
  };
  const submitLOginForm = (e:any)=>{  
   console.log(userLogin,'login')
     e.preventDefault()
     const username = userLogin.username;
     const password = userLogin.password;
     customerAuth({username,password})
     .then((response) => handleLoginResponse(response, username))
    //  .catch((e) => handleLoginResponse(e.response))
     
  }



  return (
    <>
      <div
        className="  relative top-0 left-0"
        id="about"
        style={{
          backgroundImage: "url(" + "../assets/bg.png" + ")",
          backgroundPosition: "center ",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "20vh",
          width: "100%",

          zIndex: 1,
        }}
      >
        {" "}
        <span className=" absolute top-[50%] left-[50%] z-30 translate-x-[] text-white-200 font-medium text-[41px] "></span>
        {/* <div className=" z-2 bg-overlay absolute top-0 left-0 w-full h-full"></div> */}
      </div>
      <div className="flex py-20 justify-center items-center">
        <div className="   w-[500px]">
          <h1 className=" font-[700] text-[20px] text-black-700 text-center">
            Log In
          </h1>
          <div className=" flex justify-end py-6">
            <p className=" text-[12px] font-medium  ">
              Don't have account{" "}
              <span className="text-yellow-100 underline ">
                {" "}
                <Link href={"/register"}>Sing Up Here?</Link>
              </span>
            </p>
          </div>
          <form action="" onSubmit={submitLOginForm}>


            <div className="">
              <label
                className=" text-[12px] font-[400] tracking-[0.0em] mb-2 block"
                htmlFor=""
              >
                UserName
              </label>
              <input
                type="text"
                className="  border-[1px]  border-white-600 rounded-[2px] py-2 w-full  " name="username" value={userLogin.username} onChange={handleChange}
              />
            </div>
            <div className=" mt-8">
              <label
                className=" text-[12px] font-[400] tracking-[0.0em] mb-2 block"
                htmlFor=""
              >
                Password
              </label>
              <input
                type="text"
                className="  border-[1px]  border-white-600 rounded-[2px] py-2 w-full  " name="password" value={userLogin.password} onChange={handleChange}
              />
            </div>
            <div className=" flex justify-end py-6">
              <div>
                <p className=" text-[12px] font-[400] tracking-[0.0em]  underline capitalize">
                  forgot password
                </p>
              </div>
            </div>
            <button type="submit" className=" text-center w-full bg-blue-50 text-white-200 py-2"  >
              Login
            </button>
          </form>
          <div className=" py-10">
            <div className=" text-center">Sign in using</div>
            <div className="flex mt-4 items-center justify-center gap-6">
              <div className=" w-[30px]">
                <img src="../assets/g1.png" className=" w-full" alt="" />
              </div>
              <div className=" w-[50px]">
                <img src="../assets/g2.png" className=" w-full" alt="" />
              </div>
              <div className=" w-[50px]">
                <img src="../assets/g.png" className=" w-full" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscription />
    </>
  );
};

export default Login;
