import { IShopProduct } from "@/types";
import { useEffect, useState } from "react";
import { useAppSelector } from "./redux";

export const useCategory = (slug: string) => {
  const [products, setProducts] = useState<IShopProduct[]>([]);
  const { category } = useAppSelector((state) => state.category);
  useEffect(() => {
    setProducts(category[slug]);
  }, [slug, category]);
  return { products };
};
