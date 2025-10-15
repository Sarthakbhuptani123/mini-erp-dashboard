import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Import your pages
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

// --- AuthChecker Component ---
// This component checks if the user is authenticated (auth=true in localStorage)
// and redirects them if they are not.
const AuthChecker = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('auth') === 'true'
  );

  useEffect(() => {
    // We add an event listener to respond to changes in localStorage
    // This handles login/logout actions from different tabs or components.
    const handleStorageChange = () => {
      setIsAuthenticated(localStorage.getItem('auth') === 'true');
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/" replace />;
  }

  return children;
};


function App() {
  // We use key prop to force re-render the router when the auth state changes.
  // This ensures that after login or logout, the routing logic is fully re-evaluated.
  const authKey = localStorage.getItem('auth') === 'true' ? 'logged-in' : 'logged-out';

  return (
    <Router>
      <Routes key={authKey}>
        {/* Public Route: Login Page */}
        <Route path="/" element={<LoginPage />} />
        
        {/* Protected Route: Dashboard Page */}
        <Route 
          path="/dashboard" 
          element={
            <AuthChecker>
              <DashboardPage />
            </AuthChecker>
          } 
        />
        
        {/* Redirect any other path to the login page if not found */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
