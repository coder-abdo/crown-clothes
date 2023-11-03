import { useToggleCartMenu } from "@/contexts/cartDropDownMenuContext";
import { CartItems } from "@/components/cart/cartItems";
import { Link } from "react-router-dom";

export const CartDropDownMenu = () => {
  const { isOpen, cartItems } = useToggleCartMenu();
  return (
    <div className={`cart-dropdownmenu ${isOpen ? "show" : ""}`}>
      <CartItems cartItems={cartItems} />
      <button className="btn">
        <Link to={'/checkout'}>
          check out
        </Link>
        </button>
    </div>
  );
};
