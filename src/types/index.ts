import { User } from "firebase/auth";
import { Dispatch } from "react";
export type CategoryType = {
  id: number;
  title: string;
  imageUrl: string;
};
export interface IShopProduct {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}
export interface IShopContext {
  shopProducts: IShopProduct[];
  setShopProducts: Dispatch<IShopProduct[]>;
}
export interface IContext {
  currentUser: User | null;
  setCurrentUser: Dispatch<User | null>;
}
