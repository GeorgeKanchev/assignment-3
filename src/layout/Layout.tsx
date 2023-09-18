import { Outlet } from "react-router-dom";

import { Header } from "./Header";

function Layout() {
  return (
    <div className="Layout">
      <Header />
      <Outlet />
      {/* @TODO Put Footer here */}
    </div>
  );
}

export default Layout;
