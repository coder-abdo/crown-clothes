import { useToggleCartMenu } from "@/contexts/cartDropDownMenuContext";
import { ICartItem, ICartMenuContext } from "@/types";

export const useCheckout = () => {
  const { removeItemFromCart, addToCart, clearItemFromCart } =
    useToggleCartMenu() as ICartMenuContext;
  const handleRemoveItem = (cartItem: ICartItem) => {
    clearItemFromCart(cartItem);
  };
  const handleIncreaseQuantity = (cartItem: ICartItem) => {
    addToCart(cartItem);
  };
  const handleDecreaseQuantity = (cartItem: ICartItem) => {
    removeItemFromCart(cartItem);
  };
  return { handleDecreaseQuantity, handleIncreaseQuantity, handleRemoveItem };
};
