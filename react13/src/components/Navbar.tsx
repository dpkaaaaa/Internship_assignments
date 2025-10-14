import { useNavigate } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  const navigagte = useNavigate();
  const username = localStorage.getItem("username") || "User";
  const handleLogout = () => {
    localStorage.removeItem("username");
    navigagte("/");
  }
  return (

    <header className="navbar">
      <h2>Resturant</h2>
      <div className="user-section">
        <span className="user">{username}</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </header>

  )
}

export default Navbar
