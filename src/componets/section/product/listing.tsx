import Link from "next/link";
import React from "react";
import { apiBaseUrl } from "../../../global/appBaseUrl";
import Rating from "../resuable/rating";
import Image from "next/image";

interface ListingProps {
  catProduct: [];
  isGrid: boolean;
}

const Listing: React.FC<ListingProps> = ({ catProduct, isGrid }) => {
  return (
    <div>
      <div
        className={` grid gap-10  mt-8 ${
          isGrid ? "grid-cols-1" : "grid-cols-4"
        } xl:4`}
      >
        {catProduct?.map((data: any, i: number) => {
          return (
            <Link href={`/product/${data.slug}`} key={i}>
              <div
                className={`custom_hover  ${
                  isGrid ? "flex justify-between `" : ""
                }`}
              >
                <div className=" bg-white-300 relative ">
                  <div
                    className={` bg-white-300 flex ${
                      isGrid
                        ? "justify-start items-center  "
                        : "justify-center tems-center  "
                    }  overflow-hidden  h-[250px] `}
                  >
                    <Image
                      src={`/assets/bg.png`}
                      alt=""
                      height={200}
                      width={200}
                      className=" duration-700  object-contain "
                    />
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
                      <span> ({data.totalReview}Reviews)</span>
                    </div>
                    <div>
                      <span className=" font-semibold">
                        Rs. {data.salePrice}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Listing;
