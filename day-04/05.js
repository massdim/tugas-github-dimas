const employees = require("./data.js");

function totalSalaryAllEmployee(employees) {
  let salary = 0;

  employees.forEach((e) => {
    salary += Math.round(e.salary);
  });

  console.log(`total salary: ${salary}`);
}

totalSalaryAllEmployee(employees);
