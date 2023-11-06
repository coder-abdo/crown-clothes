// import { ShopProduct } from "@/components/shop/shopProduct";
import { useCategories } from "@/contexts/shopContext";
import { ShopProduct } from "../shopProduct";

export const ShopProducts = () => {
  const { categories } = useCategories();
  // console.log(Object.keys(categories));
  console.table(categories);
  return (
    <>
      {Object.keys(categories).map((title) => (
        <>
          <h1>{title}</h1>
          <div className="products">
            {categories[title].map((product) => (
              <ShopProduct product={product} />
            ))}{" "}
          </div>
        </>
      ))}
    </>
  );
};
