import React from "react";
import Rating from "../componets/section/resuable/rating";
import { HiOutlineX } from "react-icons/hi";
import { Checkbox } from "antd";

const seachdata = [
  {
    img: "../assets/image 92.png",
    title:
      "Stimula Lifestyle Comfy Winter Fall Spring Boots for Women, Warm & Cozy Size",
    price: 1200,
  },
];

const Search = () => {
  const onChange = (e: any) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className=" container mx-auto">
      <div
        className=" py-5
      "
      >
        <div className=" flex gap-10">
          <div className="  basis-[20%]">
            <div>
              <div className="py-3">
                <h4 className=" text-[15px] font-[400]">Product Filter</h4>
              </div>
              <div className="border-t-[1px] py-4 border-b-[1px] border-white-1000">
                <div className=" flex items-center justify-between">
                  <h3 className=" text-[15px] font-[600]">Product Rating</h3>
                  <div>
                    <img src="../assets/r.png" alt="" />
                  </div>
                </div>
                <div>
                  <Rating />
                  <Rating />
                  <Rating />
                  <Rating />
                </div>
              </div>
              <div className="border-t-[1px] py-4 border-b-[1px] border-white-1000">
                <div className=" flex items-center justify-between">
                  <h3 className=" text-[15px] font-[600]">Brand</h3>
                  <div>
                    <img src="../assets/r.png" alt="" />
                  </div>
                </div>
                <div className=" mt-3">
                  <Checkbox onChange={onChange}>lorem</Checkbox>
                </div>
                <div className=" mt-3">
                  <Checkbox onChange={onChange}>lorem</Checkbox>
                </div>
                <div className=" mt-3">
                  <Checkbox onChange={onChange}>lorem</Checkbox>
                </div>
                <div className=" mt-3">
                  <Checkbox onChange={onChange}>lorem</Checkbox>
                </div>
                <div className=" mt-3">
                  <Checkbox onChange={onChange}>lorem</Checkbox>
                </div>
                <div className=" mt-3">
                  <Checkbox onChange={onChange}>lorem</Checkbox>
                </div>
              </div>
              <div className="border-t-[1px] py-4  border-b-[1px] border-white-1000">
                <div className=" flex items-center justify-between">
                  <h3 className=" text-[15px] font-[600]">Price</h3>
                  <div>
                    <img src="../assets/r.png" alt="" />
                  </div>
                </div>
                <div className=" mt-3">
                  <Checkbox onChange={onChange}>Under Rs. 1000</Checkbox>
                </div>
                <div className=" mt-3">
                  <Checkbox onChange={onChange}>Rs. 1000 to Rs. 3000</Checkbox>
                </div>
                <div className=" mt-3">
                  <Checkbox onChange={onChange}>Rs. 3000 to Rs. 5000</Checkbox>
                </div>
              </div>
            </div>
          </div>
          <div className=" basis-[80%]">
            <div className=" flex justify-between">
              <div>
                <span className=" text-[14px] font-[400] text-black-700">
                  31 products
                </span>
              </div>
              <div className=" flex justify-start gap-10">
                <div className=" ">
                  <div className=" flex  items-center">
                    <div>
                      <span className=" text-[13px] pr-5 text-black-700 font-[400] w-full">
                        Sort by :
                      </span>{" "}
                    </div>
                    <div>
                      <select
                        name=""
                        id=""
                        className=" text-[14px] font-[300] text-black-700  px-10 py-2 bg-white-850 w-full"
                      >
                        <option value="">Recommended</option>
                        <option value="">Recommended</option>
                        <option value="">Recommended</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className=" flex  items-center">
                  <div>
                    <span className=" text-[13px] pr-5 text-black-700 font-[400] w-full">
                      Sort by :
                    </span>{" "}
                  </div>
                  <div>
                    <select
                      name=""
                      id=""
                      className=" text-[14px] font-[300] text-black-700   bg-white-850  px-2 py-2"
                    >
                      <option value="">16</option>
                      <option value="">24</option>
                      <option value="">40</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-3 flex gap-5">
              <div className=" flex justify-between items-center rounded-[5px] py-1  px-2 bg-blue-1000 text-white-200">
                Filter <HiOutlineX />
              </div>
              <div className=" flex justify-between items-center rounded-[5px] px-2 py-1  bg-blue-1000 text-white-200">
                electronics <HiOutlineX />
              </div>
              <div>
                <span className=" underline font-[300] text-[14px] text-black-700 opacity-[0.5]">
                  clear
                </span>
              </div>
            </div>
            <div className=" grid  mt-8 grid-cols-4">
              {seachdata.map((data, i) => {
                return (
                  <div key={i} className="custom_hover">
                    <div className=" bg-white-300 relative ">
                      <div className="  bg-white-300 flex justify-center  items-center w-[226px] h-[214px] ">
                        <div>
                          <img src={data.img} alt="" />
                        </div>
                      </div>
                      {i === 0 || i === 2 || i === 4 ? (
                        <div className=" text-white-200 text-center w-[57px] bg-yellow-100 top-4 right-4 absolute h-[26px] rounded-[2px]">
                          -25%
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className=" bg-transparent px-4 pt-8 pb-4">
                      <p>Spring Boots for Women</p>
                      <div className=" flex items-center justify-between">
                        <div>
                          <Rating />
                          <span> (12 Reviews)</span>
                        </div>
                        <div>
                          <span className=" font-semibold">Rs 1200 </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
