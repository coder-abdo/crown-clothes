import { User } from "firebase/auth";
import { Dispatch } from "react";
export type CategoryType = {
  id: number;
  title: string;
  imageUrl: string;
};

export interface IContext {
  currentUser: User | null;
  setCurrentUser: Dispatch<User | null>;
}
