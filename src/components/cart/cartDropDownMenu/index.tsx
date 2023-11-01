import { useToggleCartMenu } from "@/contexts/cartDropDownMenuContext";

export const CartDropDownMenu = () => {
  const { isOpen } = useToggleCartMenu();
  return (
    <div className={`cart-dropdownmenu ${isOpen ? "show" : ""}`}>
      <ul className="cart-list"></ul>
      <button className="btn">add to cart</button>
    </div>
  );
};
