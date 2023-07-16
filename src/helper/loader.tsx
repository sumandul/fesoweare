import React from "react";
import { Spin } from "antd";

const Loader = () => {
  return (
    <div>
      <Spin
        className=" text-[15px] tracking-[1px]  font-medium text-yellow-100"
        tip="Loading...."
        size="large"
      />
    </div>
  );
};

export default Loader;
