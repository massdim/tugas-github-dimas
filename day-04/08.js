const employees = require("./data.js");

function totalEmployeeByJobId(employees) {
  const emp = [];

  employees.forEach((employee) => {
    const id = employee.job_id;

    let isFound = false;

    emp.forEach((x, i) => {
      if (emp[i].job_id === id) {
        emp[i].total = emp[i].total + 1;
        isFound = true;
      }
    });

    if (!isFound)
      emp.push({
        job_id: id,
        total: 1,
      });
  });

  emp.forEach((e) => {
    console.log(e);
  });
}

totalEmployeeByJobId(employees);
