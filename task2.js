//  Use map to double all numbers in [1, 2, 3, 4, 5].
let numbers1 = [1, 2, 3, 4, 5]

let doubled = numbers1.map(num => num * 2)

console.log(doubled) // [2, 4, 6, 8, 10]


//  Use filter to get all even numbers from [1, 2, 3, 4, 5, 6].
let numbers2 = [1, 2, 3, 4, 5, 6]

let evenNum = numbers2.filter(num => num % 2 === 0)

console.log(evenNum)


//  Use reduce to calculate the sum of [10, 20, 30, 40].
let numbers3 = [10, 20, 30, 40]

let  sum = numbers3.reduce((total, num) => total + num, 0)

console.log(sum); 


//  Use find to get the first object with age > 18 from an array of user objects.
let users1 = [
  { name: "Ram", age: 16 },
  { name: "Sita", age: 20 },
  { name: "Hari", age: 25 }
]

let adultUser = users1.find(user => user.age > 18)

console.log(adultUser)


// Use forEach to log each element of ["apple", "banana", "orange"] with its index.
let fruits = ["apple", "banana", "orange"]

fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`)
})


// Use map to extract only names from an array of user objects.
const users2 = [
  { name: "Kanchi", age: 20 },
  { name: "Bhumika", age: 21 },
  { name: "Ram", age: 19 }
]

const names = users2.map(user => user.name)

console.log(names); // ["Aashika", "Sita", "Ram"]


//  Use filter to get products with price < 100 from an array of product objects.
let products = [
  { name: "Pen", price: 20 },
  { name: "Bag", price: 500 },
  { name: "Book", price: 80 }
];

let affordableProducts = products.filter(product => product.price < 100);

console.log(affordableProducts);


//  Use reduce to find the maximum value in an array of numbers.
let numbers4 = [15, 45, 10, 99, 32]

let maxValue = numbers4.reduce(
  (max, num) => (num > max ? num : max),
  numbers4[0]
)

console.log(maxValue); // 99


//  Use map and filter together to get names of adults (age >= 18) in uppercase.
let users3 = [
  { name: "Aashika", age: 20 },
  { name: "Rita", age: 16 },
  { name: "Hari", age: 22 }
]

let adultNames = users3
  .filter(user => user.age >= 18)
  .map(user => user.name.toUpperCase());

console.log(adultNames); 


//  Use forEach to build an HTML unordered list string from an array of items.
let items = ["Milk", "Bread", "Eggs"]

let htmlList = "<ul>"

items.forEach(item => {
  htmlList += `<li>${item}</li>`
})

htmlList += "</ul>"

console.log(htmlList)

/*
<ul>
  <li>Milk</li>
  <li>Bread</li>
  <li>Eggs</li>
</ul>
*/