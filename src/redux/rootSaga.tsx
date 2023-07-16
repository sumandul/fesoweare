
import { all } from "redux-saga/effects";
import productSaga from "./sagas/GetProdcut";
import watchCartRequest from "./sagas/cartSaga"
export default function* rootSaga() {
  yield all([productSaga(),watchCartRequest()]);
}
