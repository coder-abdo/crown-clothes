import { FC } from "react";
import { ICartItem } from "@/types";
import { CartItem } from "../cartItem";
interface Props {
  cartItems: ICartItem[];
}
export const CartItems: FC<Props> = ({ cartItems }) => {
  return (
    <ul className="cart-items">
      {cartItems.length > 0 ? (
        cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
      ) : (
        <li className="cart-item__empty">no items yet</li>
      )}
    </ul>
  );
};
