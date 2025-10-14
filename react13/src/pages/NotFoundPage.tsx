
import { Link } from "react-router-dom";

function NotFoundPage()  {
  return (
    <div >
      <h1>404 - Page Not Found</h1>
      
      <Link to="/login">Go back to Dashboard</Link>
    </div>
  );
};

export default NotFoundPage;
