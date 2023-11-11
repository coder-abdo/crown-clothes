import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "./redux";
import { toggleCartDropDownMenu } from "@/store/cart/cartActions";

export const useCart = () => {
  const { isOpen, cartItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const toggleCartMenu = () => {
    dispatch(toggleCartDropDownMenu(!isOpen));
  };
  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  );
  const totalCartPrice = useMemo(
    () =>
      cartItems.reduce((total, item) => total + item.quantity * item.price, 0),
    [cartItems],
  );
  return { cartCount, totalCartPrice, toggleCartMenu };
};
