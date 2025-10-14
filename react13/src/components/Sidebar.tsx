import { useLocation, useNavigate } from "react-router"
import './Sidebar.css'

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="sidebar">
      <h2 className="logo">AdminPanel</h2>
      <ul>
        <li
          className={location.pathname === "/dashboard" ? "active" : ""}
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </li>
        <li
          className={location.pathname === "/orders" ? "active" : ""}
          onClick={() => navigate("/orders")}
        >
          Orders
        </li>
        <li
          className={location.pathname === "/menu" ? "active" : ""}
          onClick={() => navigate("/menu")}
        >
          Menu
        </li>
        <li
          className={location.pathname === "/customers" ? "active" : ""}
          onClick={() => navigate("/customers")}
        >
          Customers
        </li>
        <li
          className={location.pathname === "/reservations" ? "active" : ""}
          onClick={() => navigate("/reservations")}
        >
          Reservations
        </li>
        <li
          className={location.pathname === "/staff" ? "active" : ""}
          onClick={() => navigate("/staff")}
        >
          Staff
        </li>
        <li
          className={location.pathname === "/analytics" ? "active" : ""}
          onClick={() => navigate("/analytics")}
        >
          Analytics
        </li>
        <li
          className={location.pathname === "/settings" ? "active" : ""}
          onClick={() => navigate("/settings")}
        >
          Settings
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
