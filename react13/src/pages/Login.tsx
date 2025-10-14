import  { useState } from "react"
import './Login.css';
import { useNavigate } from "react-router-dom";

function Login  ()  {
 const [email,setEmail] =useState("");
 const [password,setPassword]= useState("");
 const navigate =useNavigate();

 const handleLogin = () =>{
    
    if (email && password){
        localStorage.setItem("username", email.split("@")[0]);
        navigate("/dashboard");
    }
    else{
        alert("Please enter email and password")
    }
 }

  return (
      <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );

}

export default Login
