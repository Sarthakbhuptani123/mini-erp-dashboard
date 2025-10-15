import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error message
  const [isLoading, setIsLoading] = useState(false); // State for loading
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate API call delay for 1 second
    // Using setTimeout is fine for simulation, but ensure the code inside runs correctly.
    const loginAttempt = setTimeout(() => {
        setIsLoading(false);
        if (username === "admin" && password === "admin") {
            localStorage.setItem("auth", true);
            // After successful login, navigate to the dashboard route
            navigate("/dashboard");
        } else {
            setError("Invalid credentials.");
        }
    }, 1000); 
    
    // Cleanup function if component unmounts quickly (standard practice)
    return () => clearTimeout(loginAttempt);
  };

  return (
    <div className="login-wrapper">
      <form
        onSubmit={handleLogin}
        className="login-card"
      >
        <div className="login-header-group"> 
            {/* Lock Icon for professional look */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="login-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            <h2 className="login-title">Admin Dashboard Access</h2>
            <p className="login-subtitle">Enter your credentials to manage employee records.</p>
        </div>
        
        {/* Error Message Display */}
        {error && <p className="error-message">{error}</p>} 
        
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          required
        />
        <button
          type="submit"
          className="login-btn"
          disabled={isLoading}
        >
          {isLoading ? 'Authenticating...' : 'Login Securely'}
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
