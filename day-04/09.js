const employees = require("./data.js");

function salaryMinMax(employees) {
  const emp = [];
  employees.forEach((employee, i) => {
    let salary = Math.round(employee.salary);
    emp.push([salary, i]);
  });

  emp.sort();

  emp.forEach((employee) => {
    console.log(employees[employee[1]]);
  });
}

salaryMinMax(employees);
