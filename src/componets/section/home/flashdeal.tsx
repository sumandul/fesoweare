import React, { useEffect } from "react";
import Slider from "react-slick";
import Rating from "../resuable/rating";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { banner } from "../../../redux/action/productAction";
import { apiBaseUrl } from "../../../global/appBaseUrl";
interface flasedealProps {
  flasedeal: any;
}

const Flashdeal: React.FC<flasedealProps> = ({ flasedeal }) => {
  const dispatch = useDispatch();

  var settings = {
    dots: false,
    arrow: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       initialSlide: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 4,
    //       slidesToScroll: 1,
    //     },
    //   },
  };
  useEffect(() => {
    dispatch(banner());
  }, []);
  const sliderData = [
    {
      img: "../assets/image 90.png",
      name: "Winter Sport Shopping",
      price: 1230,
    },
    {
      img: "../assets/image 95.png",
      name: "Winter Sport Shopping",
      price: 1230,
    },
    {
      img: "../assets/image 96.png",
      name: "Winter Sport Shopping",
      price: 1230,
    },
  ];
  return (
    <>
      <div className="container mt-32 mx-auto">
        <div className="   grid  grid-cols-2">
          <div className="  flex items-center  justify-end">
            <div>
              <h1 className=" title relative  text-[26px] font-semibold">
                Flash <span className=" text-[22px] font-normal">Deals</span>
                <div className=" border-b-4 border-black-200 absolute top-[82%] left-[1%] w-[34px] "></div>
              </h1>
            </div>
          </div>
          <div className=" justify-self-end ml-[800px]">
            <div className=" flex text-[20px] font-medium gap-3">
              <div>
                <div className=" w-[48px] h-[44px] space-x-1 flex justify-center items-center  text-white-200 bg-yellow-100  ">
                  <span className=" tracking-[3px]">00 </span>
                </div>
                <span className=" text-[13px] text-center font-medium">
                  Days
                </span>
              </div>
              <div>
                <div className=" w-[48px] h-[44px] flex justify-center items-center  text-white-200 bg-yellow-100  ">
                  <span className=" tracking-[3px]">12 </span>
                </div>
                <span className=" text-[13px] text-center font-medium">
                  Hours
                </span>
              </div>
              <div>
                <div className=" w-[48px] h-[44px] flex justify-center items-center  text-white-200 bg-yellow-100  ">
                  <span className=" tracking-[3px]">12 </span>
                </div>
                <span className=" text-[13px] text-center font-medium">
                  Minutes
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" grid mt-10 grid-cols-5 gap-10">
          {flasedeal?.map((data: any, i: number) => {
            return (
              <Link href={`/product/${data.slug}`} key={i}>
                <div className="custom_hover duration-500 ">
                  <div className=" bg-white-300 relative ">
                    <div className="  bg-white-300 h-[290px]  flex justify-center  items-center ">
                      <div className=" overflow-hidden ">
                        <img
                          src={`${apiBaseUrl}${data?.images[0]?.url}`}
                          className="duration-500  w-[200px] object-contain "
                          alt=""
                        />
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
                    <p>{data.name}</p>
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
              </Link>
            );
          })}
        </div>
      </div>
      <div className=" container mt-20 mx-auto">
        <div className=" grid gap-10 grid-cols-3">
          <div className=" bg-white-300 px-4 py-4">
            <h3 className=" font-semibold text-[16px] text-black-200 opacity-[0.9] ">
              Mens Popular Picks
            </h3>
            <div className=" grid gap-4 grid-cols-3 mt-4">
              <div>
                <div className=" bg-white-200">
                  <div className=" w-[115px] h-[110px] flex  justify-center items-center bg-white-200">
                    <div>
                      <div>
                        <img
                          src="../assets/image 90.png"
                          className=" w-[76px]  h-"
                          alt=""
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <p className=" mt-2 font-medium text-center">Rs. 1529</p>
              </div>
              <div>
                <div className=" bg-white-200">
                  <div className=" w-[115px] h-[110px] flex  justify-center items-center bg-white-200">
                    <div>
                      <div>
                        <img
                          src="../assets/image 95.png"
                          className=" w-[76px]  h-"
                          alt=""
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="  mt-2 font-medium text-center">Rs. 1529</p>
              </div>
              <div>
                <div className=" bg-white-200">
                  <div className=" w-[115px] h-[110px] flex  justify-center items-center bg-white-200">
                    <div>
                      <div>
                        <img
                          src="../assets/image 92.png"
                          className=" w-[76px]  h-"
                          alt=""
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <p className=" mt-2 font-medium text-center">Rs. 1529</p>
              </div>
            </div>
          </div>
          <div className=" bg-white-300 px-4 py-4">
            <h3 className=" font-semibold text-[16px] text-black-200 opacity-[0.9] ">
              New Arrival
            </h3>
            <div className=" grid gap-8 grid-cols-3 mt-4">
              <div>
                <div className=" bg-white-200">
                  <div className=" w-[115px] h-[110px] flex  justify-center items-center bg-white-200">
                    <div>
                      <div>
                        <img
                          src="../assets/image 92.png"
                          className=" w-[76px]  h-"
                          alt=""
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <p className=" mt-2 font-medium text-center">Rs. 1529</p>
              </div>
              <div>
                <div className=" bg-white-200">
                  <div className=" w-[115px] h-[110px] flex  justify-center items-center bg-white-200">
                    <div>
                      <div>
                        <img
                          src="../assets/image 96.png"
                          className=" w-[76px]  h-"
                          alt=""
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="  mt-2 font-medium text-center">Rs. 1529</p>
              </div>
              <div>
                <div className=" bg-white-200">
                  <div className=" w-[115px] h-[110px] flex  justify-center items-center bg-white-200">
                    <div>
                      <div>
                        <img
                          src="../assets/image 90.png"
                          className=" w-[76px]  h-"
                          alt=""
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <p className=" mt-2 font-medium text-center">Rs. 1529</p>
              </div>
            </div>
          </div>
          <div className=" bg-white-300 px-4 py-4">
            <h3 className=" font-semibold text-[16px] text-black-200 opacity-[0.9] ">
              Discount Mania
            </h3>
            <div className=" grid gap-8 grid-cols-3 mt-4">
              <div>
                <div className=" bg-white-200">
                  <div className=" w-[115px] h-[110px] flex  justify-center items-center bg-white-200">
                    <div>
                      <div>
                        <img
                          src="../assets/image 111.png"
                          className=" w-[76px]  h-"
                          alt=""
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <p className=" mt-2 font-medium text-center">Rs. 1529</p>
              </div>
              <div>
                <div className=" bg-white-200">
                  <div className=" w-[115px] h-[110px] flex  justify-center items-center bg-white-200">
                    <div>
                      <div>
                        <img
                          src="../assets/image 112.png"
                          className=" w-[76px]  h-"
                          alt=""
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="  mt-2 font-medium text-center">Rs. 1529</p>
              </div>
              <div>
                <div className=" bg-white-200">
                  <div className=" w-[115px] h-[110px] flex  justify-center items-center bg-white-200">
                    <div>
                      <div>
                        <img
                          src="../assets/image 100.png"
                          className=" w-[76px]  h-"
                          alt=""
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <p className=" mt-2 font-medium text-center">Rs. 1529</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-20 flex">
          <div className="home-slide basis-[60%]"> </div>
          <div className=" ml-4 basis-[50%]">
            <div className=" bg-white-300 w-full max-h-[250px] px-4 py-2 ">
              <h1 className="text-black-200 opacity-[0.8] text-[24px]  ">
                {" "}
                Save{" "}
                <span className=" text-[30px] font-semibold text-yellow-300">
                  up to 40%
                </span>{" "}
                on Sport Shoes lorem ipsum dol.
              </h1>
              <p>Buy new line of sport wears and spark like a gem</p>
              <div className=" flex justify-between items-center">
                <div>
                  {" "}
                  <button
                    className=" mt-6 capitalize rounded-[2px] text-[15px] font-normal text-black-200 bg-white-200 py-3 px-8"
                    style={{ boxShadow: "0px 1px 8px rgba(0, 0, 0, 0.12)" }}
                  >
                    shop now{" "}
                  </button>
                </div>
                <div className="w-[148px] h-[148px]">
                  <img
                    src="../assets/image 95.png"
                    className=" w-full h-full object-contain"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className=" mt-[20px] bg-white-300 w-full max-h-[250px] px-4 py-2 ">
              <h1 className="text-black-200 opacity-[0.8] text-[24px]  ">
                {" "}
                Save{" "}
                <span className=" text-[30px] font-semibold text-black-200">
                  up to 40%
                </span>{" "}
                on Sport Shoes lorem ipsum dol.
              </h1>
              <p>Buy new line of sport wears and spark like a gem</p>
              <div className=" flex justify-between items-center">
                <div>
                  {" "}
                  <button
                    className=" mt-6 capitalize rounded-[2px] text-[15px] font-normal text-black-200 bg-white-200 py-3 px-8"
                    style={{ boxShadow: "0px 1px 8px rgba(0, 0, 0, 0.12)" }}
                  >
                    shop now{" "}
                  </button>
                </div>
                <div className="w-[148px] h-[148px]">
                  <img
                    src="../assets/image 95.png"
                    className=" w-full h-full object-contain"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flashdeal;
