import "./Signup.css";

function Signup() {
  return (
    <div className="page">
      <div className="container">
        <h2>Register</h2>
        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
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
