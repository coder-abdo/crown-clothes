import { CartItems } from "@/components/cart/cartItems";
import { useNavigate } from "@tanstack/react-router";
import { useAppSelector } from "@/hooks/redux";

export const CartDropDownMenu = () => {
  const { cartItems, isOpen } = useAppSelector((state) => state.cart);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate({ to: "/checkout" });
  };
  return (
    <div className={`cart-dropdownmenu ${isOpen ? "show" : ""}`}>
      <CartItems cartItems={cartItems} />
      <button className="btn" role="link" onClick={handleClick}>
        Check out
      </button>
    </div>
  );
};
