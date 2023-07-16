import React, { useState } from "react";
import Layout from "../componets/section/layout";
import Link from "next/link";
import { Button, Checkbox } from "antd";
import PopModal from "../componets/section/utilities/modal";

const Address = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const onChange = (e: any) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <Layout>
      <div className=" bg-white-200">
        <div className=" flex items-center justify-between border-b-[1px] py-4 text-[12px] font-[600] border-white-600 px-4">
          <div>
            <h5>My Address Book</h5>
          </div>
          <div> </div>
        </div>
        <div className=" flex justify-center items-center py-40">
          <div>
            <img src="../assets/ad.png" alt="" className=" ml-8" />
            <div>
              {" "}
              <span className=" text-white-950 text-[12px] font-[300] ml-3">
                No address saved
              </span>
              <div>
                <Button
                  type="primary"
                  className=" mt-3 text-blue-50 border-[1px] border-black-700 px-4 "
                  onClick={showModal}
                >
                  Add Address
                </Button>
              </div>
            </div>
            <PopModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
              <div className=" py-4">
                <div className="  grid grid-cols-2 gap-6 text-[12px] font-[400] px-4">
                  <div>
                    <label htmlFor="">First name</label>
                    <input
                      type="text"
                      className=" border-[1px] mt-2 py-3 border-black-700 bg-white-300 w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="">Last Name</label>
                    <input
                      type="text"
                      className=" border-[1px] py-3 mt-2 border-black-700 bg-white-300 w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="">Contact Number</label>
                    <input
                      type="text"
                      className=" border-[1px] py-3 mt-2 border-black-700 bg-white-300 w-full"
                    />
                  </div>
                </div>
                <div className=" px-4 mt-4">
                  <h6 className=" text-[12px] font-[700] opacity-[0.5]">
                    ADDRESS
                  </h6>
                  <div className=" mt-3 grid grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="">Province</label>
                      <input
                        type="text"
                        className=" border-[1px] py-3 mt-2 border-black-700 bg-white-300 w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="">District</label>
                      <input
                        type="text"
                        className=" border-[1px] py-3 mt-2 border-black-700 bg-white-300 w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="">City</label>
                      <input
                        type="text"
                        className=" border-[1px] py-3 mt-2 border-black-700 bg-white-300 w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="">Nearest Landmark </label>
                      <input
                        type="text"
                        className=" border-[1px] py-3 mt-2 border-black-700 bg-white-300 w-full"
                      />
                    </div>
                    <div className=" col-span-2">
                      <label htmlFor="">Address line 1</label>
                      <input
                        type="text"
                        className=" border-[1px] py-3 mt-2 border-black-700 bg-white-300 w-full"
                      />
                    </div>
                    <div className=" col-span-2">
                      <label htmlFor="">Address line 2</label>
                      <input
                        type="text"
                        className=" border-[1px] py-3 mt-2 border-black-700 bg-white-300 w-full"
                      />
                    </div>
                    <Checkbox onChange={onChange}>
                      Send me promotional contents
                    </Checkbox>
                  </div>
                </div>
              </div>
            </PopModal>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Address;
