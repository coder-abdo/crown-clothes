import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "@/store/categories/categoriesSaga";

export function* rootSagta() {
  yield all([call(categoriesSaga)]);
}
