let menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  },
  set mains(mains) {
    this._courses.main = mains;
  },
  set desserts(desserts) {
    this._courses.desserts = desserts;
  },
   get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  addDish(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getDish(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateMeal() {
    const appetizer = this.getDish('appetizers');
    const main = this.getDish('mains');
    const dessert = this.getDish('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The total price is ${totalPrice}.`
  }
};

menu.addDish('appetizers', 'salad', 4.00);
menu.addDish('appetizers', 'wings', 4.50);
menu.addDish('appetizers', 'fries', 5.00);

menu.addDish('mains', 'steak', 10.25);
menu.addDish('mains', 'salmon', 7.75);
menu.addDish('mains', 'tofu', 11.20);

menu.addDish('desserts', 'ice cream', 3.00);
menu.addDish('desserts', 'coffe', 3.00);
menu.addDish('desserts', 'cake', 3.25);

const meal = menu.generateMeal();
console.log(meal);