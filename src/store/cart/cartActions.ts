import { ICartItem } from "@/types";
import { addToCartItems, clearItem, removeItem } from "@/utils";
import { createAction } from "@/utils/reducers";
import {
  ADD_TO_CART_ITEMS,
  DELETE_ITEM,
  REMOVE_FROM_CART_ITEMS,
  TOGGLE_OPEN,
} from "@/store/cart/cartActionTypes";

const addToCart = (cartItems: ICartItem[], cartItem: ICartItem) =>
  createAction(ADD_TO_CART_ITEMS, addToCartItems(cartItems, cartItem));
const removeItemFromCart = (cartItems: ICartItem[], cartItem: ICartItem) =>
  createAction(REMOVE_FROM_CART_ITEMS, removeItem(cartItems, cartItem));
const deleteCartItem = (cartItems: ICartItem[], cartItem: ICartItem) =>
  createAction(DELETE_ITEM, clearItem(cartItems, cartItem));
const toggleCartDropDownMenu = (isOpen: boolean) =>
  createAction(TOGGLE_OPEN, isOpen);
export {
  addToCart,
  removeItemFromCart,
  deleteCartItem,
  toggleCartDropDownMenu,
};
