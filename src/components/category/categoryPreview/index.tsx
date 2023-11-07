import type { FC } from "react";
import { IShopProduct } from "@/types";
import { ShopProduct } from "@/components/shop/shopProduct";
import { Link } from "react-router-dom";
interface Props {
  title: string;
  products: IShopProduct[];
}
export const CategoryPreview: FC<Props> = ({ title, products }) => {
  return (
    <div className="category__preview preview">
      <h1 className="preview__title">
        <Link to={`/shop/${title}`}>
          {title}
        </Link>
        
      </h1>
      <div className="products">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ShopProduct key={product.id} product={product} />
          ))}{" "}
      </div>
    </div>
  );
};
