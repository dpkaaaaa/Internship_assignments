
import { useNavigate } from "react-router-dom";
import profilePic from "../assets/user.jpg";
function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    navigate("/login");
  };

  const username = localStorage.getItem("username") || "Admin";

  return (
    <header className="header">
      <input type="text" placeholder="Search..." className="search-box" />
      <div className="user-profile">
        <img
          src={profilePic}
          alt={`${username}'s profile`}
          className="profile-pic"
        />
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
}

export default Navbar;
