import React, { useState, useEffect } from "react";
import { MdPersonOutline, MdAddShoppingCart } from "react-icons/md";
import Link from "next/link";
import { HiOutlineSearch } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { productCategory } from "../../../redux/action/productAction";
import AllCategories from "../categories/categories";
import dynamic from "next/dynamic";
import Cookies from "js-cookie";
const Navbar = () => {
  const loggedIn = !!Cookies.get("x-jwt-access-token");
  const [dropMenu, setDropDown] = useState(false);
  const [fix, setFix] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productCategory());
  }, []);

  const cart = useSelector((state: any) => state.cartReducer.count);
  return (
    <div className={`${fix ? "fix-menu " : "bg-blue-50   w-full "} `}>
      <div className="  container mx-auto">
        <div className="  flex     justify-between  text-[16px]  ">
          <div className=" flex    ">
            <div className=" py-3">
              <Link href={"/"}>
                <img src="../assets/lo.png" className=" w-[106px]" alt="" />
              </Link>
            </div>
            <ul className=" text-white-200  flex ml-10 ">
              <li
                className=" relative flex pt-6   "
                onMouseEnter={() => setDropDown(true)}
                onMouseLeave={() => setDropDown(false)}
              >
                <AllCategories />
              </li>
              <li className=" pt-6 ml-6  ">Best Deals</li>
            </ul>
          </div>
          <div>
            <ul className=" pt-3 flex  items-center text-white-200    ">
              <li className=" relative ">
                <input
                  type="text"
                  className=" py-2 mr-[6rem] px-4 w-[521px] rounded-[2px] border-2   border-white-100"
                  placeholder="search something to buy"
                />
                <HiOutlineSearch className=" absolute right-[8rem] text-[20px] top-[0.8rem] text-blue-50" />
              </li>
              {loggedIn ? (
                <Link href={"/profile"}>
                  <li className=" mr-10 ">
                    <div className="">
                      <MdPersonOutline className="ml-6 text-[20px] " />
                    </div>
                    <span>Account</span>
                  </li>
                </Link>
              ) : (
                <Link href={"/login"}>
                  <li className=" mr-10 ">
                    <div className="">
                      <MdPersonOutline className="ml-3 text-[20px] " />
                    </div>
                    <span>Login</span>
                  </li>
                </Link>
              )}

              <li className="mr-10">
                <div className="">
                  <MdAddShoppingCart className="ml-4 text-[20px] " />
                </div>
                <span>Wishlist</span>
              </li>
              <Link href={"/cart"}>
                <li className=" ">
                  <div className=" relative">
                    <MdAddShoppingCart className="ml-2 text-[20px] " />
                    <div className="  text-white-200 flex justify-center items-center font-medium text-[12px] bg-yellow-100 w-[20px] top-0 left-7 absolute h-[20px] rounded-full">
                      {cart && cart}
                    </div>
                  </div>
                  <span>Cart</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
