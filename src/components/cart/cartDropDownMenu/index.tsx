import { useToggleCartMenu } from "@/contexts/cartDropDownMenuContext";
import { CartItems } from "@/components/cart/cartItems";
import { Link } from "@tanstack/react-router";
import { ICartMenuContext } from "@/types";

export const CartDropDownMenu = () => {
  const {
    state: { cartItems, isOpen },
  } = useToggleCartMenu() as ICartMenuContext;
  return (
    <div className={`cart-dropdownmenu ${isOpen ? "show" : ""}`}>
      <CartItems cartItems={cartItems} />
      <button className="btn">
        <Link to={"/checkout"}>check out</Link>
      </button>
    </div>
  );
};
