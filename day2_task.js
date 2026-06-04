
// Task 1 - this inside an object method

const user = {
  name: "Aashika",

  login() {
    console.log(`User Logged In: ${this.name}`)
  }
};

user.login()

// Task 2 - this losing context and fixing with bind()

const button = {
  text: "Submit",

  click() {
    console.log(`Button: ${this.text}`)
  }
};

const handleClick = button.click
const fixedClick = button.click.bind(button)
fixedClick()


// Task 3 - Config Module (simulated)

const API_BASE_URL =
  "https://api.example.com"

console.log("API URL:", API_BASE_URL)


// Task 4 - Utility Functions

function formatCurrency(amount) {
  return `$${amount}`
}

function generateRandomId() {
  return Math.floor(Math.random() * 10000)
}

function getTodayDate() {
  return new Date().toLocaleDateString()
}

console.log("Random ID:", generateRandomId())
console.log("Today's Date:", getTodayDate())


// Task 5 - Product Class

class Product {
  constructor(name, price) {
    this.name = name
    this.price = price
  }

  getInfo() {
    return `${this.name} costs ${formatCurrency(this.price)}`
  }
}

const laptop = new Product(
  "Laptop",
  1000
)

console.log(laptop.getInfo())


// Task 6 - Inheritance

class FoodProduct extends Product {
  constructor(name, price, expiryDate) {
    super(name, price)
    this.expiryDate = expiryDate
  }

  getExpiryInfo() {
    return `Expiry Date: ${this.expiryDate}`
  }
}

const milk = new FoodProduct(
  "Milk",
  3,
  "2026-07-15"
);

console.log(milk.getInfo())
console.log(milk.getExpiryInfo())


// Task 7 - Promise for App Settings

function fetchSettings() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        theme: "Dark",
        language: "English"
      })
    }, 2000)
  })
}

fetchSettings()
  .then(settings => {
    console.log("Settings:", settings)
  })


// Task 8 - Async/Await User Fetch

function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Aashika" },
        { id: 2, name: "Deena" }
      ])
    }, 1000)
  })
}


// Task 9 - Try/Catch Error Handling

function fetchUsersWithError() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      const success =
        Math.random() > 0.5

      if (success) {
        resolve([
          { id: 1, name: "Aashika" },
          { id: 2, name: "Deena" }
        ]);
      } else {
        reject("Server Error")
      }

    }, 1000)

  })
}


// Task 10 - Mini App Flow

async function startApp() {

  try {

    console.log("\n=== MINI APP STARTED ===")

    console.log("API:", API_BASE_URL)

    const settings =
      await fetchSettings()

    console.log("Settings:", settings)

    const users =
      await fetchUsers()

    console.log("Users:", users)

    const products = [
      new Product("Laptop", 1000),
      new Product("Mouse", 25),
      new FoodProduct(
        "Milk",
        3,
        "2026-07-15"
      )
    ];

    console.log("\nProducts:");

    products.forEach(product => {
      console.log(product.getInfo());
    });

    const randomUsers =
      await fetchUsersWithError()

    console.log(
      "Fetched Users:",
      randomUsers
    );

  } catch (error) {

    console.log(
      "Something went wrong:",
      error
    )

  }

}

startApp();