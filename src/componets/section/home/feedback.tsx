import React from "react";
import Slider from "react-slick";
import Rating from "../resuable/rating";
const Feedback = () => {
  var settings = {
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,

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

  return (
    <div className=" container mt-20 mx-auto">
      <h1 className=" title relative text-center text-[26px] font-semibold">
        Customer<span className=" text-[22px] font-normal">Feedbacks</span>
        <div className=" border-b-4 border-black-200 absolute top-[82%] left-[44%] w-[34px] "></div>
      </h1>
      <div>
        <Slider {...settings}>
          <div className=" h-[353px]  ">
            <div className=" translate-x-[25%] translate-y-[50%]">
              <div className=" w-1/2 ">
                <h6 className=" font-medium  ml-4 ">Jhonny Blake</h6>
                <div className="w-[100px] h-[100px]  top-[1px] left-[-84px]   absolute ">
                  <img
                    src="../assets/2e.png"
                    className=" w-full h-full rounded-full object-cover"
                    alt=""
                  />
                </div>
                <div className="  bg-white-300 px-6 py-6">
                  <p className=" text-[15px] font-normal  opacity-[0.8] leading-[180%] ">
                    Lorem ipsum dolor sit amet. consectetur adipiscing elit,
                    lorem ipsum.Lorem ipsum dolor sit amet. consectetur
                    adipiscing elit, lorem ipsum.
                  </p>
                  <Rating />
                </div>
              </div>
            </div>
          </div>
          <div className=" h-[353px]  ">
            <div className=" translate-x-[25%] translate-y-[50%]">
              <div className=" w-1/2 ">
                <h6 className=" font-medium  ml-4 ">Jhonny Blake</h6>
                <div className="w-[100px] h-[100px]  top-[1px] left-[-84px]   absolute ">
                  <img
                    src="../assets/2e.png"
                    className=" w-full h-full rounded-full object-cover"
                    alt=""
                  />
                </div>
                <div className="  bg-white-300 px-6 py-6">
                  <p className=" text-[15px] font-normal  opacity-[0.8] leading-[180%] ">
                    Lorem ipsum dolor sit amet. consectetur adipiscing elit,
                    lorem ipsum.Lorem ipsum dolor sit amet. consectetur
                    adipiscing elit, lorem ipsum.
                  </p>
                  <Rating />
                </div>
              </div>
            </div>
          </div>
          <div className=" h-[353px]  ">
            <div className=" translate-x-[25%] translate-y-[50%]">
              <div className=" w-1/2 ">
                <h6 className=" font-medium  ml-4 ">Jhonny Blake</h6>
                <div className="w-[100px] h-[100px]  top-[1px] left-[-84px]   absolute ">
                  <img
                    src="../assets/2e.png"
                    className=" w-full h-full rounded-full object-cover"
                    alt=""
                  />
                </div>
                <div className="  bg-white-300 px-6 py-6">
                  <p className=" text-[15px] font-normal  opacity-[0.8] leading-[180%] ">
                    Lorem ipsum dolor sit amet. consectetur adipiscing elit,
                    lorem ipsum.Lorem ipsum dolor sit amet. consectetur
                    adipiscing elit, lorem ipsum.
                  </p>
                  <div className=" ">
                    <Rating />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Feedback;
