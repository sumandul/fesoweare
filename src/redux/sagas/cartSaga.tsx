import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import countAPI from '../../api/cart'
import withAuthHeader from '../../api/_withAUthHeaders';
import { apiBaseUrl } from '../../global/appBaseUrl';
import { FETCH_CART_COUNT, SET_CART_COUNT } from '../constant';
function* fetchCartFromAPI():any {
    console.log("suman dulal")
  
    try {
        const apiUrl = `${apiBaseUrl}/carts/count`;
        const { data } = yield axios.get(apiUrl, { headers: withAuthHeader() });
        console.log(data.count,'data')
  
      yield put({ type: SET_CART_COUNT, payload: data.count });
    //   yield put({ type: SET_LOGIN_STATUS, payload: true });
    } catch (e) {
    //   yield put({ type: SET_CART_COUNT, payload: 0 });
    //   'CART FETCH ISSUE:', e.message;
    }
  }
  
  export default function* watchCartRequest() {
    yield takeLatest(FETCH_CART_COUNT, fetchCartFromAPI);
  }