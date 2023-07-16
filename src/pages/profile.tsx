import { Checkbox } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../componets/section/layout";
import { apiBaseUrl } from "../global/appBaseUrl";
import withAuthHeader from "../api/_withAUthHeaders";

const Profile = () => {
  const [profile, setProfile] = useState<any>();
  const onChange = (e: any) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const fetchProfile = async () => {
    const res = await axios.get(`${apiBaseUrl}/users/me`, {
      headers: withAuthHeader(),
    });
    setProfile(res.data);
  };

  useEffect(() => {
    fetchProfile();
  }, []);
  console.log(profile);
  return (
    <Layout>
      <div className=" bg-white-200">
        <div className=" flex items-center justify-between border-b-[1px] py-4 text-[12px] font-[600] border-white-600 px-4">
          <div>
            <h5>My Profile</h5>
          </div>
        </div>
        <div className=" grid grid-cols-3 gap-10 border-b-[1px] border-white-600 px-4 py-6">
          <div className="">
            <h4 className=" text-[15px] font-[500]">Personal Details</h4>
            <p className=" text-[12px] text-black-700 leading-[18px] ">
              Please use your full name from original government id.
            </p>
          </div>
          <div className=" col-span-2">
            <div className=" grid gap-5 grid-cols-2 text-[12px] font-[400] ">
              <div>
                <label htmlFor="">First name</label>
                <input
                  type="text"
                  defaultValue={profile?.firstName}
                  className=" border-[1px] mt-2 px-2 py-2  border-white-600 bg-white-300 w-full"
                />
              </div>
              <div>
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  defaultValue={profile?.lastName}
                  className=" border-[1px] py-2 mt-2 px-2 border-white-600 bg-white-300 w-full"
                />
              </div>
              <div>
                <label htmlFor="">Date Of Birth</label>
                <input
                  type="text"
                  className=" border-[1px] py-2 mt-2 px-2 border-white-600 bg-white-300 w-full"
                />
              </div>
              <div>
                <label htmlFor="">Primary Phone </label>
                <input
                  type="text"
                  defaultValue={profile?.phone}
                  className=" border-[1px] py-2 mt-2 px-2 border-white-600 bg-white-300 w-full"
                />
              </div>
              <div className=" flex justify-center items-center col-span-2">
                <button className=" hover:bg-yellow-100 bg-blue-50 px-8 w-1/3 py-2 text-white-200 font-[400] text-[12px]">
                  SAVE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-3  gap-10 border-b-[1px] border-white-600 px-4 py-6">
          <div>
            <h4 className=" text-[15px] font-[500]">Email Preferences</h4>
            <p className=" text-[12px] text-black-700 leading-[18px] ">
              Setup Email notifications to receive future deals and order
              details and tract your delivery easily
            </p>
          </div>
          <div className=" col-span-2">
            <div className=" grid gap-5 grid-cols-2  items-center text-[12px] font-[400] ">
              <div>
                <label htmlFor="">Email </label>
                <input
                  type="text"
                  className=" border-[1px]  mt-2 px-2 py-2  border-white-600 bg-white-300 w-full"
                />
              </div>
              <div className=" ">
                <button className=" mt-5 hover:bg-yellow-100 bg-blue-50 px-8 w-full  py-2 text-white-200 font-[400] text-[12px]">
                  SAVE
                </button>
              </div>
              <div>
                <Checkbox onChange={onChange}>
                  Send me promotional contents
                </Checkbox>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-3  gap-10 pb-20  px-4 pt-6">
          <div className="i">
            <h4 className=" text-[15px] font-[500]">Security</h4>
            <p className=" text-[12px] text-black-700 leading-[18px] ">
              Please use a combination of uppercase & lowercase letters and
              number for added security. Do not disclose your password to others
              for safety of your data.
            </p>
          </div>
          <div className=" col-span-2">
            <div className=" grid gap-5 grid-cols-2  items-center text-[12px] font-[400] ">
              <div className=" col-span-2">
                <div>
                  <label htmlFor="">Old Password </label>
                </div>
                <input
                  type="text"
                  className=" border-[1px]  mt-2 px-2 py-2  border-white-600 bg-white-300 w-1/2"
                />
              </div>
              <div className=" col-span-2">
                <div>
                  <label htmlFor="">New Password </label>
                </div>
                <input
                  type="text"
                  className=" border-[1px]  mt-2 px-2 py-2  border-white-600 bg-white-300 w-1/2"
                />
              </div>
              <div className="">
                <div>
                  <label htmlFor=""> Confirm New Password </label>
                </div>
                <input
                  type="text"
                  className=" border-[1px]  mt-2 px-2 py-2  border-white-600 bg-white-300 w-full"
                />
              </div>

              <div>
                <button className=" hover:bg-yellow-100 mt-5 bg-blue-50 px-8 w-full  py-2 text-white-200 font-[400] text-[12px]">
                  SAVE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
