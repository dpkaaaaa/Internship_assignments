import { Outlet, useNavigate } from "react-router"

function Dashboard () {
const navigate = useNavigate()
  const handleLogOut = () =>{
    localStorage.removeItem('authToken')
    navigate('/login')
  }
  return (
    <div>
        <Outlet/>
         this is dashbaord
         <div>
         <p>Lets log out</p>
         <button onClick={handleLogOut}>Logout</button>
         </div>
    </div>
  )
}

export default Dashboard
