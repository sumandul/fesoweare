import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className=" container py-8 mx-auto  ">
      <div className="grid  grid-cols-4">
        <div>
          <h4 className="  relative   text-[14px] font-medium text-blue-50">
            Need help ?
            <div className=" border-b-2 border-yellow-100 absolute top-[82%] left-[0%] w-[34px] "></div>
          </h4>
          <ul className=" mt-4 font-normal text-[12px] text-blue-50">
            {" "}
            <li>
              <Link href={"/"}>Order</Link>
            </li>
            <li className=" mt-2">
              <Link href={"/"}>My Account</Link>
            </li>
            <li className=" mt-2">
              <Link href={"/"}>Cancellations</Link>
            </li>
            <li className=" mt-2">
              <Link href={"/"}>Return Product</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="  relative   text-[14px] font-medium text-blue-50">
            Delivery & Returns
            <div className=" border-b-2 border-yellow-100 absolute top-[82%] left-[0%] w-[34px] "></div>
          </h4>
          <ul className=" mt-4 font-normal text-[12px] text-blue-50">
            {" "}
            <li>
              <Link href={"/"}>Delivery & Collection</Link>
            </li>
            <li className=" mt-2">
              <Link href={"/"}>Return & Refunds</Link>
            </li>
            <li className=" mt-2">
              <Link href={"/"}>Track Order</Link>
            </li>
            <li className=" mt-2">
              <Link href={"/"}>Return Policies</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="  relative   text-[14px] font-medium text-blue-50">
            Delivery & Returns
            <div className=" border-b-2 border-yellow-100 absolute top-[82%] left-[0%] w-[34px] "></div>
          </h4>
          <ul className=" mt-4 font-normal text-[12px] text-blue-50">
            {" "}
            <li>
              <Link href={"/"}>Monthly Payment Plans</Link>
            </li>
            <li className=" mt-2">
              <Link href={"/"}>Giftcards</Link>
            </li>
            <li className=" mt-2">
              <Link href={"/"}>Voucher Codes</Link>
            </li>
            <li className=" mt-2">
              <Link href={"/"}>Voucher Codes</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="  relative   text-[14px] font-medium text-blue-50">
            About Aparrel.
            <div className=" border-b-2 border-yellow-100 absolute top-[82%] left-[0%] w-[34px] "></div>
          </h4>
          <ul className=" mt-4 font-normal text-[12px] text-blue-50">
            {" "}
            <li>
              <Link href={"/"}>About us</Link>
            </li>
            <li className=" mt-2">
              <Link href={"/"}>Careers</Link>
            </li>
            <li className=" mt-2">
              <Link href={"/"}>Press Enquiries</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className=" relative mt-16 border-b-2">
        <div className=" px-2 absolute top-[-30px] left-[50%] bg-white-200 ">
          <span className=" ml-6  text-[12px] font-normal text-blue-50">
            Follow Us
          </span>
          <div className=" flex gap-2">
            <div className=" text-center w-[21px] h-[21px] rounded-full bg-black-500"></div>
            <div className=" text-center w-[21px] h-[21px] rounded-full bg-black-500"></div>
            <div className=" text-center w-[21px] h-[21px] rounded-full bg-black-500"></div>
            <div className=" text-center w-[21px] h-[21px] rounded-full bg-black-500"></div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center py-10">
        <div>
          <p className=" text-blue-50 text-[12px] font-normal">
            Copyright © 2021, Classified Pvt. Ltd. All Rights Reserved
          </p>
          <div className=" flex justify-center mt-2 items-center">
            <div className=" font-normal text-[10px]">
              <span className=" mr-1">Terms & Conditions</span>{" "}
              <span className=" border-l-2 pl-1 ml-2=1 border-black-600">
                Condition of Use
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
