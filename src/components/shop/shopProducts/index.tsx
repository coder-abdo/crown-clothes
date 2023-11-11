import { CategoryPreview } from "@/components/category/categoryPreview";
import { useAppSelector } from "@/hooks/redux";

export const ShopProducts = () => {
  const { category } = useAppSelector((state) => state.category);
  return (
    <>
      {Object.keys(category).map((title) => (
        <CategoryPreview key={title} title={title} products={category[title]} />
      ))}
    </>
  );
};
