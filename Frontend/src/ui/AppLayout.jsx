import Header from "./Header";
import { Outlet } from "react-router-dom";
import PageFooter from "./PageFooter";

function AppLayout() {
  return (
    <div>
      <Header />
      <div className="overflow-scroll">
        <main className="pages">
          <Outlet />
        </main>
      </div>
      <PageFooter />
    </div>
  );
}

export default AppLayout;
