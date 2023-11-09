import ShoppingCart from "@/assets/shopping-bag.svg";
import { useToggleCartMenu } from "@/contexts/cartDropDownMenuContext";
import { ICartMenuContext } from "@/types";
export const CartIcon = () => {
  const { cartCount, toggleCartMenu } = useToggleCartMenu() as ICartMenuContext;

  return (
    <div className="cart-icon" onClick={toggleCartMenu}>
      <img src={ShoppingCart} alt="shopping bag" className="cart-icon__icon" />
      <span className="cart-icon__quantity">{cartCount}</span>
    </div>
  );
};
