import React, { useEffect } from "react";
import Slider from "react-slick";
import Carousel from "react-elastic-carousel";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../../../redux/action/productAction";
import { apiBaseUrl } from "../../../global/appBaseUrl";

const PopulalDeals = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productList());
  }, []);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  const data = useSelector((state: any) => state.productData.data);

  console.log(data);
  const items = [
    { id: 1, title: "item #1" },
    { id: 2, title: "item #2" },
    { id: 3, title: "item #3" },
    { id: 4, title: "item #4" },
    { id: 5, title: "item #5" },
  ];
  var settings = {
    dots: false,
    arrow: true,
    // autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 6,

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
    {
      img: "../assets/image 100.png",
      name: "Winter Sport Shopping",
      price: 1230,
    },
    {
      img: "../assets/image 100.png",
      name: "Winter Sport Shopping",
      price: 1230,
    },
    {
      img: "../assets/image 100.png",
      name: "Winter Sport Shopping",
      price: 1230,
    },
    {
      img: "../assets/image 100.png",
      name: "Winter Sport Shopping",
      price: 1230,
    },
  ];
  return (
    <>
      <div className=" container mt-[80px] mx-auto popular_deal ">
        <h1 className=" title relative text-center text-[26px] font-semibold">
          Popular <span className=" text-[22px] font-normal">Deals</span>
          <div className=" border-b-4 border-black-200 absolute top-[82%] left-[44%] w-[34px] "></div>
        </h1>
        <div className=" flex justify-end">
          <Link href={"/"}>
            <button className=" bg-yellow-100 text-white-200 px-3 font-medium py-1 text-[14px] tracking-[1px] rounded-[2px]">
              View all
            </button>
          </Link>
        </div>
        <div className="mt-10">
          <Carousel
            breakPoints={breakPoints}
            pagination={false}
            itemPadding={[6, 10]}
          >
            {data?.products.map((data: any, i: number) => {
              return (
                <Link href={`/product/${data.slug}`} key={i}>
                  <div className="  custom_hover  w-full">
                    <div className=" ">
                      <div className=" overflow-hidden bg-white-300  h-[290px]   flex justify-center items-center">
                        <img
                          src={`${apiBaseUrl}${data?.images[0]?.url}`}
                          className=" duration-500 w-[200px] object-contain "
                          alt="clas"
                        />
                      </div>
                      <div className=" mt-3 px-2 py-3">
                        <h6 className=" text-[16px] font-normal text-black-200 opacity-[0.8]">
                          {data.name}
                        </h6>
                        <span className=" font-medium  text-[18px]">
                          Rs.{data.salePrice}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </Carousel>
        </div>
        <div></div>
      </div>
      <div className=" mt-32 bg-white-300 ">
        <div className=" container mx-auto">
          <div className=" flex items-center  justify-between">
            <div>
              <img
                src="../assets/image 108.png"
                className="h-[161px] w-[172px]"
                alt=""
              />
            </div>
            <div>
              <div className="text-[32px]">
                <p>LOREM IPSUM DOLOR ST AMET</p>
                <span className=" font italic text-[15px]">
                  Lorem isu dolot sit amet{" "}
                </span>
              </div>
            </div>
            <div>
              <button className=" hover:bg-yellow-100  capitalize bg-blue-50 text-white-200 px-4 py-2">
                shop now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopulalDeals;
