import React, { useState, useEffect } from "react";
import Rating from "../resuable/rating";
import Link from "next/link";
import { apiBaseUrl } from "../../../global/appBaseUrl";
import { feature } from "../../../redux/action/productAction";
import { useDispatch } from "react-redux";

const featuredata = [
  {
    img: "../assets/image 90.png",
    name: "Spring Boots for Womelorem ipsum",
    price: 1120,
  },
  {
    img: "../assets/image 92.png",
    name: "Spring Boots for Womelorem ipsum",
    price: 1120,
  },
  {
    img: "../assets/image 111.png",
    name: "Spring Boots for Womelorem ipsum",
    price: 1120,
  },
  {
    img: "../assets/image 108.png",
    name: "Spring Boots for Womelorem ipsum",
    price: 1120,
  },
  {
    img: "../assets/image 112.png",
    name: "Spring Boots for Womelorem ipsum",
    price: 1120,
  },
  {
    img: "../assets/image 95.png",
    name: "Spring Boots for Womelorem ipsum",
    price: 1120,
  },
  {
    img: "../assets/image 92.png",
    name: "Spring Boots for Womelorem ipsum",
    price: 1120,
  },
  {
    img: "../assets/image 96.png",
    name: "Spring Boots for Womelorem ipsum",
    price: 1120,
  },
];
interface MyComponentProps {
  title: string;
  similar: any;
}

const Feature: React.FC<MyComponentProps> = ({ title, similar }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(feature());
  }, []);
  return (
    <div className="container mt-20 mx-auto">
      <h1 className=" title relative text-center text-[26px] font-semibold">
        {title} <span className=" text-[22px] font-normal">Products</span>
        <div className=" border-b-4 border-black-200 absolute top-[82%] left-[44%] w-[34px] "></div>
      </h1>
      {similar ? (
        <div className=" mt-10 grid gap-4 grid-cols-4 ">
          {similar?.map((data: any, i: number) => {
            return (
              <Link href={`/product/${data.slug}`} key={i}>
                <div
                  className=" flex gap-8 px-4 py-4 border  border-white-400"
                  key={i}
                >
                  <div className=" max-h-[100px] w-[100px]">
                    <img
                      src={`${apiBaseUrl}${data?.images[0]?.url}`}
                      className=" w-full h-full   object-contain"
                      alt=""
                    />
                  </div>
                  <div>
                    <h4 className="  font-normal text-[14px]">{data.name}</h4>
                    <Rating />
                    <span className="  capitalize font-normal">
                      rs {data.salePrice}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className=" mt-10 grid gap-4 grid-cols-4 ">
          {featuredata?.map((data: any, i: number) => {
            return (
              <Link href={`/product/${data.slug}`} key={i}>
                <div
                  className=" flex gap-8 px-4 py-4 border  border-white-400"
                  key={i}
                >
                  <div className=" max-h-[100px] w-[100px]">
                    <img
                      src={data.img}
                      className=" w-full h-full   object-contain"
                      alt=""
                    />
                  </div>
                  <div>
                    <h4 className="  font-normal text-[14px]">{data.name}</h4>
                    <Rating />
                    <span className="  capitalize font-normal">
                      rs {data.price}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Feature;
