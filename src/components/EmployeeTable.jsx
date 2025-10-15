import { useState, useEffect } from "react";
import EmployeeForm from "./EmployeeForm";

function EmployeeTable() {
  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem("employees");
    return saved ? JSON.parse(saved) : [];
  });
  const [editingEmployee, setEditingEmployee] = useState(null);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const deleteEmployee = (index) => {
    const updated = employees.filter((_, i) => i !== index);
    setEmployees(updated);
    if (editingEmployee && editingEmployee.index === index) {
      setEditingEmployee(null); // Stop editing if the employee is deleted
    }
  };

  return (
    <div className="page-container space-y-8">
      <EmployeeForm
        employees={employees}
        setEmployees={setEmployees}
        editingEmployee={editingEmployee}
        setEditingEmployee={setEditingEmployee}
      />
      
      <div className="table-wrapper">
        <table className="styled-table">
          <thead>
            <tr className="table-header-row">
              <th>Name</th>
              <th>Role</th>
              <th>Department</th>
              <th style={{textAlign: 'center'}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => (
              <tr key={index}>
                <td>{emp.name}</td>
                <td>{emp.role}</td>
                <td>{emp.department}</td>
                <td>
                  <div className="action-buttons">
                    <button
                      onClick={() => setEditingEmployee({ ...emp, index })}
                      className="btn-edit"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteEmployee(index)}
                      className="btn-delete"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {employees.length === 0 && (
              <tr>
                <td colSpan={4} className="empty-state">
                  No employee records found. Please add a new employee above.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeTable;
