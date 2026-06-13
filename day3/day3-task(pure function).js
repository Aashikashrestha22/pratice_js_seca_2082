// Pure Functions Practice

// 1. multiply two numbers
function multiply(a, b) {
  return a * b
}
console.log(multiply(4, 5))

// 2. full name
function getFullName(firstName, lastName) {
  return firstName + " " + lastName
}
console.log(getFullName("Aashika ", "Shrestha"))

// 3. check even number
function isEven(num) {
  if (num % 2 === 0) {
    return true
  } else {
    return false
  }
}
console.log(isEven(7))

// 4. capitalize first letter
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
console.log(capitalize("hello"))

// 5. area of circle (pi = 3.14)
function calculateArea(radius) {
  const pi = 3.14
  return pi * radius * radius
}
console.log(calculateArea(2))

// 6. get initials like A.S.
function getInitials(firstName, lastName) {
  return firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase() + ".";
}
console.log(getInitials("Aashika", "Shrestha"))

// 7. fahrenheit to celsius
function fahrenheitToCelsius(f) {
  return (f - 32) * 5 / 9
}
console.log(fahrenheitToCelsius(98))

// 8. reverse a string
function reverseString(str) {
  let reversed = ""
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed
}
console.log(reverseString("function"))

// 9. find max number in array
function findMax(arr) {
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max;
}
console.log(findMax([3, 9, 1, 7]))

// 10. format date as DD/MM/YYYY
function formatDate(year, month, day) {
  const d = day < 10 ? "0" + day : day
  const m = month < 10 ? "0" + month : month
  return d + "/" + m + "/" + year
}
console.log(formatDate(2025, 4, 9))