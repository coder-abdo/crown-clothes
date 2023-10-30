import { IShopProduct } from "@/types";
import { FC } from "react";

interface Props {
  product: IShopProduct;
}
export const ShopProduct: FC<Props> = ({ product }) => {
  return (
    <div className="product">
      <div
        className="product__image"
        style={{
          backgroundImage: `url(${product.imageUrl})`,
          backgroundSize: "cover",
          objectFit: "cover",
        }}
      >
        <button className="btn product__add-to-cart">add to cart</button>
      </div>
      <div className="product__footer">
        <h6 className="product__name">{product.name}</h6>
        <h6 className="product__price">{product.price}$</h6>
      </div>
    </div>
  );
};
