import Root from "@/components/outlet";
import Home from "@/pages/home";
import ErrorPage from "@/pages/errorPage";
import Shop from "@/pages/shop";
import Auth from "@/pages/auth";
import UserProvider from "@/contexts/userContext";
import CategoriesProvider from "@/contexts/shopContext";
import CartMenuProvider from "@/contexts/cartDropDownMenuContext";
import Checkout from "@/pages/checkout";
import { Category } from "@/pages/shop/category";
import {
  RootRoute,
  Route,
  Router,
  RouterProvider,
} from "@tanstack/react-router";
import { ShopIndexPage } from "./pages/shop/IndexPage";
function App() {
  const rootRoute = new RootRoute({
    component: Root,
  });
  const homeRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/",
    component: Home,
  });
  const shopRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/shop",
    component: Shop,
  });
  const authRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/sign-in",
    component: Auth,
  });
  const checkoutRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/checkout",
    component: Checkout,
  });
  const categoryRoute = new Route({
    getParentRoute: () => shopRoute,
    path: "$category",
    component: Category,
  });
  const shopIndexRoute = new Route({
    getParentRoute: () => shopRoute,
    path: "/",
    component: ShopIndexPage,
  });
  const routeTree = rootRoute.addChildren([
    homeRoute,
    shopRoute.addChildren([shopIndexRoute, categoryRoute]),
    authRoute,
    checkoutRoute,
  ]);
  const router = new Router({ routeTree });

  return (
    <UserProvider>
      <CategoriesProvider>
        <CartMenuProvider>
          <RouterProvider router={router} />
        </CartMenuProvider>
      </CategoriesProvider>
    </UserProvider>
  );
}

export default App;
