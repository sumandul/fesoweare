import React from "react";
import Layout from "../componets/section/layout";
import { HiOutlineShoppingCart, HiOutlineX } from "react-icons/hi";
const Whishlist = () => {
  return (
    <Layout>
      <div className=" mt-3 bg-white-200  px-4 py-6 ">
        <h3 className=" text-[12px] font-[600]">My Wishlist</h3>
        <div>
          <table className="w-full mt-3">
            <thead className=" text-[12px] text-left text-black-700 font-[400] opacity-[0.56]">
              <tr>
                <th>PRODUCT</th>
                <th>STOCK</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className=" text-[12px] font-[400]">
                <td>
                  <div className=" flex gap-3">
                    <div className="w-[52px] h-[65px]">
                      <img
                        src="../assets/R1.png"
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
                <td>In Stock</td>
                <td>Rs.1200</td>
                <td>
                  <div className=" flex gap-6">
                    <div className="w-[26px] h-[26px] flex justify-center items-center rounded-full bg-blue-50">
                      <HiOutlineShoppingCart className=" text-[15px] text-white-200" />
                    </div>
                    <div className="w-[26px] flex justify-center items-center h-[26px] rounded-full bg-blue-50">
                      <HiOutlineX className=" text-[15px] text-white-200" />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className=" text-[12px] font-[400]">
                <td>
                  <div className=" flex gap-3">
                    <div className="w-[52px] h-[65px]">
                      <img
                        src="../assets/R2.png"
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
                <td>In Stock</td>
                <td>Rs.1200</td>
                <td>
                  <div className=" flex gap-6">
                    <div className="w-[26px] h-[26px] flex justify-center items-center rounded-full bg-blue-50">
                      <HiOutlineShoppingCart className=" text-[15px] text-white-200" />
                    </div>
                    <div className="w-[26px] flex justify-center items-center h-[26px] rounded-full bg-blue-50">
                      <HiOutlineX className=" text-[15px] text-white-200" />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className=" text-[12px] font-[400]">
                <td>
                  <div className=" flex gap-3">
                    <div className="w-[52px] h-[65px]">
                      <img
                        src="../assets/R3.png"
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
                <td className=" opacity-[0.5] ">Out of Stock</td>
                <td>Rs.1200</td>
                <td>
                  <div className=" flex gap-6">
                    <div className="w-[26px] h-[26px] flex justify-center items-center rounded-full bg-black-1000 opacity-[0.2]">
                      <HiOutlineShoppingCart className=" text-[15px] text-white-200" />
                    </div>
                    <div className="w-[26px] flex justify-center items-center h-[26px] rounded-full bg-blue-50">
                      <HiOutlineX className=" text-[15px] text-white-200" />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Whishlist;
