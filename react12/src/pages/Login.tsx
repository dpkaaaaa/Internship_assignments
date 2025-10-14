import { useNavigate } from "react-router"

function Login  ()  {
    const navigate = useNavigate()
    const handleLogin = () =>{
        localStorage.setItem("authToken" ,"bareerAuthtoken")
        navigate('/dashboard')
    }
  return (
    <div>
       <h1>This is login page</h1>
       <button style={{marginTop:"20px"}} onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
