import { IShopData } from "@/types";
import { createAction } from "@/utils/reducers";
import { CREATE_CATEGORIES } from "@/store/categories/categoriesActionTypes";

export const createCategory = (category: IShopData) => {
  return createAction(CREATE_CATEGORIES, category);
};
