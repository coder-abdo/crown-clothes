import { IShopData } from "@/types";
import { AnyAction, Reducer } from "redux";
import { CategoryTypes } from "@/store/categories/categoriesActionTypes";

type State = {
  isLoading: boolean;
  category: IShopData;
  errorMessage: string;
};

const initialState: State = {
  isLoading: false,
  category: {
    title: "",
    items: [],
  },
  errorMessage: "",
};

export const categoryReducer: Reducer<State, AnyAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case CategoryTypes.createCategoryLoading:
      return {
        ...state,
        isLoading: true,
      };
    case CategoryTypes.createCategorySuccess:
      return {
        ...state,
        isLoading: false,
        category: action.payload,
      };
    case CategoryTypes.createCategoryFailed:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
