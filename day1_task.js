// Task 1 – Variables and Template Literals
const firstName = "Aashika"
const lastName = "Shrestha"

const greeting = `Hello, ${firstName} ${lastName}!`
console.log(greeting)


// Task 2 – let and const Scope

{
  let message = "I am a let variable"
  console.log(message)
}
{
  const PI = 3.14
  console.log(PI)
}

// Task 3 – Arrow Function Simple

const greet = (name) => `Hello, ${name}!`

console.log(greet("Aashika"))


// Task 4 – Arrow Function with Multiple Parameters

const multiply = (a, b) => a * b

console.log(multiply(5, 6))


// Task 5 – Object Destructuring

const person = {
  name: "Aashika",
  age: 19,
  country: "Nepal"
};

const { name, country } = person

console.log(name)
console.log(country)


// Task 6 – Array Destructuring

const numbers = [10, 20, 30, 40]

const [first, second] = numbers

console.log(first)
console.log(second)


// Task 7 – Default Parameters

function sayHello(name = "Guest") {
  return `Hello, ${name}!`
}

console.log(sayHello())
console.log(sayHello("Aashika"))


// Task 8 – Rest Operator (Sum of Numbers)

function sumAll(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0)
}

console.log(sumAll(1, 2, 3, 4))


// Task 9 – Spread Operator with Arrays

const array1 = [1, 2, 3]
const array2 = [4, 5]

const mergedArray = [...array1, ...array2]

console.log(mergedArray)


// Task 10 – Merge and Destructure Objects

const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }

const mergedObject = {
  ...obj1,
  ...obj2
};

const { a, d } = mergedObject

console.log(a)
console.log(d)