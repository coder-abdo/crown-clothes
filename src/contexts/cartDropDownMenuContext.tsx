import { ICartMenuContext } from "@/types";
import { FC, ReactNode, createContext, useContext, useState } from "react";

const CartDropDownMenuContext = createContext<ICartMenuContext>({
  isOpen: false,
  setIsOpen: () => false,
});

interface Props {
  children: ReactNode;
}
const CartMenuProvider: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CartDropDownMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </CartDropDownMenuContext.Provider>
  );
};

export const useToggleCartMenu = () => useContext(CartDropDownMenuContext);
export default CartMenuProvider;
