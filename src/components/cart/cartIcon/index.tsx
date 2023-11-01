import ShoppingCart from "@/assets/shopping-bag.svg";
import { useToggleCartMenu } from "@/contexts/cartDropDownMenuContext";
import { useCallback } from "react";
export const CartIcon = () => {
  const { setIsOpen, isOpen } = useToggleCartMenu();
  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [setIsOpen, isOpen]);
  return (
    <div className="cart-icon" onClick={handleClick}>
      <img src={ShoppingCart} alt="shopping bag" className="cart-icon__icon" />
      <span className="cart-icon__quantity">0</span>
    </div>
  );
};
