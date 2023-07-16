import Link from "next/link";
import React from "react";

import {
  HiOutlineTruck,
  HiOutlineGift,
  HiOutlineDocument,
  HiOutlineCalendar,
} from "react-icons/hi2";

const Banner = () => {
  return (
    <div>
      <div className=" bg-blue-150 h-[100vh]">
        <div className="  container mx-auto">
          <div className=" flex   items-baseline justify-between ">
            <div className=" text-white-200">
              <h1 className=" text-[36px] font-medium">New Arrivals </h1>
              <p className=" text-[18px] leading-[27px] font-normal">
                Lorem ipsum dolor sit amet. consectetur adipiscing elit, lorem
                ipsum.
              </p>
              <div className=" mt-3">
                <Link href={"/"}>
                  <button className=" hover:bg-yellow-100 hover:border-yellow-100  border border-white-300 py-2 px-3 font-semibold ">
                    SHOP NOW
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-[537px]">
              <img
                src="../assets/image 90.png"
                className=" w-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white-300">
        <div className=" container mx-auto">
          <div className=" grid text-black-300 grid-cols-4 py-10  ">
            <div className=" flex items-center gap-2 ">
              <div>
                <HiOutlineTruck className="  text-[40px]" />
              </div>
              <div>
                <h5 className=" text-[16px] font-medium ">Fast Delivery</h5>
                <p className=" text-[12px] font-normal">
                  Lorem ipsum dolor sit amet{" "}
                </p>
              </div>
            </div>
            <div className=" flex items-center gap-2 ">
              <div>
                <HiOutlineGift className="  text-[40px]" />
              </div>
              <div>
                <h5 className=" text-[16px] font-medium ">Best Deals </h5>
                <p className=" text-[12px] font-normal">
                  Lorem ipsum dolor sit amet{" "}
                </p>
              </div>
            </div>
            <div className=" flex items-center gap-2 ">
              <div>
                <HiOutlineDocument className="  text-[40px]" />
              </div>
              <div>
                <h5 className=" text-[16px] font-medium ">20k+ Products</h5>
                <p className=" text-[12px] font-normal">
                  Lorem ipsum dolor sit amet{" "}
                </p>
              </div>
            </div>
            <div className=" flex items-center gap-2 ">
              <div>
                <HiOutlineCalendar className="  text-[40px]" />
              </div>
              <div>
                <h5 className=" text-[16px] font-medium ">Easy Returns</h5>
                <p className=" text-[12px] font-normal">
                  Lorem ipsum dolor sit amet{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
