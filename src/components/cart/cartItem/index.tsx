import { ICartItem } from "@/types";
import { FC } from "react";

interface Props {
  cartItem: ICartItem;
}
export const CartItem: FC<Props> = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="cart-item">
      <img className="cart-item__image" src={imageUrl} alt={name} />
      <div className="cart-item__content">
        <h3 className="cart-item__name">{name}</h3>
        <h5 className="cart-item__price">
          {quantity} &#9747; ${price}
        </h5>
      </div>
    </div>
  );
};
