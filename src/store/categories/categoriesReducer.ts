import { IShopData } from "@/types";
import { AnyAction, Reducer } from "redux";
import { CREATE_CATEGORIES } from "./categoriesActionTypes";

type State = {
  category: IShopData;
};

const initialState: State = {
  category: {
    title: "",
    items: [],
  },
};

export const categoryReducer: Reducer<State, AnyAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case CREATE_CATEGORIES:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};
