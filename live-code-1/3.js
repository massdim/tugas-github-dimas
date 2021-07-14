let groups = [
  {
    name: "Twoosh",
    price: 500,
  },
  {
    name: "Itsy",
    price: 175,
  },
  {
    name: "GET7",
    price: 550,
  },
  {
    name: "Whitepink",
    price: 250,
  },
  {
    name: "JYV",
    price: 300,
  },
];

function hireGroup(groups, budget) {
  let currentBudget = budget;
  const obj = [];

  while (currentBudget >= 175) {
    groups.forEach((group) => {
      const name = group.name;

      if (currentBudget >= group.price) {
        currentBudget -= group.price;

        let isFound = false;

        for (let i = 0; i < obj.length; i++) {
          if (obj[i][name]) {
            obj[i][name] = obj[i][name] + 1;
            isFound = true;
          }
        }

        if (!isFound) obj.push({ [name]: 1 });
      }
    });
  }

  return {
    performance: obj,
    exchange: currentBudget,
  };
}

console.log(hireGroup(groups, 5350));
