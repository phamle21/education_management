import { Route, Routes } from "react-router-dom";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import { routes } from "../../routes/routes";

export default function AdminDashboard() {
  return (
    <>
      <div className="d-flex flex-column flex-fill" style={{ height: "100vh" }}>
        <Navbar />
        <div className="d-flex bg-dark flex-fill">
          <Sidebar />
          <div className="d-flex flex-fill bg-light p-2">
            <Routes>
              {routes.map((e) => (
                <Route key={e.id} path={e.path} element={e.main} />
              ))}
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
