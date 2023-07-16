import {
  ADD_BRAND,
  ADD_TO_CART,
  GET_BANNER,
  GET_BRAND,
  GET_CART,
  GET_FEATURE,
  GET_PRODUCT_DETAIL,
  GET_PRODUCT_LIST,
  PRODUCT_CATEGORY,
} from "../constant";

export const productList = () => {
  return {
    type: GET_PRODUCT_LIST,
  };
};
export const productDetail = (slug: any) => {
  console.log(slug);

  return {
    type: GET_PRODUCT_DETAIL,
    slug: slug,
  };
};
export const productCategory = () => {
  return {
    type: PRODUCT_CATEGORY,
  };
};
export const addToCart = (data: object) => {
  console.log(data, "action");
  return {
    type: ADD_TO_CART,
    data
  };
};
export const productBrannd = () => {
  return {
    type: ADD_BRAND,
  };
};
export const banner = () => {
  return {
    type: GET_BANNER,
  };
};
export const brands = () => {
  return {
    type: GET_BRAND,
  };
};
export const feature = () => {
  return {
    type: GET_FEATURE,
  };
};
export const GetCartItems = () => {
  return {
    type:GET_CART,
  };
};
