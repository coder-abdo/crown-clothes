import { Outlet } from "@tanstack/react-router";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/navbar";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
const Layout = () => (
  <>
    <Toaster />
    <Navbar />
    <Outlet />
    <TanStackRouterDevtools />
  </>
);
export default Layout;
