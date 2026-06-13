// Higher-Order Functions Practice

// 1. repeat(action, times) - call action function 'times' times
function repeat(action, times) {
  for (let i = 0; i < times; i++) {
    action(i)
  }
}
repeat((i) => console.log("Hello " + i), 3)

// 2. operate(arr, fn) - apply fn to each element using map
function operate(arr, fn) {
  return arr.map(fn)
}
console.log(operate([1, 2, 3], (x) => x * 2))

// 3. filterBy(arr, conditionFn) - return filtered array
function filterBy(arr, conditionFn) {
  return arr.filter(conditionFn)
}
console.log(filterBy([1, 2, 3, 4, 5], (x) => x > 2))

// 4. logger(fn) - logs "before" and "after" calling fn
function logger(fn) {
  return function (...args) {
    console.log("before")
    const result = fn(...args)
    console.log("after")
    return result
  }
}
const loggedAdd = logger((a, b) => a + b)
console.log(loggedAdd(2, 3))

// 5. createAdder(x) - returns function that adds x
function createAdder(x) {
  return function (y) {
    return x + y
  }
}
const add5 = createAdder(5)
console.log(add5(10))

// 6. sortBy(arr, key) - sort array of objects by key
function sortBy(arr, key) {
  return [...arr].sort((a, b) => {
    if (a[key] < b[key]) return -1
    if (a[key] > b[key]) return 1
    return 0
  })
}
const students = [
  { name: "Hari", age: 28 },
  { name: "Dipak", age: 25 },
  { name: "Sita", age: 30 }
];
console.log(sortBy(students, "age"))

// 7. pipeline(...functions) - chain functions, apply one after another
function pipeline(...functions) {
  return function (input) {
    return functions.reduce((acc, fn) => fn(acc), input)
  }
}
const double = (x) => x * 2
const square = (x) => x * x
const addOne = (x) => x + 1
const myPipeline = pipeline(double, square, addOne)
console.log(myPipeline(3)) // double=6, square=36, addOne=37

// 8. withTax(taxRate) - returns function to add tax to price
function withTax(taxRate) {
  return function (price) {
    return price + price * taxRate
  }
}
const addVat = withTax(0.13)
console.log(addVat(100))

// 9. debounce(fn, delay) - basic version
function debounce(fn, delay) {
  let timer
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
const debouncedLog = debounce((msg) => console.log(msg), 500)
debouncedLog("typing...")

// 10. memoize(fn) - cache results of expensive pure functions
function memoize(fn) {
  const cache = {}
  return function (n) {
    if (cache[n] !== undefined) {
      console.log("from cache")
      return cache[n]
    }
    const result = fn(n)
    cache[n] = result
    return result
  }
}
const slowSquare = (n) => n * n
const fastSquare = memoize(slowSquare)
console.log(fastSquare(5)) // calculates
console.log(fastSquare(5)) // from cache