import { useCategories } from "@/contexts/shopContext";
import { IShopProduct } from "@/types";
import { useEffect, useState } from "react";

export const useCategory = (slug: string) => {
  const [products, setProducts] = useState<IShopProduct[]>([]);
  const { categories } = useCategories();
  useEffect(() => {
    setProducts(categories[slug]);
  }, [slug, categories]);
  return { products };
};
