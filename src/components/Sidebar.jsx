import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar-container flex flex-col h-screen p-4 bg-gray-800 text-white">
      <div>
        <h1 className="sidebar-title text-2xl font-bold mb-6">
          Mini-ERP
        </h1>
        <ul className="space-y-4">
          <li>
            <Link to="/dashboard" className="nav-link hover:text-blue-400">
              Employee
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-auto">
        <button
          onClick={() => {
            localStorage.removeItem("auth");
            window.location.href = "/login"; 
          }}
          className="logout-btn bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
