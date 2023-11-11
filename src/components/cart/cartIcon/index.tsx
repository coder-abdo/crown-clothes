import ShoppingCart from "@/assets/shopping-bag.svg";
import { useCart } from "@/hooks/useCart";
export const CartIcon = () => {
  const { cartCount, toggleCartMenu } = useCart();

  return (
    <div className="cart-icon" onClick={toggleCartMenu}>
      <img src={ShoppingCart} alt="shopping bag" className="cart-icon__icon" />
      <span className="cart-icon__quantity">{cartCount}</span>
    </div>
  );
};
