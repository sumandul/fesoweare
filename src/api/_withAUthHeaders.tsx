import Cookies from 'js-cookie';

export default function withAuthHeader(customHeaders = {}) {
  return {
    ...customHeaders,
    Authorization: `Bearer ${Cookies.get('x-jwt-access-token')}`
  };
}