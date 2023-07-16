import { Alert } from "antd";
import Link from "next/link";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";

const BrandItem = ({ image, id, name, description, isActive }: any) => {
  return (
    <div
      className="brands-list my-10 flex justify-center items-center "
      key={id}
    >
      <div className="brand-img-wrapper ">
        <div>
          <img
            src={image ? image : "/assets/images/default-image.jpg"}
            alt={name}
            className="w-[100px]  "
          />
        </div>
        <h4 className=" text-center text-[14px] font-[500] mt-6">{name}</h4>
        <h6>{description}</h6>
      </div>
    </div>
  );
};
const Brands = ({ brands = [] }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 592,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="container my-10 mx-auto">
      <div className="section-header">
        <h1 className=" title relative text-center text-[26px] font-semibold">
          Popular <span className=" text-[22px] font-normal">Deals</span>
          <div className=" border-b-4 border-black-200 absolute top-[82%] left-[44%] w-[34px] "></div>
        </h1>
      </div>
      <div className="brands-carousel product-carousel mt-4">
        {Array.isArray(brands) && brands.length > 0 ? (
          <Slider {...settings}>
            {brands.map((brand: any, index: number) => (
              <a href={`brand/${brand.id}`}>
                <div key={index}>
                  <BrandItem {...brand} />
                </div>
              </a>
            ))}
          </Slider>
        ) : (
          <Alert message="No brands yet" type="warning" />
        )}
      </div>
    </div>
  );
};
export default Brands;
