const employees = require("./data.js");

function totalEmployeeByDepartment(employees) {
  const emp = [];

  employees.forEach((employee) => {
    const id = employee.department_id;

    let isFound = false;

    emp.forEach((x, i) => {
      if (emp[i].department_id === id) {
        emp[i].total = emp[i].total + 1;
        isFound = true;
      }
    });

    if (!isFound)
      emp.push({
        department_id: id,
        total: 1,
      });
  });

  emp.forEach((e) => {
    console.log(e);
  });
}

totalEmployeeByDepartment(employees);
