import { apiBaseUrl, cartSubPaths } from '../../global/appBaseUrl';
import axios from 'axios';
import Cookies from 'js-cookie';

/**
 *
 * @returns list of products in cart
 */
export const getAllCartItems = async () => {
  try {
    const token = Cookies.get('x-jwt-access-token');
    const { basePath } = cartSubPaths;
    const url = apiBaseUrl + 'v1/' + basePath;
    const head = {
      headers: {
        Authorization: `bearer ${token}`
      }
    };
    const serverResponse = await axios.get(url, head);
    return {
      error: null,
      data: serverResponse.data
    };
  } catch (error) {
    return {
      error,
      data: []
    };
  }
};

/**
 * @param {number} productVariantId
 * @param {number} quantity
 *add a product to cart
 */

export const addProductToCart = async (data:any,qty:Number) => {
  try {
    const token = Cookies.get('x-jwt-access-token');

    const { basePath, addToCartPath } = cartSubPaths;
    const url = apiBaseUrl + 'v1/' + basePath + addToCartPath;
    const body = {
        productSlug:data,
        // productVariantSku:"7b341182aa8e",
        quantity:qty
    };
    const head = {
      headers: {
        Authorization: `bearer ${token}`
      }
    };
    const serverResponse = await axios.post(url, body, head);
    

    if(serverResponse?.data && serverResponse?.data?.message){
      return {
        error: serverResponse.data.message,
      };
    }
    return {
      error: null,
      data: serverResponse.data
    };
  } catch (error) {
    return {
      error,
      data: {}
    };
  }
};

export const getCartCount = async () => {
  try {
    const token = Cookies.get('x-jwt-access-token');

    const { basePath, getCartCountPath } = cartSubPaths;
    const url = apiBaseUrl + basePath + getCartCountPath;

    // const body = {
    //   productId: productId,
    //   quantity: quantity,
    //   productVariantId: productVariantId
    // };
    const body = {
      headers: {
        Authorization: `bearer ${token}`
      }
    };
    const serverResponse = await axios.get(url, body);
    return {
      error: null,
      data: serverResponse.data
    };
  } catch (error) {
    return {
      error: 'an error occured',
      data: {}
    };
  }
};

/**
 *deletes product from cart/reduces quantity
 */
// export const removeFromCart = async (productVariantId, quantity) => {
//   try {
//     const { basePath, removeFromCartPath } = cartSubPaths;
//     const body = {
//       productVariantId
//     };
//     const url = apiBaseUrl + 'v1/' + basePath + removeFromCartPath;
//     const serverResponse = await axios.post(url, body);
//     return {
//       error: null,
//       data: serverResponse.data
//     };
//   } catch (error) {
//     return {
//       error: 'an error occured',
//       data: {}
//     };
//   }
// };
