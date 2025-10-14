import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import ContactUs from "../pages/ContactUs";
import NotFoundPage from "../pages/NotFoundPage";
import AboutUs from "../pages/AboutUs";
// import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import Student from "../pages/Student";
import StudentDetailsPage from "../pages/StudentDetailsPage";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/students" element={<Student />} />
        <Route path="/students/:studentId" element={<StudentDetailsPage />} />
        {/*Nested route */}
        {/* <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route> */}


        {/* Private Route */}
        <Route  element={<PrivateRoute />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
