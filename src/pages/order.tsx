import React from "react";
import Layout from "../componets/section/layout";
const Order = () => {
  return (
    <Layout>
      <div className=" flex justify-between">
        <div className=" basis-[75%] ">
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
          <div className=" mt-3 bg-white-200  px-4 py-6 ">
            <h3 className=" text-[12px] font-[600]">Recent Orders </h3>
            <div>
              <table className="w-full mt-3">
                <thead className=" text-[12px] text-left text-black-700 font-[400] opacity-[0.56]">
                  <tr>
                    <th>PRODUCT</th>
                    <th>ORDER DATE</th>
                    <th>TOTAL</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" text-[12px] font-[400]">
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
                          <h6>Solid Fuzzy Bodycon Skirt</h6>
                          <span>PRODUCTCODE:19231923</span>
                        </div>
                      </div>
                    </td>
                    <td>12/12/2022</td>
                    <td>Rs.1200</td>
                    <td></td>
                  </tr>
                  <tr className=" text-[12px] font-[400]">
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
                          <h6>Solid Fuzzy Bodycon Skirt</h6>
                          <span>PRODUCTCODE:19231923</span>
                        </div>
                      </div>
                    </td>
                    <td>12/12/2022</td>
                    <td>Rs.1200</td>
                    <td></td>
                  </tr>
                  <tr className=" text-[12px] font-[400]">
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
                          <h6>Solid Fuzzy Bodycon Skirt</h6>
                          <span>PRODUCTCODE:19231923</span>
                        </div>
                      </div>
                    </td>
                    <td>12/12/2022</td>
                    <td>Rs.1200</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className=" basis-[20%] bg-white-200 py-6 px-4">
          <div className="flex justify-between">
            <div>
              <h5 className=" text-[12px] font-[600]">Wishlist</h5>
            </div>
            <div className=" text-[10px] font-[300] ">View all {">"}</div>
          </div>
          <div className=" grid grid-cols-2 gap-8 mt-8">
            <div>
              <img src="../assets/image 92.png" className=" w-full" alt="" />
            </div>
            <div>
              <img src="../assets/image 96.png" className=" w-full" alt="" />
            </div>
            <div>
              <img src="../assets/image 95.png" className=" w-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Order;
