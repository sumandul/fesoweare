import React, { useEffect, useState } from "react";
import { CLIENT_RENEG_LIMIT } from "tls";
import { apiBaseUrl } from "../../../../global/appBaseUrl";
import { addProductToCart } from "../../../../icons/request/cart";
import CartItem from "./cartItem";
import Quantity from "./quantity";
interface cartProps{
  cartData:any
  setQty:any,
  qty:any
  recalculate:any
  removeITem:any
}

const CartList:React.FC<cartProps> = ({cartData,removeITem  ,recalculate,qty,setQty}) => {
  

  
 
    useEffect(()=>{

    //    cartData.forEach((item:any)=>{
          
     
          

    //    })


    },[])
    
  

  return (
   <>
    <CartItem recalculate={recalculate} removeITem ={removeITem } qty={qty} setQty={setQty} cartData= {cartData} />
   
   </>
  );
};

export default CartList;
