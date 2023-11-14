import { IShopData } from "@/types";
import { createAction } from "@/utils/reducers";
import { CategoryTypes } from "@/store/categories/categoriesActionTypes";
import { getCategoriesDocument } from "@/utils/firebase";

const createCategorySuccess = (category: IShopData) => {
  return createAction(CategoryTypes.createCategorySuccess, category);
};

const createCategoryLoading = () => {
  return createAction(CategoryTypes.createCategoryLoading, null);
};

const createCategoryFaild = (errorMessage: string) => {
  return createAction(CategoryTypes.createCategoryFailed, errorMessage);
};

export const fetchCategories = () => {
  return async (dispatch): Promise<void> => {
    dispatch(createCategoryLoading());
    try {
      const categoriesMap = (await getCategoriesDocument()) as IShopData;
      dispatch(createCategorySuccess(categoriesMap));
    } catch (err) {
      if (err instanceof Error) {
        dispatch(createCategoryFaild(err.message));
      }
    }
  };
};
