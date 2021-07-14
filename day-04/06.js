const employees = require("./data.js");
let departmentId = 9;

function totalSalaryByDepartment(employees, departmentId) {
  let salary = 0;

  employees.forEach((e) => {
    if (e.department_id === departmentId) {
      salary += Math.round(e.salary);
    }
  });

  console.log(`total salary: ${salary}`);
}

totalSalaryByDepartment(employees, departmentId);
