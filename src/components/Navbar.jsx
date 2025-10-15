import React from 'react';

function Navbar() {
  return (
    <div className="navbar-container">
      <h2 className="navbar-title">Employee Management Dashboard</h2>
      
     
      <div className="profile-section">
        
        <div className="profile-icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="profile-icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0A8.966 8.966 0 0 1 12 21.75a8.966 8.966 0 0 1-5.982-2.975M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
