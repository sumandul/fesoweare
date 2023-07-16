import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const Register = () => {
  const [userRegister, setUserRegister] = useState({
    firtaName: "",
    middleName: "",
    lastName: "",
    username: "",
    phone: "",
    password: "",
    email: "",
  });
  const registerUser = () => {};
  const router = useRouter();
  console.log(router);
  useEffect(() => {}, []);
  // router.push("/auth/mobilenumber");
  const dispatch = useDispatch();
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
            Register
          </h1>
          <div className="">
            <label
              className=" text-[12px] font-[400] tracking-[0.0em] mb-2 block"
              htmlFor=""
            >
              First Name
            </label>
            <input
              type="text"
              className="  border-[1px]  border-white-600 rounded-[2px] py-2 w-full  "
            />
          </div>
          <div className=" mt-6">
            <label
              className=" text-[12px] font-[400] tracking-[0.0em] mb-2 block"
              htmlFor=""
            >
              middle Name
            </label>
            <input
              type="text"
              className="  border-[1px]  border-white-600 rounded-[2px] py-2 w-full  "
            />
          </div>
          <div className=" mt-6">
            <label
              className=" text-[12px] font-[400] tracking-[0.0em] mb-2 block"
              htmlFor=""
            >
              Last name
            </label>
            <input
              type="text"
              className="  border-[1px]  border-white-600 rounded-[2px] py-2 w-full  "
            />
          </div>
          <div className=" mt-6">
            <label
              className=" text-[12px] font-[400] tracking-[0.0em] mb-2 block"
              htmlFor=""
            >
              user name
            </label>
            <input
              type="text"
              className="  border-[1px]  border-white-600 rounded-[2px] py-2 w-full  "
            />
          </div>
          <div className=" mt-6">
            <label
              className=" text-[12px] font-[400] tracking-[0.0em] mb-2 block"
              htmlFor=""
            >
              phone number
            </label>
            <input
              type="text"
              className="  border-[1px]  border-white-600 rounded-[2px] py-2 w-full  "
            />
          </div>
          <div className=" mt-6">
            <label
              className=" text-[12px] font-[400] tracking-[0.0em] mb-2 block"
              htmlFor=""
            >
              Email
            </label>
            <input
              type="text"
              className="  border-[1px]  border-white-600 rounded-[2px] py-2 w-full  "
            />
          </div>
          <div className=" mt-6">
            <label
              className=" text-[12px] font-[400] tracking-[0.0em] mb-2 block"
              htmlFor=""
            >
              password
            </label>
            <input
              type="text"
              className="  border-[1px]  border-white-600 rounded-[2px] py-2 w-full  "
            />
          </div>
          <div className=" flex justify-end py-6">
            <div>
              <p className=" text-[12px] font-[400] tracking-[0.0em]  underline capitalize"></p>
            </div>
          </div>
          <button
            className=" text-center w-full bg-blue-50 text-white-200 py-2"
            onClick={registerUser}
          >
            Register
          </button>
          <div className=" py-10">
            <div className=" text-center">Sign in using</div>
            <div className="flex border-b-[1px] pb-3 mt-4 items-center justify-center gap-6">
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
    </>
  );
};

export default Register;
