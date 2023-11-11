import { RootRoute, Route, Router } from "@tanstack/react-router";

import Root from "@/components/outlet";
import Home from "@/pages/home";
import Shop from "@/pages/shop";
import Auth from "@/pages/auth";
import { Category } from "@/pages/shop/category";
import { ShopIndexPage } from "@/pages/shop/IndexPage";
import ErrorPage from "@/pages/errorPage";
import Checkout from "@/pages/checkout";

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
const notFoundRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "*",
  component: ErrorPage,
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
  notFoundRoute,
]);
export const router = new Router({ routeTree });
