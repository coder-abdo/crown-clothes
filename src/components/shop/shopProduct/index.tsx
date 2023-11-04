import { useToggleCartMenu } from "@/contexts/cartDropDownMenuContext";
import { ICartItem, ICartMenuContext, IShopProduct } from "@/types";
import { FC } from "react";

interface Props {
  product: IShopProduct;
}
export const ShopProduct: FC<Props> = ({ product }) => {
  const { addToCart } = useToggleCartMenu() as ICartMenuContext;
  const handleClick = (item: ICartItem) => {
    addToCart(item);
  };
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
        <button
          className="btn product__add-to-cart"
          onClick={() => handleClick(product as ICartItem)}
        >
          add to cart
        </button>
      </div>
      <div className="product__footer">
        <h6 className="product__name">{product.name}</h6>
        <h6 className="product__price">&#65284;{product.price}</h6>
      </div>
    </div>
  );
};
