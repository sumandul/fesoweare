import React from "react";
import Link from "next/link";
import Layout from "../componets/section/layout";
const Account = () => {
  return (
    <Layout>
      <div className=" basis-[60%] ">
        <div className="">
          <div className=" flex justify-between items-center py-4 bg-white-300 px-4">
            <div>
              <h4 className=" font-[500] text-[16px]">
                <span className=" font-[400] mr-2 text-[12px]">welcome</span>
                DENVER
              </h4>
            </div>
            <div>
              <span className=" text-[12px] font-[400]  text-black-700 opacity-[0.5]">
                Profile {">"}
              </span>
            </div>
          </div>
          <div className=" flex justify-between py-6 bg-white-200 px-6">
            <div>
              <img src="../assets/p4.png" alt="" className=" ml-2" />
              <span className="text-[13px] font-[500] text-black-900">
                Lorem
              </span>
            </div>
            <div>
              <img src="../assets/p3.png" alt="" className=" ml-2" />
              <span className="text-[14px] font-[500] text-black-900">
                Reviews
              </span>
            </div>
            <div>
              <img src="../assets/p2.png" alt="" className=" ml-2" />
              <span className="text-[14px] font-[500] text-black-900">
                Coupons
              </span>
            </div>
            <div>
              <img src="../assets/p1.png" alt="" className=" ml-2" />
              <span className="text-[14px] font-[500] text-black-900">
                Coupons
              </span>
            </div>
          </div>
        </div>
        <div className=" bg-white-200 px-4 mt-3 py-6">
          <h3 className=" text-[12px] font-[600]">My Orders</h3>
          <div className=" flex justify-between mt-4">
            <div>
              <img src="../assets/o4.png" alt="" className=" ml-4" />
              <span className=" text-[12px] font-[500] mt-3 text-black-700">
                Cancelled
              </span>
            </div>
            <div>
              <img src="../assets/o3.png" alt="" className=" ml-2" />
              <span className=" text-[12px] font-[500] mt-3 text-black-700">
                unpaid
              </span>
            </div>
            <div>
              <img src="../assets/o1.png" alt="" className=" ml-6" />
              <span className=" text-[12px] font-[500] mt-3 text-black-700">
                Awaiting Shipping
              </span>
            </div>
            <div>
              <img src="../assets/o1.png" alt="" className=" ml-4" />
              <span className=" text-[12px] font-[500] mt-3 text-black-700">
                To Receive
              </span>
            </div>
          </div>
        </div>
        <div className=" mt-3 bg-white-200">
          <h3>Recent Orders </h3>
          <div>
            <table className="table-auto">
              <thead>
                <tr>
                  <th>PRODUCT</th>
                  <th>ORDER DATE</th>
                  <th>TOTAL</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className=" flex gap-3">
                      <div className="w-[52px] h-[65px]">
                        <img
                          src="../assets/pro.png"
                          className=" w-full h-full object-cover"
                          alt=""
                        />
                      </div>
                      <div>
                        <p>Solid Fuzzy Bodycon Skirt</p>
                        <span>PRODUCTCODE:19231923</span>
                      </div>
                    </div>
                  </td>
                  <td>Malcolm Lockyer</td>
                  <td>1961</td>
                </tr>
                <tr>
                  <td>Witchy Woman</td>
                  <td>The Eagles</td>
                  <td>1972</td>
                </tr>
                <tr>
                  <td>Shining Star</td>
                  <td>Earth, Wind, and Fire</td>
                  <td>1975</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className=" basis-[20%] bg-white-200">hello</div>
    </Layout>
  );
};

export default Account;
