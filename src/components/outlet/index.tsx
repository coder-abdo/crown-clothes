import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import { Toaster } from "react-hot-toast";

const Layout = () => (
  <>
    <Toaster />
    <Navbar />
    <Outlet />
  </>
);
export default Layout;
