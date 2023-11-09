import { ICartItem, ICartMenuContext } from "@/types";
import { addToCartItems, clearItem, removeItem } from "@/utils";
import {
  FC,
  ReactNode,
  Reducer,
  createContext,
  useContext,
  useMemo,
  useReducer,
} from "react";

const CartDropDownMenuContext = createContext<ICartMenuContext | null>(null);

interface Props {
  children: ReactNode;
}
type State = {
  isOpen: boolean;
  cartItems: ICartItem[];
};
type Action =
  | { type: "TOGGLE_OPEN" }
  | { type: "ADD_TO_CARTITEMS"; payload: ICartItem }
  | { type: "REMOVE_ITEM_FROM_CART"; payload: ICartItem }
  | { type: "CLEAR_ITEM_FROM_CART"; payload: ICartItem };

const cartReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "TOGGLE_OPEN":
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case "ADD_TO_CARTITEMS":
      return {
        ...state,
        cartItems: addToCartItems(state.cartItems, action.payload),
      };
    case "REMOVE_ITEM_FROM_CART":
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload),
      };
    case "CLEAR_ITEM_FROM_CART":
      return {
        ...state,
        cartItems: clearItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
const initialState: State = {
  isOpen: false,
  cartItems: [],
};
const CartMenuProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const addToCart = (cartItem: ICartItem) => {
    dispatch({ type: "ADD_TO_CARTITEMS", payload: cartItem });
  };
  const toggleCartMenu = () => {
    dispatch({ type: "TOGGLE_OPEN" });
  };
  const cartCount = useMemo(
    () => state.cartItems.reduce((total, item) => total + item.quantity, 0),
    [state.cartItems],
  );
  const totalCartPrice = useMemo(
    () =>
      state.cartItems.reduce(
        (total, item) => total + item.quantity * item.price,
        0,
      ),
    [state.cartItems],
  );
  const removeItemFromCart = (item: ICartItem) => {
    dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: item });
  };
  const clearItemFromCart = (item: ICartItem) => {
    dispatch({ type: "CLEAR_ITEM_FROM_CART", payload: item });
  };
  const value = useMemo(() => {
    return {
      state,
      cartCount,
      totalCartPrice,
      addToCart,
      removeItemFromCart,
      clearItemFromCart,
      toggleCartMenu,
    };
  }, [state, cartCount, totalCartPrice]);
  return (
    <CartDropDownMenuContext.Provider value={value}>
      {children}
    </CartDropDownMenuContext.Provider>
  );
};

export const useToggleCartMenu = () => useContext(CartDropDownMenuContext);
export default CartMenuProvider;
