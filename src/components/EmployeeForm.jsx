import { useState, useEffect } from "react";

function EmployeeForm({ employees, setEmployees, editingEmployee, setEditingEmployee }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");

  useEffect(() => {
    if (editingEmployee) {
      setName(editingEmployee.name);
      setRole(editingEmployee.role);
      setDepartment(editingEmployee.department);
    } else {
      setName("");
      setRole("");
      setDepartment("");
    }
  }, [editingEmployee]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !role || !department) {
      console.log("All fields are required");
      return;
    }

    if (editingEmployee) {
      const updatedEmployees = employees.map((emp, i) => 
        i === editingEmployee.index ? { name, role, department } : emp
      );
      setEmployees(updatedEmployees);
      setEditingEmployee(null);
    } else {
      setEmployees([...employees, { name, role, department }]);
    }

    setName("");
    setRole("");
    setDepartment("");
  };

  return (
    <div className="form-card">
      <h3 className="form-title">
        {editingEmployee ? "Edit Employee Details" : "Add New Employee"}
      </h3>
      <form onSubmit={handleSubmit} className="form-layout" >
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}  className="input-field" required/>
        <input type="text" placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} className="input-field" required />
        <input type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} className="input-field" required />
        <button  type="submit" className="btn-primary" > {editingEmployee ? "Update Employee" : "Add Employee"}</button>
      </form>
      
      {editingEmployee && (
        <button onClick={() => setEditingEmployee(null)} className="btn-cancel" >Cancel Edit</button>
      )}
    </div>
  );
}

export default EmployeeForm;
