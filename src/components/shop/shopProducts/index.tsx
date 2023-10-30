import { IShopProduct } from "@/types";
import { FC } from "react";
import { ShopProduct } from "@/components/shop/shopProduct";

interface Props {
  products: IShopProduct[];
}
export const ShopProducts: FC<Props> = ({ products }) => {
  return (
    <div className="products">
      {products.map((product) => (
        <ShopProduct key={product.id} product={product} />
      ))}
    </div>
  );
};
