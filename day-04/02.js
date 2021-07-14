const employees = require("./data.js");

function salaryRange(employees, minSalary, maxSalary) {
  let data = employees.filter((e) => {
    if (e.salary >= minSalary && e.salary <= maxSalary) {
      return e;
    }
  });

  console.log(data);
}

salaryRange(employees, 24000, 48000);
