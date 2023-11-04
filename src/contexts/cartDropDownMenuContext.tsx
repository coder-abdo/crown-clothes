import { ICartItem, ICartMenuContext } from "@/types";
import { addToCartItems, clearItem, removeItem } from "@/utils";
import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

const CartDropDownMenuContext = createContext<ICartMenuContext | null>(null);

interface Props {
  children: ReactNode;
}
const CartMenuProvider: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const addToCart = (cartItem: ICartItem) => {
    setCartItems(addToCartItems(cartItems, cartItem));
  };
  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  );
  const totalCartPrice = useMemo(
    () =>
      cartItems.reduce((total, item) => total + item.quantity * item.price, 0),
    [cartItems],
  );
  const removeItemFromCart = (item: ICartItem) => {
    setCartItems(removeItem(cartItems, item));
  };
  const clearItemFromCart = (item: ICartItem) => {
    setCartItems(clearItem(cartItems, item));
  };
  return (
    <CartDropDownMenuContext.Provider
      value={{
        isOpen,
        setIsOpen,
        cartItems,
        setCartItems,
        addToCart,
        cartCount,
        removeItemFromCart,
        totalCartPrice,
        clearItemFromCart,
      }}
    >
      {children}
    </CartDropDownMenuContext.Provider>
  );
};

export const useToggleCartMenu = () => useContext(CartDropDownMenuContext);
export default CartMenuProvider;
