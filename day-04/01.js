const employees = require("./data.js");

function searchEmployees(employees, prefix) {
  let data = employees.filter((e) => {
    let fullName = `${e.first_name} ${e.last_name}`;
    if (fullName.toLowerCase().match(prefix.toLowerCase())) {
      return e;
    }
  });

  console.log(data);
}

searchEmployees(employees, "s");
