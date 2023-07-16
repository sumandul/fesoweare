import { combineReducers } from "redux";

import { cutomerRegistration } from "./reducer/CustomerReducer";
import {
  productData,
  productDetail,
  productCategories,
  addToCart,
  getBanner,
  getBrand,
  getCarts
} from "./reducer/prodctReducer";
import cartReducer from "./reducer/cartReducer";

export const reducers: any = combineReducers({
  productData,
  cutomerRegistration,
  productDetail,
  productCategories,
  addToCart,
  getBanner,
  getBrand,
  getCarts,
  cartReducer
});
