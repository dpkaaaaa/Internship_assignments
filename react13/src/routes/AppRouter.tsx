import  { type ReactElement } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Dashboard from "../pages/Dashboard";
import Orders from "../pages/Orders";
import Menu from "../pages/Menu";
import Reservations from "../pages/Reservations";
import Customers from "../pages/Customers";
import Staff from "../pages/Staff";
import Analytics from "../pages/Analytics";
import Settings from "../pages/Settings";
import Login from "../pages/Login";
import NotFoundPage from "../pages/NotFoundPage";

// Define props interface for ProtectedRoute
interface ProtectedRouteProps {
  element: ReactElement;
}


function ProtectedRoute({ element }: ProtectedRouteProps) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? element : <Navigate to="/login" replace />;
}

function AppRouter() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/login" element={<Login />} />
      
      {/* Protected Route */}
      <Route
        path="/*"
        element={
          <ProtectedRoute
            element={
              <div className="dashboard-container">
                <Sidebar />
                <div className="main-section">
                  <Navbar />
                  <main className="main-content">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/orders" element={<Orders />} />
                      <Route path="/menu" element={<Menu />} />
                      <Route path="/reservations" element={<Reservations />} />
                      <Route path="/customers" element={<Customers />} />
                      <Route path="/staff" element={<Staff />} />
                      <Route path="/analytics" element={<Analytics />} />
                      <Route path="/settings" element={<Settings />} />
                      <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
              </div>
            }
          />
        }
      />
    </Routes>
  );
}

export default AppRouter;