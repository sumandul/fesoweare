import React from "react";
import { useState, useEffect } from "react";
import Rating from "../../componets/section/resuable/rating";
import { HiOutlineBriefcase, HiOutlineHeart } from "react-icons/hi2";
import Subscription from "../../componets/section/home/subscription";
import Feature from "../../componets/section/home/feature";
import { useDispatch, useSelector } from "react-redux";
import { productDetail } from "../../redux/action/productAction";
import { addToCart } from "../../redux/action/productAction";
import { useRouter } from "next/router";
import { apiBaseUrl } from "../../global/appBaseUrl";
import { FETCH_CART_COUNT, SET_CART_COUNT } from "../../redux/constant";
import { MdVerified } from "react-icons/md";
import axios from "axios";

import { addProductToCart } from "../../icons/request/cart";

const MainDetail = () => {
  const [similar, setSimillar] = useState();
  const [count, setCount] = useState();
  const router = useRouter();
  const dispatch = useDispatch();
  const { slug } = router.query;
  console.log(slug);

  const data = useSelector((state: any) => state.productDetail.data);
  console.log(data, "details");

  useEffect(() => {
    dispatch(productDetail(slug));
    console.log("called data");
  }, [slug]);

  //  const {slugdata}= data
  // console.log(data.slug,'data in detail')
  const addToCartMethod: any = async () => {
    dispatch({
      type: SET_CART_COUNT,
    });
    const result = await addProductToCart(data?.slug, qty);
    if (result.error === null) {
      dispatch({ type: FETCH_CART_COUNT });
    }
  };
  const [fav, setFav] = useState(false);
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  const [qty, setQty] = useState(data?.minQuantity || 1);

  const simillar = async () => {
    if (data?.category_id) {
      let res = await axios.get(
        `${apiBaseUrl}frontend/category/${data?.category_id}/products?filter[limit]=8&filter[skip]=0`
      );
      setSimillar(res.data.res.category_products);
    }
  };

  useEffect(() => {
    simillar();
  }, [data?.category_id]);

  return (
    <div className="bg-white-300">
      <div className="  p-10">
        <div className="container mx-auto w-full ">
          <div className="  bg-white-200 p-6">
            <div className="   flex gap-6 ">
              <div className=" basis-[60%]  align-text-bottom ">
                <div className=" h-[570px] relative flex justify-center items-center  bg-white-500 w-full ">
                  <div className=" ">
                    <img
                      src={`${apiBaseUrl}${data?.images[0].url}`}
                      className=" w-[400px] h-[300px] object-contain"
                      alt=""
                    />
                  </div>
                  <div
                    className={`h-[50px] w-[50px] rounded-full absolute flex justify-center items-center  top-4 right-10 ${
                      fav ? " bg-red-600" : ""
                    } bg-white-200`}
                    style={{ boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.15)" }}
                    onClick={() => setFav(true)}
                  >
                    <div>
                      <HiOutlineHeart
                        className={`text-[23px] ${
                          fav ? " text-white-200" : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 grid  gap-10 grid-cols-2">
                  <div className="h-[255px] py-7 flex justify-center items-center   bg-white-500">
                    {" "}
                    <img
                      src={`${apiBaseUrl}${data?.images[0].url}`}
                      className=" object-contain w-full h-full  "
                      alt=""
                    />
                  </div>
                  <div className="h-[255px]  py-7   bg-white-500">
                    <img
                      src={`${apiBaseUrl}${data?.images[0].url}`}
                      className=" object-contain w-full h-full  "
                      alt=""
                    />
                  </div>
                  <div className="h-[255px]  py-7  flex  justify-center items-center  bg-white-500">
                    <img
                      src={`${apiBaseUrl}${data?.images[0].url}`}
                      className=" object-contain w-full h-full  "
                      alt=""
                    />
                  </div>
                  <div className="h-[255px]  py-7  flex  justify-center items-center  bg-white-500">
                    <img
                      src={`${apiBaseUrl}${data?.images[0].url}`}
                      className=" object-contain w-full h-full  "
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className=" basis-[40%]  px-[40px] ">
                <div>
                  <h1 className="tag text-gray-200 font-[500] text-[18px] ">
                    TAG NAME
                  </h1>
                  <p className="title text-[16px] font-[400] py-2">
                    {data?.name}
                  </p>
                  <span className="price text-[24px] mt-10 font-[400] ">
                    {" "}
                    Rs. {data?.salePrice}
                  </span>
                  <div className=" mt-3">
                    <Rating />
                  </div>
                  <span className="text-[13px] font-[400]  text-[#000] pl-3">
                    ({data?.totalReviews} Reviews)
                  </span>
                  <div className="grid grid-cols-3 mt-10 gap-1">
                    <div className="list block leading-9">
                      {/* <div className="text-[15px] font-[400] tracking-wide  pr-10">
                      Color
                    </div> */}
                      <div className="text-[15px] font-[400] tracking-wide  pr-10">
                        Size
                      </div>
                      <div className="text-[15px] mt-6 font-[400] tracking-wide  pr-10">
                        Quantity
                      </div>
                    </div>
                    <div className="items colspan-2 leading-9">
                      {/* <div className="colors flex  justify-between py-2">
                      <div className="w-5 h-5 bg-gray-100 rounded-full border-2 border-gray-400 mx-2 hover:border-gray-900 active">
                        {" "}
                      </div>
                      <div className="w-5 h-5 bg-gray-500 rounded-full border-2 border-gray-400 mx-2 hover:border-gray-900">
                        {" "}
                      </div>
                      <div className="w-5 h-5 bg-gray-900 rounded-full border-2 border-gray-400 mx-2 hover:border-gray-900">
                        {" "}
                      </div>
                    </div> */}
                      <div className="size flex justify-between pt-1  ">
                        <div className="px-1  ">
                          <span className="  relative px-4 py-1 border-[1px] border-gray-500 z-0">
                            18
                          </span>
                          <div
                            className="-mt-[38px] "
                            style={{
                              clipPath:
                                "polygon(100% 100%, 100% 0%, 100% 0%, 100% 50%, 70% 100%, 100% 100%, 0% 80%)",
                              background: "black",
                            }}
                          >
                            .
                          </div>
                        </div>
                        <div className="px-1 ">
                          <span className="px-4 py-1 border-2 border-gray-200 ">
                            20
                          </span>
                        </div>
                        <div className="px-1 ">
                          <span className="px-4 py-1 border-2 border-gray-200 ">
                            22
                          </span>
                        </div>
                      </div>
                      <div className="quantity mt-6 flex">
                        {" "}
                        <span
                          className=" w-[25px] h-[30px] bg-white-500 text-center"
                          onClick={() =>
                            setQty(qty === data?.maxQuantity ? qty : qty + 1)
                          }
                        >
                          +
                        </span>{" "}
                        <input
                          type="text"
                          value={qty}
                          className="w-1/3 text-center"
                        />{" "}
                        <span
                          className=" w-[25px] h-[30px] bg-white-500 text-center"
                          onClick={() =>
                            setQty(qty === data?.minQuantity ? qty : qty - 1)
                          }
                        >
                          -
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    className=" mt-3  bg-yellow-100 py-2 w-full flex items-center justify-center text-white-200 rounded-[2px] "
                    onClick={addToCartMethod}
                  >
                    <div className=" flex">
                      <HiOutlineBriefcase className=" text-[23px] mr-2" /> Add
                      to cart
                    </div>
                  </button>
                  <div className="store w-full bg-gray-50 py-1 mt-10 px-5 ">
                    <div className="text-[18px] font-[300] py-1 ">
                      SELLER DETAILS
                    </div>
                    <div className="name flex py-3">
                      <div className="flex">
                        <span>Jhon and Jane . Co </span>
                        <span className="text-[#FFA500] pt-1 pl-1">
                          <MdVerified />
                        </span>
                      </div>
                      <div className="ml-auto text-[#FFA500]">
                        {" "}
                        <a href="#">Visit Store &gt; </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div className=" mt-10">
                    <h5 className=" py-2  text-yellow-100 font-[500] text-[18px]">
                      Description
                    </h5>
                    <div className=" w-full border-b-[1px] relative  border-white-500 ">
                      <div className=" w-1/6 border-b-[1px]  absolute  border-yellow-100 "></div>
                    </div>
                    <div className=" font-[400] text-[16px] py-3">
                      <span>Product ID : MBX10293-12938NASD</span>
                      <p className="  leading-[30px]">{data?.description}</p>
                    </div>
                  </div>
                  <div className=" mt-10">
                    <h5 className=" py-2  text-yellow-100 font-[500] text-[18px]">
                      Delivery and Return
                    </h5>
                    <div className=" w-full border-b-[1px] relative  border-white-500 ">
                      <div className=" w-1/6 border-b-[1px]  absolute  border-yellow-100 "></div>
                    </div>
                    <div className=" font-[400] text-[16px]">
                      <p className=" py-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mi a scelerisque
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 ">
            <div className=" flex gap-10 ">
              <div className=" bg-white-200  basis-[80%] ">
                <div className="">
                  <h5 className=" py-2 px-4 font-[500] text-[18px]">
                    Reviews ({data?.totalReviews})
                  </h5>
                  <div className=" ">
                    <div className=" w-full border-b-[1px] relative  border-white-500 ">
                      <div className=" w-1/6 border-b-[1px]  absolute left-3  border-yellow-100 "></div>
                    </div>
                    <div className=" py-4 flex px-3 justify-between">
                      <div>
                        <h4 className=" font-[600] text-[18px]">Jane Doe</h4>
                        <Rating />
                      </div>
                      <div>
                        <span className=" text-white-500 text-[15px]">
                          01/03/2022
                        </span>
                      </div>
                    </div>
                    <p className=" px-3 font-[400] text-[14px] tracking-[0.02em]">
                      I had I was very sad this day. There were friendly people
                      at the bar that engaged with me. Interactions with people
                      was very well needed. I enjoyed a great Long Island ice
                      tea,some tasty vegetarian nachos, and sat by the water
                    </p>
                    <div className=" grid grid-cols-5 mt-10 px-3">
                      <div className=" w-full">
                        <img src="../assets/image 96.png" alt="" />
                      </div>
                      <div className=" w-full">
                        <img src="../assets/image 96.png" alt="" />
                      </div>
                      <div className=" w-full">
                        <img src="../assets/image 96.png" alt="" />
                      </div>
                      <div className=" w-full">
                        <img src="../assets/image 96.png" alt="" />
                      </div>
                    </div>
                    <div className=" px-3">
                      <div
                        className=" border-b-[1px]"
                        style={{ margin: "40px 0px" }}
                      ></div>
                    </div>
                  </div>
                  <div className=" mt-10 ">
                    <div className=" py-4 flex px-3 justify-between">
                      <div>
                        <h4 className=" font-[600] text-[18px]">Jane Doe</h4>
                        <Rating />
                      </div>
                      <div>
                        <span className="  text-white-500 text-[15px]">
                          01/03/2022
                        </span>
                      </div>
                    </div>
                    <p className=" px-3 font-[400] text-[14px] tracking-[0.02em]">
                      I had I was very sad this day. There were friendly people
                      at the bar that engaged with me. Interactions with people
                      was very well needed. I enjoyed a great Long Island ice
                      tea,some tasty vegetarian nachos, and sat by the water
                    </p>
                    <div className=" grid mb-10 grid-cols-5 mt-10 px-3">
                      <div className=" w-full">
                        <img src="../assets/image 96.png" alt="" />
                      </div>
                      <div className=" w-full">
                        <img src="../assets/image 96.png" alt="" />
                      </div>
                      <div className=" w-full">
                        <img src="../assets/image 96.png" alt="" />
                      </div>
                      <div className=" w-full">
                        <img src="../assets/image 96.png" alt="" />
                      </div>
                    </div>
                    <div className=" ">
                      <div
                        className=" border-b-[1px]"
                        style={{ marginTop: "30px" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" basis-[20%] m ">
                <div className=" bg-white-200 flex pt-4 justify-center">
                  <div>
                    <div
                      className=" w-[153px]
                  h-[165]
                  bg-white-300
                  p-10
                "
                    >
                      <img src="../assets/image 96.png" alt="" />
                    </div>
                    <div className=" py-4">
                      <div className=" text-center opacity-[0.5] text-[13px] font-[400]">
                        Tech watch 2022 v2.0{" "}
                      </div>
                      <p className=" text-[16px] font-[500] text-center">
                        Rs 1200
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" bg-white-200 mt-8 flex pt-4 justify-center">
                  <div>
                    <div
                      className=" w-[153px]
                  h-[165]
                  bg-white-300
                  p-10
                "
                    >
                      <img src="../assets/image 92.png" alt="" />
                    </div>
                    <div className=" py-4">
                      <div className=" text-center opacity-[0.5] text-[13px] font-[400]">
                        Tech watch 2022 v2.0{" "}
                      </div>
                      <p className=" text-[16px] font-[500] text-center">
                        Rs 1200
                      </p>
                    </div>
                  </div>
                </div>

                <div className=" mt-8 bg-white-200 flex pt-4 justify-center">
                  <div>
                    <div
                      className=" w-[153px]
                  h-[165]
                  bg-white-300
                  p-10
                "
                    >
                      <img src="../assets/image 95.png" alt="" />
                    </div>
                    <div className=" py-4">
                      <div className=" text-center opacity-[0.5] text-[13px] font-[400]">
                        Tech watch 2022 v2.0{" "}
                      </div>
                      <p className=" text-[16px] font-[500] text-center">
                        Rs 1200
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" mt-8 bg-white-200 flex pt-4 justify-center">
                  <div>
                    <div
                      className=" w-[153px]
                  h-[165]
                  bg-white-300
                  p-10
                "
                    >
                      <img src="../assets/image 96.png" alt="" />
                    </div>
                    <div className=" py-4">
                      <div className=" text-center opacity-[0.5] text-[13px] font-[400]">
                        Tech watch 2022 v2.0{" "}
                      </div>
                      <p className=" text-[16px] font-[500] text-center">
                        Rs 1200
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Feature title={"Similar"} similar={similar} />

      <Subscription />
    </div>
  );
};

export default MainDetail;
