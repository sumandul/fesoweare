import React, { useEffect, useState } from "react";
import CartList from "./elements/cartlist";
import CartItem from "./elements/cartItem";


const Cartcomponent = ({cartData,recalculate,removeITem ,qty,setQty}:any) => {
      

  return (
  <>
  
  
  <CartList  recalculate={recalculate} removeITem ={removeITem } cartData={cartData} qty={qty} setQty={setQty} />
  
  
  </>
  );
};

export default Cartcomponent;
