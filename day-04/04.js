const employees = require("./data.js");

function showAges(employees, age1, age2) {
  let data = employees.filter((e) => {
    if (e.age >= age1 && e.age <= age2) {
      return e;
    }
  });

  console.log(data);
}

showAges(employees, 30, 40);
