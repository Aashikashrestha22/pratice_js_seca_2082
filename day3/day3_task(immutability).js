// Immutability Practice

// 1. update age from 25 to 26 immutably
const person1 = { name: "Aashika", age: 18 }
const updatedPerson1 = { ...person1, age: 19 }
console.log(updatedPerson1)

// 2. add new hobby to hobbies array immutably
const person2 = { name: "Bhumika", hobbies: ["reading", "music"] }
const updatedPerson2 = { ...person2, hobbies: [...person2.hobbies, "painting"] }
console.log(updatedPerson2);

// 3. remove last element from array immutably
const numbers1 = [1, 2, 3, 4, 5]
const removedLast = numbers1.slice(0, numbers1.length - 1)
console.log(removedLast)

// 4. replace second element in array immutably
const numbers2 = [10, 20, 30, 40]
const replacedSecond = numbers2.map((num, index) => {
  if (index === 1) {
    return 99
  } else {
    return num
  }
})
console.log(replacedSecond)

// 5. change nested property address.city immutably
const person3 = {
  name: "Hari",
  address: {
    city: "Kathmandu",
    country: "Nepal"
  }
};
const updatedPerson3 = {
  ...person3,
  address: {
    ...person3.address,
    city: "Pokhara"
  }
}
console.log(updatedPerson3)

// 6. add new key-value pair to object immutably
const person4 = { name: "Anisha", age: 22 }
const updatedPerson4 = { ...person4, country: "Nepal" }
console.log(updatedPerson4)

// 7. remove property deletedAt from object immutably
const item1 = { id: 1, title: "task1", deletedAt: "2024-01-01" }
const { deletedAt, ...itemWithoutDeletedAt } = item1
console.log(itemWithoutDeletedAt)

// 8. merge two arrays immutably
const arrA = [1, 2, 3]
const arrB = [4, 5, 6]
const mergedArr = [...arrA, ...arrB]
console.log(mergedArr)

// 9. merge two objects immutably
const objA = { name: "Anisha", age: 25 }
const objB = { country: "Nepal", city: "Kathmandu" }
const mergedObj = { ...objA, ...objB }
console.log(mergedObj)

// 10. update a specific object in array of objects immutably (by id)
const users = [
  { id: 1, name: "Dipak", age: 25 },
  { id: 2, name: "Sita", age: 30 },
  { id: 3, name: "Hari", age: 28 }
];

const updatedUsers = users.map((user) => {
  if (user.id === 2) {
    return { ...user, age: 31 }
  } else {
    return user
  }
})
console.log(updatedUsers)