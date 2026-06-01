//  Create an array colors with 5 color names and log the third element.
const colors = ["Red", "Blue", "Green", "Yellow", "Purple"]
console.log(colors[2])


//  Create an object book with properties title, author, pages, and publishedYear.
const book = {
  title: "The Red Dragon",
  author: "xyz",
  pages: 148,
  publishedYear: 2002
};


//  Add a new property isRead: true to an existing book object immutably.
const updatedBook = {...book, isRead: true};

console.log(updatedBook);


//  Create an array of 3 objects, each representing a student with name and grade.
const students = [
  { name: "Kanchi", grade: "A" },
  { name: "Bhumika", grade: "B+" },
  { name: "Ram", grade: "A+" }
];

console.log(students);


//  Create a nested object company with properties name, location, and employees (an array of names).
const company = {
  name: "TukiLogic Pvt Ltd",
  location: "Sanepa",
  employees: (students)
};

console.log(company);


//  From an array numbers = [10, 20, 30], create a new array with each value increased by 5 immutably.
const numbers = [10, 20, 30];

const updateNumbers = numbers.map(num => num + 5);

console.log(updateNumbers); // [15, 25, 35]


// 7. Create an object car and add a new property color immutably.
const car = {
  brand: "BMW",
  model: "Corolla"
};

const updatedCar = {
  ...car,
  color: "White"
};

console.log(updatedCar);


//  Create an array shoppingList and add a new item at the beginning immutably.
const shoppingList = ["Milk", "Bread", "Eggs"];

const newShoppingList = ["Rice", ...shoppingList];

console.log(newShoppingList);


//  Create an object profile with nested address object containing city and country.
const profile = {
  name: "xyz",
  age:21 ,
  address: {
    city: "Kathmandu",
    country: "Nepal"
  }
};

console.log(profile);


//  From an array of objects products, create a new array with only name and price properties.
const products = [
  { name: "Laptop", price: 50000, category: "Electronics" },
  { name: "Phone", price: 30000, category: "Electronics" },
  { name: "Book", price: 500, category: "Education" }
];

const productSummary = products.map(product => ({
  name: product.name,
  price: product.price
}));

console.log(productSummary);