import React, { useEffect, useState } from "react";


const Quantity = ({setQty ,selectedQuantity,id,product}:any) => {
  


    const syncLocalQty = (increment:any) => {
      // if (!loading) {
        alert(increment)
      //   const payload = {
      //     slug: slug,
        
      //   };
  
      //   setLoading('qty');
  
      //   cartAPI
      //     .update(payload)
      //     .then(() => {
      //       setLoading(false);
      //       setPrevQty(qty);
      //       recalculate();
      //     })
      //     .catch(() => {
      //       setLoading(false);
      //       setQty(prevQty);
      //     });
      // }
    };
        console.log(selectedQuantity,'qty')

  return (
    <div>
      <span
        className=" text-[20px] text-center"
        onClick={() => setQty(selectedQuantity +1 ,1,id,product?.slug)}
      >
        +
      </span>{" "}
      <input
        type="text"
        value={selectedQuantity ||1 } 
        className=" text-center mx-4 border-[1px] border-white-600  font-medium text-[14px] w-[35px] h-[30px] "
      />{" "}
      <span
        className="text-[20px] "
        onClick={() => setQty(selectedQuantity -1,-1,id,product?.slug)}
      >
        -
      </span>
    </div>
  );
};

export default Quantity;
