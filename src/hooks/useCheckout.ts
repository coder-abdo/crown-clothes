import { ICartItem } from "@/types";
import { useAppDispatch, useAppSelector } from "./redux";
import {
  removeItemFromCart,
  addToCart,
  deleteCartItem,
} from "@/store/cart/cartActions";

export const useCheckout = () => {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((state) => state.cart);
  const handleRemoveItem = (cartItem: ICartItem) => {
    dispatch(deleteCartItem(cartItems, cartItem));
  };
  const handleIncreaseQuantity = (cartItem: ICartItem) => {
    dispatch(addToCart(cartItems, cartItem));
  };
  const handleDecreaseQuantity = (cartItem: ICartItem) => {
    dispatch(removeItemFromCart(cartItems, cartItem));
  };
  return { handleDecreaseQuantity, handleIncreaseQuantity, handleRemoveItem };
};
