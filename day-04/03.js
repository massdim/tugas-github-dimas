const employees = require("./data.js");

function hireRangeDate(employees, startDate, endDate) {
  let start = new Date(startDate);
  start.setHours(0, 0, 0, 0);

  let end = new Date(endDate);
  end.setHours(0, 0, 0, 0);

  let data = employees.filter((e) => {
    let hireDate = e.hire_date.split("-");
    hireDate = hireDate.reverse().toString().replace(/,/g, "-");

    console.log(hireDate);
    let hire = new Date(hireDate);
    hire.setHours(0, 0, 0, 0);

    if (hire >= start && hire <= end) return e;
  });

  console.log(data);
}

hireRangeDate(employees, "12-01-1993", "12-12-1995");
