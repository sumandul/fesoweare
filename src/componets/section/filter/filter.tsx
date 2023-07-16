import React, { useState } from "react";
import { Checkbox } from "antd";
import Rating from "../resuable/rating";
import { brand } from "../../../redux/reducer/prodctReducer";

interface filterProps {
  setPrice: any;
  price: any;
  brand: any;
   query:any;
  setQuery: any;
}
const options = [
  {
    id: 16,
    name: "Price ",
    variantOptions: [
      {
        lower: 0,
        upper: 1000,
        name: "Less than Rs 1000",
      },
      {
        lower: 2000,
        upper: 3000,
        name: "Rs 2000 to Rs 3000",
      },
      {
        lower: 5000,
        upper: 15000,
        name: "Rs 5000 to Rs 15000",
      },
      {
        lower: 15000,
        upper: 25000,
        name: "Rs 15000 to Rs 25000",
      },
      {
        lower: 25000,
        upper: 50000,
        name: "Rs 25000 to Rs 50000",
      },
      {
        lower: 50000,
        upper: 100000,
        name: "Rs 50000 to Rs 100000",
      },
      {
        lower: 100000,
        upper: 200000,
        name: "Rs 100000 to Rs 200000",
      },
      {
        lower: 200000,
        upper: 20000000,
        name: "Rs 200000 & above",
      },
    ],
  },
  
];
const Filter: React.FC<filterProps> = ({
  setPrice,
   query,
  brand,
  price,
  setQuery,
}) => {
  const onChange = (e: any) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const brandHanler = (e: any) => {
  
    setQuery({...query, brand: e.target.value });
  };

  const handleClick = (value: any, type: any) => {
    console.log(value.lower, type);
    if (value.lower || value.upper) {
      setPrice({ lowerPrice: value.lower, higherPrice: value.upper });
    }
  };


  const urilize = (value: any) => {
    return value?.toLowerCase().trim().replace(/ /g, "-");
  };

  return (
    <div>
      <div className="border-t-[1px] py-4 border-b-[1px] border-white-1000">
        <div className=" flex items-center justify-between">
          <h3 className=" text-[15px] font-[600]">Product Rating</h3>
          <div>
            <img src="../assets/r.png" alt="" />
          </div>
        </div>
        <div>
          <Rating />
          <Rating />
          <Rating />
          <Rating />
        </div>
      </div>
      <div className="border-t-[1px] py-4 border-b-[1px] border-white-1000">
        <div className=" flex items-center justify-between">
          <h3 className=" text-[15px] font-[600]">Brand</h3>
          <div>
            <img src="../assets/r.png" alt="" />
          </div>
        </div>

        <div className=" mt-3 h-[200px] vertical_scroll-y ">
          {brand?.map((bra: any, i: number) => {
   
            return (
              <div key={i} className={` ${i > 0 && "mt-3"}`}>
                <label
                      className={`flex gap-2 items-center  text-[14px] font-[400] text-gray-700`}
                      key={i}
                    >
                      <input
                        type="radio"
                        name="radio"
                        value={bra.id}
                        key={i}
                        onChange={brandHanler}
                      />
                          {bra.name}
                    </label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-t-[1px] py-4  border-b-[1px] border-white-1000">
        <div className=" flex items-center justify-between">
          <h3 className=" text-[15px] font-[600]">Price</h3>
          <div>
            <img src="../assets/r.png" alt="" />
          </div>
        </div>
        <div className=" h-[200px] pt-2 vertical_scroll-y">
          {options.map((opt: any, index: number) => (
            <>
              {opt.variantOptions.map((item: any, i: any) => {
                return (
                  <div className={` ${i > 0 ? "mt-4" : ""}`}>
                    <label
                      className={`flex gap-2 items-center  text-[14px] font-[400] text-gray-700`}
                      key={i}
                    >
                      <input
                        type="radio"
                        name="radio"
                    
                        value={urilize(item?.name)}
                        key={index}
                        onChange={() => handleClick(item, item?.name)}
                      />
                      {item.name}
                    </label>
                  </div>
                );
              })}
            </>
          ))}
        </div>
 
      </div>
    </div>
  );
};

export default Filter;
