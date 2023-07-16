import React, { useEffect, useState } from "react";
;

const CartCheckOut = ({subTotal,grandTotal}:any) => {
      

  return (
  <>
  
  <p className=" text-end text-[12px] font-[400] text-black-700">
                Need help ? Contact{" "}
                <span className=" underline  text-black-200">
                  Customer Support
                </span>{" "}
              </p>
              <div className=" px-10 py-4 mt-4  rounded-[2px] check-bg ">
                <div className=" flex">
                  <input
                    type="text"
                    className=" border-[1px] px-10 border-white-600 w-full"
                    placeholder="Coupon Code"
                  />{" "}
                  <div>
                    <button className=" px-6 py-2 bg-yellow-100 text-white-200 ">
                      Submit
                    </button>
                  </div>
                </div>
                <div className=" flex justify-between mt-10">
                  <div className=" font-[400]   text-[14px] text-black-700">
                    <div>
                      <span> Sub Total</span>
                    </div>
                    <div className=" mt-2">
                      <span>Coupon</span>
                    </div>
                    <div className=" mt-2">
                      <span>Discount</span>
                    </div>
                    <div className=" mt-2">
                      <span>Shipping Fee</span>
                    </div>
                  </div>
                  <div className=" font-[400]   text-[14px] text-black-700">
                    <div>
                      <span>Rs { subTotal}</span>
                    </div>
                    <div className=" mt-2 text-red-100">
                      <span>Rs 600</span>
                    </div>
                    <div className=" mt-2 text-red-100">
                      <span>Rs 100</span>
                    </div>
                    <div className=" mt-2">
                      <span>Rs 250</span>
                    </div>
                  </div>
                </div>

                <div className=" border-t-[1px]  border-black-200 opacity-[0.2] mt-2"></div>
                <div className=" flex justify-between pt-3 ">
                  <div>
                    <span className="font-[400]   text-[14px] text-black-700">
                      Grand total
                    </span>
                  </div>
                  <div>
                    <span className=" font-[600]   text-[14px] text-black-200">
                      Rs {grandTotal}
                    </span>
                  </div>
                </div>
              </div>
              <button className=" mt-10 bg-blue-50 text-white-200 w-full py-3 tracking-[0.1em] rounded-[2px]">
                CHECKOUT
              </button>
              <p className=" text-center text-black-700 mt-4 font-[400] leading-[21px]">
                consectetur adipiscing elit duis tristique sollicitudin nibh sit
                amet commodo nulla facilisi nullam vehicula ipsum a
              </p>
  
  
  </>
  );
};

export default CartCheckOut;
