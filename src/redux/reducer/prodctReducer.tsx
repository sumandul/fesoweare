import {
  ADD_TO_CART,
  SET_ADD_BRAND,
  SET_BANNER,
  SET_BRANDS,
  SET_CART,
  SET_PRODUCT_CATEGORY,
  SET_PRODUCT_DETAIL,
  SET_PRODUCT_LIST,
} from "../constant";

// get product list

export const productData = (data = [], action: any) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      return action.data;
    default:
      return data;
  }
};

// get product detail

export const productDetail = (data = {}, action: any) => {
  console.log(action.data, "data from  detail");
  switch (action.type) {
    case SET_PRODUCT_DETAIL:
      return action.data;
    default:
      return data;
  }
};

// prodcut category

export const productCategories = (data = [], action: any) => {
  switch (action.type) {
    case SET_PRODUCT_CATEGORY:
      return action.data;
    default:
      return data;
  }
};

// add to cart

export const addToCart = (data = [], action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      return action.data;
    default:
      return data;
  }
};

// get brand list
export const brand = (data = [], action: any) => {
  switch (action.type) {
    case SET_ADD_BRAND:
      return action.data;
    default:
      return data;
  }
};

// get banner

export const getBanner = (data = [], action: any) => {
  switch (action.type) {
    case SET_BANNER:
      return action.data;
    default:
      return data;
  }
};

export const getBrand = (data = [], action: any) => {
  switch (action.type) {
    case SET_BRANDS:
      return action.data;
    default:
      return data;
  }
};
export const getFeature = (data = [], action: any) => {
  switch (action.type) {
    case SET_BRANDS:
      return action.data;
    default:
      return data;
  }
};
export const getCarts = (data = [], action: any) => {
  switch (action.type) {
    case SET_CART:
      return action.data;
    default:
      return data;
  }
};
