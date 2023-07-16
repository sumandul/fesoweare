import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div>
        <h3 className=" font-[500] text-[15px]">My Account</h3>
        <ul className=" text-[13px] font-[500] text-black-700">
          <Link href={"/profile"}>
            <li className=" mt-3 text-yellow-100">Profile</li>
          </Link>

          <Link href={"/address"}>
            {" "}
            <li className="mt-3">Address</li>
          </Link>
          <Link href={"/payment"}>
            {" "}
            <li className="mt-3">Payment Options </li>
          </Link>

          <li className=" mt-3">Discount Coupons</li>
          <Link href={"/wishlist"}>
            <li className=" mt-3">My Wish List</li>
          </Link>
        </ul>
      </div>
      <div className=" mt-3">
        <h3 className=" font-[500] text-[15px]">Orders</h3>
        <ul className="  text-[13px] font-[500] text-black-700">
          <Link href={"/order"}>
            <li className="mt-3">My Orders </li>
          </Link>
          <li className="mt-3">My Cancelations </li>
        </ul>
      </div>
      <div className=" mt-3">
        <h3 className=" font-[500] text-[15px]">Reviews</h3>
      </div>
      <div className=" mt-3">
        <h3 className=" font-[500] text-[15px]">Other Services</h3>
        <div className=" mt-3 bg-white-900 border-[1px] h-[72px] w-full border-white-1000 rounded-[5px]"></div>
        <div className=" mt-3 bg-white-900 border-[1px] h-[72px] w-full border-white-1000 rounded-[5px]"></div>
      </div>
    </div>
  );
};

export default Sidebar;
