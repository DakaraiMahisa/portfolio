import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => (
  <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
    <Navbar />
    <div className="flex-1 pt-24">
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default Layout;
