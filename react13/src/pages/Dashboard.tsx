import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import './Dashboard.css'; 

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="page-content">
          <h1>This is Dashboard.</h1>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
