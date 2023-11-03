import { useToggleCartMenu } from "@/contexts/cartDropDownMenuContext";
import { ICartItem } from "@/types";

export const useCheckout = () => {
  const { removeItemFromCart, addToCart } = useToggleCartMenu();
  const handleRemoveItem = (cartItem: ICartItem) => {
    removeItemFromCart(cartItem);
  };
  const handleIncreaseQuantity = (cartItem: ICartItem) => {
    addToCart(cartItem);
  };
  const handleDecreaseQuantity = (cartItem: ICartItem) => {
    removeItemFromCart(cartItem);
  };
  return { handleDecreaseQuantity, handleIncreaseQuantity, handleRemoveItem };
};
