import { useCheckout } from "@/hooks/useCheckout";
import { ICartItem } from "@/types";
import type { FC } from "react";
interface Props {
  item: ICartItem;
}
export const CheckoutItem: FC<Props> = ({ item }) => {
  const { quantity, name, price, imageUrl } = item;
  const { handleRemoveItem, handleIncreaseQuantity, handleDecreaseQuantity } =
    useCheckout();
  return (
    <div className="checkout__item item">
      <img className="item__image" src={imageUrl} alt={name} />
      <h4 className="item__name">{name}</h4>
      <div className="item__quantity quantity">
        <span
          className="quantity__increase"
          onClick={() => handleDecreaseQuantity(item)}
        >
          &#10092;
        </span>
        <span className="quantity__content">{quantity}</span>
        <span
          className="quantity__decrease"
          onClick={() => handleIncreaseQuantity(item)}
        >
          &#10093;
        </span>
      </div>
      <span className="item__price">{price}</span>
      <span className="item__remove" onClick={() => handleRemoveItem(item)}>
        &#10005;
      </span>
    </div>
  );
};
