import React, { useEffect, useState } from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import Subscription from "../componets/section/home/subscription";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { GetCartItems } from "../redux/action/productAction";
import { getAllCartItems } from "../icons/request/cart";
import CartCheckOut from "../componets/section/cart/checkout";
import { Popconfirm } from "antd";
import Link from "next/link";
import router from "next/router";
import CartList from "../componets/section/cart/elements/cartlist";
import Quantity from "../componets/section/cart/elements/quantity";
import { CART_SET, FETCH_CART_COUNT, SET_CART_COUNT } from "../redux/constant";
import { apiBaseUrl } from "../global/appBaseUrl";
import withAuthHeader from "../api/_withAUthHeaders";
import deleteItemAPi from "../api/cart";
import axios from "axios";
import CartComponent from "../componets/section/cart/cart";
import BreadCrumb from "../componets/section/utilities/breadcum";
import { resolveOnChange } from "antd/es/input/Input";
import Head from "next/head";
const Cart = () => {
  const cart = useSelector((state: any) => state.cartReducer.count);
  const dispatch = useDispatch();
  const [cartData, setCartData] = useState<any>();
  const [subTotal, setSubTotal] = useState<any>();
  const [grandTotal, setGrandTotal] = useState<any>();
  const [chnage, setChange] = useState<any>(0);
  // const [qty, setQty] = useState(1);
  const loggedIn = !!Cookies.get("x-jwt-access-token");
  const [qty, setQty] = useState(1);

  const fetchCartItems = async () => {
    try {
      const response = await getAllCartItems();
      setCartData(response.data.cartItems);
      // dispatch({ type: CART_SET, payload: response?.data });
    } catch (err) {
      dispatch({ type: CART_SET, payload: null });
      dispatch({ type: SET_CART_COUNT, payload: 0 });
    }
  };

  useEffect(() => {
    if (!loggedIn) {
      // message.error('You need to login first. We are redirecting you to login page');
      router.push("/login");
    } else {
      fetchCartItems();
    }
  }, [loggedIn, chnage]);

  const removeITem = async (id: number) => {
    try {
      const apiUrl = `${apiBaseUrl}/v1/carts/items/?id=${id}`;
      const res = await axios.delete(apiUrl, { headers: withAuthHeader() });
      if (res.status === 200) {
        fetchCartItems();
        dispatch({ type: FETCH_CART_COUNT });
      }
    } catch (error) {}
  };

  var Total = 0;
  var coupon = 600;
  var discount = 100;
  var shippingfee = 250;
  const recalculate = () => setChange(chnage + 1);

  useEffect(() => {
    cartData?.forEach((item: any) => {
      Total += item?.quantity * item?.product?.salePrice;
      setSubTotal(Total);
      setGrandTotal(Total + coupon + shippingfee - discount);
    });
  }, [cartData, chnage]);
  console.log(subTotal, "total");

  return (
    <div>
      <Head>
        <title>Cart</title>
      </Head>
      <div className="  container mx-auto">
        <h1 className=" text-center font-[400] pt-8  text-black-800 text-[32px]">
          MY CART
        </h1>
        <BreadCrumb component="Shopping Cart" />
        <div className=" mt-10 ">
          <div className="flex gap-20">
            <div className="  basis-[65%]">
              <div className=" flex justify-between">
                <div className=" flex items-center gap-2 font-[400] text-[13px] text-blue-200">
                  <HiArrowLongLeft className=" text-[20px]" /> Continue Shopping
                </div>
                <div className=" font-[600] text-[18px]">{cart} Items</div>
              </div>
              <div className="mt-4">
                <CartComponent
                  recalculate={recalculate}
                  removeITem={removeITem}
                  cartData={cartData}
                  qty={qty}
                  setQty={setQty}
                />
              </div>
            </div>
            <div className=" basis-[35%]">
              <CartCheckOut subTotal={subTotal} grandTotal={grandTotal} />
            </div>
          </div>
        </div>
      </div>
      <Subscription />
    </div>
  );
};

export default Cart;
