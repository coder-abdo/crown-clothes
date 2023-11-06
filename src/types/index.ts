import { User } from "firebase/auth";
import { Dispatch } from "react";
type CategoryType = {
  id: number;
  title: string;
  imageUrl: string;
};
interface IShopProduct {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}
interface IShopData {
  title: string;
  items: IShopProduct[];
}
interface IShopContext {
  shopProducts: IShopProduct[];
  setShopProducts: Dispatch<IShopProduct[]>;
}
interface ICategoriesContext {
  categories: IShopData;
  setCategories: Dispatch<IShopData>;
}
interface IUserContext {
  currentUser: User | null;
  setCurrentUser: Dispatch<User | null>;
}
interface ICartMenuContext {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
  cartItems: ICartItem[];
  setCartItems: Dispatch<ICartItem[]>;
  addToCart: (cartItem: ICartItem) => void;
  cartCount: number;
  removeItemFromCart: (cartItem: ICartItem) => void;
  clearItemFromCart: (cartItem: ICartItem) => void;
  totalCartPrice: number;
}
interface ICartItem extends IShopProduct {
  quantity: number;
}
export type {
  IUserContext,
  IShopContext,
  IShopProduct,
  CategoryType,
  ICartMenuContext,
  ICartItem,
  IShopData,
  ICategoriesContext,
};
