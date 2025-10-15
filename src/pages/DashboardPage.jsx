import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import EmployeeTable from "../components/EmployeeTable";

function DashboardPage() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content-wrapper">
        <Navbar />
        <main className="page-container">
          <EmployeeTable />
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;
