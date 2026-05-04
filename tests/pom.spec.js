const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/loginpage");
const { HomePage } = require("../pages/HomePage");
const { CartPage } = require("../pages/CartPage");




const testData = require('../testdata/testData.json');

test.describe("Data Driven", () => {

  testData.users.forEach((data) => {

    test(`Test for ${data.username}`, async ({ page }) => {

      // Login
      const login = new LoginPage(page);
      await login.gotoLoginPage();
      await login.login(data.username, data.password);
      await page.waitForTimeout(3000);

      // Homepage
      const home = new HomePage(page);
      await home.addProductToCart(data.product);
      await page.waitForTimeout(3000);
      await home.gotoCart();

      // Cart
      const cart = new CartPage(page);
      await page.waitForTimeout(10000);
      const status = await cart.checkProductInCart(data.product);

      expect(status).toBe(true);

    });

  });

});

// 🔥 What is POM (Page Object Model)?

// → POM is a design pattern where we separate:
//    1. Page elements (locators)
//    2. Page actions (methods)
//    3. Test logic

// → Instead of writing everything in test file,
//    we create separate class files for each page


// ============================================================
// 🔹 How POM Works
// ============================================================

// 1. Create Page Class (like LoginPage, HomePage)
//    → Store locators + methods

// 2. Create Test File
//    → Import page class
//    → Call methods

// 3. Flow:
//    Test → calls Page methods → methods perform actions


// ============================================================
// 🔹 Example Flow
// ============================================================

// test file
// const login = new LoginPage(page);
// await login.login("user", "pass");

// login page class
// login() → clicks login → fills data → submits


// ============================================================
// 🔹 Advantages of POM
// ============================================================

// ✔ Code Reusability
// → Same methods used in multiple tests

// ✔ Easy Maintenance
// → If locator changes, update only in one place

// ✔ Clean Code
// → Test file is simple and readable

// ✔ Less Duplication
// → No need to write same code again

// ✔ Better Structure
// → Large projects become organized


// ============================================================
// 🔹 Simple Understanding
// ============================================================

// 👉 Without POM:
// Test file = messy (locators + logic mixed)

// 👉 With POM:
// Page file = locators + actions
// Test file = only test steps


// ============================================================
// 🔹 Interview One Line
// ============================================================

// → POM is used to separate page logic from test logic
//   to make automation scalable, reusable, and maintainable
