import React from "react";

const Subscription = () => {
  return (
    <div className=" mt-20 bg-blue-50 flex justify-center  items-center py-20">
      <div className="">
        <div className=" text-white-200 opacity-[0.8] ">
          <h3 className=" text-[28px]  font-normal">
            Get notification for New Deals
          </h3>
          <p className=" font-normal text-[14px] leading-[26px]">
            lorem ipsum dolot sit ametlorem ipsum dolot sit amet
          </p>
        </div>
        <div className=" flex mt-4">
          <input
            type="text"
            placeholder=" yourmail@example.com"
            className=" px-3 py-3 w-full"
          />
          <button className=" font-normal text-[14px] px-2 py-3 bg-yellow-100 text-white-200 ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
