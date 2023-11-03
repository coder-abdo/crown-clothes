import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "@/components/outlet";
import Home from "@/pages/home";
import ErrorPage from "@/pages/errorPage";
import Shop from "@/pages/shop";
import Auth from "@/pages/auth";
import UserProvider from "@/contexts/userContext";
import ShopContextProvider from "@/contexts/shopContext";
import CartMenuProvider from "@/contexts/cartDropDownMenuContext";
import Checkout from "@/pages/checkout";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "shop",
          element: <Shop />,
        },
        {
          path: "sign-in",
          element: <Auth />,
        },
        {
          path:"checkout",
          element: <Checkout />
        }
      ],
    },
  ]);
  return (
    <UserProvider>
      <ShopContextProvider>
        <CartMenuProvider>
          <RouterProvider router={router} />
        </CartMenuProvider>
      </ShopContextProvider>
    </UserProvider>
  );
}

export default App;
