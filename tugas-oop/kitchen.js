const fs = require("fs");
const { Chocolate, Sweet, Strawberry } = require("./cookies");

class Kitchen {
  bake(cookie) {
    let cookies = this.getCSV();
    cookies.push(`${cookies.length},${cookie}`);
    this.saveToCSV(cookies.join("\r\n"));

    console.log(`${cookie.split(",")[0]} has been baked`);
  }

  eat(cookieName) {
    let cookies = this.getCSV();
    let isRemoved = false;

    cookies.forEach((cookie, i) => {
      if (i > 0) {
        if (cookie.split(",")[1] === cookieName) {
          cookies.splice(i, 1);
          isRemoved = true;
        }
      }
    });

    if (isRemoved) {
      this.saveToCSV(cookies.join("\r\n"));
      console.log(`${cookieName} has been eaten`);
    }
  }

  addSugar(cookieName) {
    let cookies = this.getCSV();
    let isAdded = false;

    let cookiesArr = [];

    for (let i = 0; i < cookies.length; i++) {
      if (cookies[i].split(",")[1] === cookieName) {
        let cookie = cookies[i].split(",");
        cookie[4] = true;
        isAdded = true;
        cookiesArr.push(cookie);
      } else {
        cookiesArr.push(cookies[i].split(","));
      }
    }

    if (isAdded) {
      this.saveToCSV(cookiesArr.join("\r\n"));
      console.log(`Sugar added successfully to ${cookieName}`);

      let data = this.getCSV();

      let arr = [];

      data.forEach((e, i) => {
        if (i > 0) {
          arr.push(e.split(","));
        }
      });

      console.log(`Succesfully add sugar to ${cookieName}`);
    } else {
      console.log(`Failed to add sugar`);
    }
  }

  getCookies() {
    let cookies = this.getCSV();

    let cookiesArr = [];

    for (let i = 1; i < cookies.length; i++) {
      cookiesArr.push(cookies[i].split(","));
    }

    let data = cookiesArr.map((cookie) => {
      let [id, name, price, type, isSweet] = cookie;

      switch (type) {
        case "Chocolate":
          return new Chocolate(id, name, price, type, isSweet);
          break;
        case "Sweet":
          return new Sweet(id, name, price, type, isSweet);
          break;
        case "Strawberry":
          return new Strawberry(id, name, price, type, isSweet);
          break;
      }
    });

    return data;
  }

  showCookies() {
    let cookies = this.getCookies();
    console.log("Cookies list : ");
    cookies.forEach((cookie) => {
      let { id, name, price, type, isSweet } = cookie;
      console.log(
        `${id}. ${name}, price : ${price}, type : ${type}, isSweet : ${isSweet}`
      );
    });
  }

  getCSV() {
    let dataCSV = fs.readFileSync("./cookies.csv", "utf8");
    return dataCSV.split("\r\n");
  }

  saveToCSV(fixData) {
    fs.writeFileSync("./cookies.csv", fixData);
  }
}

module.exports = Kitchen;
