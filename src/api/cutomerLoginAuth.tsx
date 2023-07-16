import axios from 'axios';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { CLIENT_RENEG_LIMIT } from 'tls';
import { apiBaseUrl } from '../global/appBaseUrl';
import withAuthHeader from './_withAUthHeaders';

const client_id = 'webapp';
const client_secret = 'secret';

const removeAuthCookies = () => {
  ['x-jwt-access-token', 'x-jwt-refresh-token', 'x-jwt-expires-at'].map(Cookies.remove);
};

export default function customerAuth({ username, password }:any) {
  console.log(username, password,"username")
  const apiUrl = `${apiBaseUrl}/auth/customer-login`;

  return axios.post(apiUrl, {
    username,
    password,
    client_id: 'webapp',
    client_secret: 'secret'
  });
}

export function authCustomerToken({ code, username, callback, fallback }:any) {
  const theCallback = typeof callback === 'function' ? callback : () => null;
  const theFallback = typeof fallback === 'function' ? fallback : () => null;
  const apiUrl = `${apiBaseUrl}/auth/token`;

  axios
    .post(apiUrl, { code, username, clientId: client_id })
    .then(({ data }) => {
      try {
        const { accessToken, refreshToken, expiresAt } = data;

        const expiresAtStr = JSON.stringify((expiresAt || 1000) * 1000 + new Date().getTime());

        Cookies.set('x-jwt-access-token', accessToken);
        Cookies.set('x-jwt-refresh-token', refreshToken);
        Cookies.set('x-jwt-expires-at', expiresAtStr);
        callback();
      } catch (e) {
        removeAuthCookies();
        theFallback();
      }
    })
    .catch(() => {
      removeAuthCookies();
      theFallback();
    });
}

export async function signOut() {
  const apiUrl = `${process.env.NEXT_API_BASE_URL}/logout`;

  try {
    await axios.post(apiUrl, {}, { headers: withAuthHeader() });
    removeAuthCookies();
    return true;
  } catch {
    return false;
  }
}
