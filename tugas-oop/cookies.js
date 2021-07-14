class Cookies {
  constructor(id, name, price, type) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.type = type;
  }

  showName() {
    console.log(`Name : ${this.name}`);
  }
}

class Chocolate extends Cookies {
  constructor(id, name, price, type, isSweet) {
    super(id, name, price, type);
    this.isSweet = isSweet;
  }

  showName() {
    console.log(`Chocolate name : ${this.name}`);
  }
}

class Sweet extends Cookies {
  constructor(id, name, price, type, isSweet) {
    super(id, name, price, type);
    this.isSweet = isSweet;
  }

  showName() {
    console.log(`Chocolate name : ${this.name}`);
  }
}

class Strawberry extends Cookies {
  constructor(id, name, price, type, isSweet) {
    super(id, name, price, type);
    this.isSweet = isSweet;
  }

  showName() {
    console.log(`Chocolate name : ${this.name}`);
  }
}

module.exports = {
  Chocolate,
  Sweet,
  Strawberry,
};
