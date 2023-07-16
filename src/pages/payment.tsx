import React from "react";
import Layout from "../componets/section/layout";

const payment = () => {
  return (
    <Layout>
      <div className=" bg-white-200">
        <div className=" flex items-center justify-between border-b-[1px] py-4 text-[12px] font-[600] border-white-600 px-4">
          <div>
            <h5>My Payments</h5>
          </div>
        </div>
        <div className=" flex justify-center items-center py-40">
          <div>
            <img src="../assets/ad.png" alt="" className=" ml-10" />
            <div>
              {" "}
              <span className=" text-white-950 text-[12px] font-[300] ml-8">
                No payment saved
              </span>
              <div>
                <button className=" mt-3 text-blue-50 border-[1px] py-3 border-black-700 px-4 ">
                  Add Payment Option
                </button>
              </div>
            </div>
            \
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default payment;
