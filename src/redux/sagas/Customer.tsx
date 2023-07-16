import { takeEvery } from "redux-saga/effects";
import { ADD_CUSTOMER } from "../constant";

function* postCustomer(): any {
  //
}

export function* RegisterCustomer() {
  yield takeEvery(ADD_CUSTOMER, postCustomer());
}
