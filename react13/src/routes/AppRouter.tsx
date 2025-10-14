import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Menu from "../pages/Menu";
import Orders from "../pages/Orders";
import Customers from "../pages/Customers";
import Reservations from "../pages/Reservations";
import Staff from "../pages/Staff";
import Analytics from "../pages/Analytics";
import Settings from "../pages/Settings";

function AppRouter() {
  const isLoggedIn = !!localStorage.getItem("username");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/orders" element={isLoggedIn ? <Orders /> : <Navigate to="/" />} />
        <Route path="/menu" element={isLoggedIn ? <Menu /> : <Navigate to="/" />} />
        <Route path="/customers" element={isLoggedIn ? <Customers /> : <Navigate to="/" />} />
        <Route path="/reservations" element={isLoggedIn ? <Reservations /> : <Navigate to="/" />} />
        <Route path="/staff" element={isLoggedIn ? <Staff /> : <Navigate to="/" />} />
        <Route path="/analytics" element={isLoggedIn ? <Analytics /> : <Navigate to="/" />} />
        <Route path="/settings" element={isLoggedIn ? <Settings /> : <Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
