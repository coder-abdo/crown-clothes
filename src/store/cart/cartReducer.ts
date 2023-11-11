import { ICartItem } from "@/types";
import { AnyAction, Reducer } from "redux";
import {
  ADD_TO_CART_ITEMS,
  DELETE_ITEM,
  REMOVE_FROM_CART_ITEMS,
  TOGGLE_OPEN,
} from "@/store/cart/cartActionTypes";

type State = {
  isOpen: boolean;
  cartItems: ICartItem[];
};

const initialState: State = {
  isOpen: false,
  cartItems: [],
};
export const cartReducer: Reducer<State, AnyAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case TOGGLE_OPEN:
      return {
        ...state,
        isOpen: action.payload,
      };
    case ADD_TO_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };
    case REMOVE_FROM_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };
    case DELETE_ITEM:
      return {
        ...state,
        cartItems: action.payload,
      };
    default:
      return state;
  }
};
