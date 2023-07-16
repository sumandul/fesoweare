import axios from "axios";
import { apiBaseUrl } from "../../global/appBaseUrl";
import Cookies from 'js-cookie';
import { fork, call, takeEvery, all, put } from "redux-saga/effects";

import {
  ADD_TO_CART,
  GET_BANNER,
  GET_BRAND,
  GET_CART,
  GET_DEALS_REQ,
  GET_FEATURE,
  GET_PRODUCT_DETAIL,
  GET_PRODUCT_LIST,
  PRODUCT_CATEGORY,
  SET_BANNER,
  SET_BRANDS,
  SET_CART,
  SET_PRODUCT_CATEGORY,
  SET_PRODUCT_DETAIL,
  SET_PRODUCT_LIST,
} from "../constant";
import { CLIENT_RENEG_LIMIT } from "tls";
import { RiCoinsLine } from "react-icons/ri";

function* getProducts(): any {
  try {
    let data = yield axios.get(`${apiBaseUrl}/products?filter[limit]=10`);
    yield put({ type: SET_PRODUCT_LIST, data });
  } catch (e) {}
}
function* getProductDetail(action: any): any {
  console.log(action.slug);
  try {
    let data = yield axios.get(`${apiBaseUrl}/products/${action.slug}`);
    console.log(data, "detail");
    yield put({ type: SET_PRODUCT_DETAIL, data });
  } catch (e) {}
}
function* getProductCategories(): any {
  try {
    let data = yield axios.get(`${apiBaseUrl}/frontend/category-list`);
    console.log(data, "cat");

    yield put({ type: SET_PRODUCT_CATEGORY, data });
  } catch (e) {}
}
function* getBanner(): any {
  try {
    let data = yield axios.get(`${apiBaseUrl}/banners`);
    console.log(data);

    yield put({ type: SET_BANNER, data });
  } catch (e) {}
}

function* getBrands(): any {
  try {
    let data = yield axios.get(`${apiBaseUrl}brands?filter[limit]=10`);
    console.log(data, "BRANDAS");
    yield put({ type: SET_BRANDS, data });
  } catch (e) {}
}
function* getFeature(): any {
  try {
    let data = yield axios.get(`${apiBaseUrl}collection?filter[limit]=20`);
    console.log(data, "suman hello");
    console.log(data, "BRANDAS");
    // yield put({ type: SET_BRANDS, data });
  } catch (e) {}
}
function* getCarts(): any {
  try {
    let data = yield axios.get(`${apiBaseUrl}v1/carts`);
    
    console.log(data,'cart')
  
    yield put({ type: SET_CART, data });
  } catch (e) {}
}
function* AddCarts(data:any): any {
  console.log(data,'root')
  try {
    const token = Cookies.get('x-jwt-access-token');
    console.log(token,'token')
    const head = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    };
    let data = yield axios.post(`${apiBaseUrl}v1/carts`,  {
      

  productSlug:"Boost-Jar-500-gm-",
productVariantSku:"7b341182aa8e",
quantity:1
    },
     head
    );

    
    console.log(data,'cart')
  
    yield put({ type: SET_CART, data });
  } catch (e) {}
}



export function* GetProductSaga() {
  yield takeEvery(GET_PRODUCT_LIST, getProducts);
}
export function* getFeatureProducts() {
  yield takeEvery(GET_FEATURE, getFeature);
}
export function* GetProductDetailSaga() {
  yield takeEvery(GET_PRODUCT_DETAIL, getProductDetail);
}
export function* GetProductCategorySaga() {
  yield takeEvery(PRODUCT_CATEGORY, getProductCategories);
}

export function* GetBannerSaga() {
  yield takeEvery(GET_BANNER, getBanner);
}
export function* GetProductsBrand() {
  yield takeEvery(GET_BRAND, getBrands);
}
export function* GetCartItems() {
  yield takeEvery(GET_CART, getCarts);
}
export function* AddCartItems() {
  yield takeEvery(ADD_TO_CART, AddCarts);
}

export default function* () {
  yield all([
    fork(GetProductSaga),
    fork(GetProductDetailSaga),
    fork(GetProductCategorySaga),
    fork(GetBannerSaga),
    fork(GetProductsBrand),
    fork(getFeatureProducts),
    fork(AddCartItems),
    fork(GetCartItems),


  ]);
}
