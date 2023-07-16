import axios from "axios";
import React, { useEffect, useState } from "react";
import cart from "../../../../api/cart";
import withAuthHeader from "../../../../api/_withAUthHeaders";
import { apiBaseUrl } from "../../../../global/appBaseUrl";
import { addProductToCart } from "../../../../icons/request/cart";
import { FETCH_CART_COUNT } from "../../../../redux/constant";
import Quantity from "./quantity";

interface cartProps {
  cartData: any;
  qty: any;
  setQty: any;
  recalculate: any;
  removeITem: any;
}

const CartItem: React.FC<cartProps> = ({
  cartData,
  removeITem,
  recalculate,
  qty,
  setQty,
}) => {
  const [loading, setLoading] = useState(false);
  const [stopSync, setStopSync] = useState(true);
  // const removeITem = async (id: number) => {
  //   try {
  //     const apiUrl = `${apiBaseUrl}/v1/carts/items/?id=${id}`;
  //     const res = await axios.delete(apiUrl, { headers: withAuthHeader() });
  //     if (res.status === 200) {
  //       fetchCartItems();
  //       dispatch({ type: FETCH_CART_COUNT });
  //     }
  //   } catch (error) {}
  // };
  console.log(cartData, "dddd");

  const syncLocalQty = (increment: any, i: any) => {
    // if (!loading) {
    alert(increment);
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

  const updateQty = async (value: any, increment: any, i: any, slug: any) => {
    console.log(increment, "IN");
    const result = await addProductToCart(slug, increment);
    recalculate();
    if (result.error === null) {
    }
  };

  return (
    <>
      <table className=" w-full " style={{ borderSpacing: " 0 15px" }}>
        <thead className=" text-left text-[13px] font-[500] opacity-[0.5] border-t-[1px]   border-white-600 border-b-[1px]">
          <tr>
            <th className=" py-[10px]">Product Description</th>
            <th>Quatity</th>
            <th>Unit Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartData?.map((cart: any, i: number) => {
            console.log(cart.quantity, "cart");
            return (
              <tr className=" ">
                <td className=" ">
                  <div className=" flex gap-2">
                    <div className=" w-[90px]   h-[128px]">
                      <img
                        src={`${apiBaseUrl}${cart?.product.images[0].url}`}
                        className=" w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                    <div className=" opacity-[0.8]">
                      <h5 className="font-[500] text-[15px]  ">
                        {cart.product.name}
                      </h5>
                      <div className=" font-[300] text-[15px]">
                        Color : Black/Yellow
                      </div>
                      <div className=" font-[300] text-[15px]">Size : M</div>
                    </div>
                  </div>
                </td>
                <td className=" ">
                  {" "}
                  <div className="quantity  flex">
                    <Quantity
                      selectedQuantity={cart?.quantity}
                      product={cart?.product}
                      id={cart?.id}
                      setQty={updateQty}
                    />
                  </div>
                </td>
                <td className="font-[500]  text-[15px] text-black-700">
                  {cart.product.salePrice}
                </td>
                <td className="font-[500]  text-[15px] text-black-700">
                  {cart.quantity * cart.product.salePrice}
                </td>
                {/* {renderCartItems && (
          <>
            {!displayOnly && (
              <>
                <div className="cart-list__header d-flex align-items-center justify-content-between">
                  <Popconfirm onConfirm={emptyConfirmed} title="Sure to remove all items from your cart?">
                    <button className="btn btn-delete mr-3">Empty Cart</button>
                  </Popconfirm>
                </div>
                <hr className="border-bottom-line" />
              </>
            )} */}
                <td
                  className="font-[500]  text-red-100 text-[15px] "
                  onClick={() => removeITem(cart?.id)}
                >
                  remove
                </td>
              </tr>
            );
          })}

          <tr className=" border-t-[1px]">
            <td></td>
            <td></td>
            <td className="font-[500]  text-[15px] text-black-700">Rs 1200</td>
            <td className="font-[500]  text-[15px] text-black-700">
              Rs 120000
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CartItem;
