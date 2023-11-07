import { useCategories } from "@/contexts/shopContext";
import { CategoryPreview } from "@/components/category/categoryPreview";

export const ShopProducts = () => {
  const { categories } = useCategories();
  return (
    <>
      {Object.keys(categories).map((title) => (
        <CategoryPreview key={title} title={title} products={categories[title]} />
      ))}
    </>
  );
};
