import { Outlet } from "react-router-dom";

import TopBar from "./TopBar";

export default function Layout() {
  return (
    <div>
      <TopBar />
      <div className="container-fluid d-flex justify-content-center m-4">
        <Outlet />
      </div>
    </div>
  );
}
