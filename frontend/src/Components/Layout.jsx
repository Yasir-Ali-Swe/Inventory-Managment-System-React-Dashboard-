import Sidebar from "./Sidebar.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden mb-1">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout