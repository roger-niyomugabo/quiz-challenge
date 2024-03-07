import Header from "./Header";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <Header />
      <div className="overflow-scroll">
        <main className="pages">
          <Outlet />
        </main>
      </div>
      {/*  footer */}
    </div>
  );
}

export default AppLayout;
