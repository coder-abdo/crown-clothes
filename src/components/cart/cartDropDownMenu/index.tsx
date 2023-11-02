import { useToggleCartMenu } from "@/contexts/cartDropDownMenuContext";
import { CartItems } from "@/components/cart/cartItems";

export const CartDropDownMenu = () => {
  const { isOpen, cartItems } = useToggleCartMenu();
  return (
    <div className={`cart-dropdownmenu ${isOpen ? "show" : ""}`}>
      <CartItems cartItems={cartItems} />
      <button className="btn">add to cart</button>
    </div>
  );
};
