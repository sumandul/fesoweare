import React, { useState } from "react";
import { Rate } from "antd";

const Rating = () => {
  const [value, setValue] = useState(4);
  return (
    <div>
      <Rate
        onChange={setValue}
        style={{ color: "#FFA500" }}
        value={value}
        className="text-[13px]"
      />
    </div>
  );
};

export default Rating;
