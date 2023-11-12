import { useEffect } from "react";
import { RouterProvider } from "@tanstack/react-router";

import {
  createUserFromAuth,
  getCategoriesDocument,
  handleAuthChange,
} from "@/utils/firebase";

import { setCurrentUser } from "@/store/user/userActions";
import { createCategory } from "@/store/categories/categoriesActions";

import { useAppDispatch } from "@/hooks/redux";

import { IShopData } from "@/types";

import { router } from "@/routers";

function App() {
  const dispatch = useAppDispatch();
  const getCategories = async () => {
    const categoriesMap = (await getCategoriesDocument()) as IShopData;
    dispatch(createCategory(categoriesMap));
  };
  useEffect(() => {
    const unsubscribe = handleAuthChange((user) => {
      if (user) {
        createUserFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]);

  useEffect(() => {
    getCategories();
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
