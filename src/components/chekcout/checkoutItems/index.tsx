import { ICartItem } from "@/types";
import { FC } from "react";
import { CheckoutItem } from "./checkoutItem";

interface Props {
  items: ICartItem[];
}
export const CheckoutItems: FC<Props> = ({ items }) => {
  return (
    <div className="checkout__items">
      {items.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
    </div>
  );
};
