import { useEffect } from "react";
import { RouterProvider } from "@tanstack/react-router";

import { createUserFromAuth, handleAuthChange } from "@/utils/firebase";

import { setCurrentUser } from "@/store/user/userActions";
import {
  createCategoryLoading,
} from "@/store/categories/categoriesActions";

import { useAppDispatch } from "@/hooks/redux";

import { router } from "@/routers";

function App() {
  const dispatch = useAppDispatch();

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
    dispatch(createCategoryLoading());
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
