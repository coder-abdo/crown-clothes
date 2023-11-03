import ShoppingCart from "@/assets/shopping-bag.svg";
import { useHandleCartIcon } from "@/hooks/useHandleCartIcon";
export const CartIcon = () => {
 const {toggleMenu, cartCount} = useHandleCartIcon() 

  return (
    <div className="cart-icon" onClick={toggleMenu}>
      <img src={ShoppingCart} alt="shopping bag" className="cart-icon__icon" />
      <span className="cart-icon__quantity">{cartCount}</span>
    </div>
  );
};
