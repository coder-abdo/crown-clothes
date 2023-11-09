import { ICategoriesContext, IShopData } from "@/types";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getCategoriesDocument } from "@/utils/firebase";

const CategoriesContext = createContext<ICategoriesContext | null>(null);
type Props = {
  children: ReactNode;
};
export default function ShopContextProvider({ children }: Props) {
  const [categories, setCategories] = useState<IShopData>({
    title: "",
    items: [],
  });
  const getCategories = async () => {
    const categoriesMap = (await getCategoriesDocument()) as IShopData;
    setCategories(categoriesMap);
  };
  useEffect(() => {
    getCategories();
  }, []);
  const value = useMemo((): ICategoriesContext => {
    return {
      categories,
      setCategories,
    };
  }, [categories]);
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
}
export const useCategories = (): ICategoriesContext => {
  const context = useContext(CategoriesContext);
  if (!context) {
    throw "no context";
  }
  return context;
};
