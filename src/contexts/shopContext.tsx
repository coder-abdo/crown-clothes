import { IShopContext, IShopProduct } from "@/types";
import { ReactNode, createContext, useContext, useState } from "react";
import SHOPPRODUCTS from "@/assets/shop-data.json";

const ShopProductContext = createContext<IShopContext>({
  shopProducts: [],
  setShopProducts: () => [],
});
type Props = {
  children: ReactNode;
};
export default function ShopContextProvider({ children }: Props) {
  const [shopProducts, setShopProducts] =
    useState<IShopProduct[]>(SHOPPRODUCTS);
  return (
    <ShopProductContext.Provider value={{ shopProducts, setShopProducts }}>
      {children}
    </ShopProductContext.Provider>
  );
}
export const useShopProducts = () => useContext(ShopProductContext);
