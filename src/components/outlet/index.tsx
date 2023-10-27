import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/navbar";
const Layout = () => (
  <>
    <Toaster />
    <Navbar />
    <Outlet />
  </>
);
export default Layout;
