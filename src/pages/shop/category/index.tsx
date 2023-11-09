import { ShopProduct } from "@/components/shop/shopProduct";
import { useCategory } from "@/hooks/useCategory";
import { useParams } from "@tanstack/react-router";

export const Category = () => {
  const { category } = useParams({ from: "" });
  const { products } = useCategory(category);
  return (
    <div className="category__preview">
      <h1 className="preview__title preview__title--center">{category}</h1>
      <div className="products">
        {products &&
          products.map((product) => (
            <ShopProduct key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};
