import { IShopData } from "@/types";
import { getCategoriesDocument } from "@/utils/firebase";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { CategoryTypes } from "@/store/categories/categoriesActionTypes";
import { createAction } from "@/utils/reducers";
const createCategorySuccess = (category: IShopData) => {
  return createAction(CategoryTypes.createCategorySuccess, category);
};

const createCategoryFaild = (errorMessage: string) => {
  return createAction(CategoryTypes.createCategoryFailed, errorMessage);
};
function* fetchCategories() {
  try {
    const categories = yield call(getCategoriesDocument);
    yield put(createCategorySuccess(categories));
  } catch (error) {
    if (error instanceof Error) {
      yield put(createCategoryFaild(error.message));
    }
  }
}
function* onFetchCategories() {
  yield takeLatest(CategoryTypes.createCategoryLoading, fetchCategories);
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
