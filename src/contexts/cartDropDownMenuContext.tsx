import { ICartItem, ICartMenuContext } from "@/types";
import { addToCartItems } from "@/utils";
import { FC, ReactNode, createContext, useContext, useState } from "react";

const CartDropDownMenuContext = createContext<ICartMenuContext>({
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  setCartItems: () => {},
  addToCart: (cartItem: ICartItem) => {
    console.log(cartItem);
  },
});

interface Props {
  children: ReactNode;
}
const CartMenuProvider: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const addToCart = (cartItem: ICartItem) => {
    setCartItems(addToCartItems(cartItems, cartItem));
  };
  return (
    <CartDropDownMenuContext.Provider
      value={{ isOpen, setIsOpen, cartItems, setCartItems, addToCart }}
    >
      {children}
    </CartDropDownMenuContext.Provider>
  );
};

export const useToggleCartMenu = () => useContext(CartDropDownMenuContext);
export default CartMenuProvider;
