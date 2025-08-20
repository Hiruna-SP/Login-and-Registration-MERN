import { useState } from "react";
import "./Signup.css";
import axios from 'axios'
import { Navigate} from "react-router-dom";

function Signup() {

  const[name,setName] = useState()
  const[email,setEmail] = useState()
  const[password,setPassword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register',{name,email,password})
    .then(result =>console.log(result))
    Navigate('/login')
    .catch(err=> console.log(err))
  }

  return (
    <div className="page">
      <div className="container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your name" required onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <button type="submit" className="btn">Register</button>
        </form>

        <p className="redirect">
          Already have an account? 
        </p>
        <button type="submit" className="btn">Login</button>
        
      </div>
    </div>
  );
}

export default Signup;
