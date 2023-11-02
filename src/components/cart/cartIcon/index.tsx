import ShoppingCart from "@/assets/shopping-bag.svg";
import { useToggleCartMenu } from "@/contexts/cartDropDownMenuContext";
import { useCallback, useMemo } from "react";
export const CartIcon = () => {
  const { setIsOpen, isOpen, cartItems } = useToggleCartMenu();
  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [setIsOpen, isOpen]);
  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  );
  return (
    <div className="cart-icon" onClick={handleClick}>
      <img src={ShoppingCart} alt="shopping bag" className="cart-icon__icon" />
      <span className="cart-icon__quantity">{cartCount}</span>
    </div>
  );
};
