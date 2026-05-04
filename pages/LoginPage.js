exports.LoginPage = class LoginPage {

  constructor(page) {
    this.page = page;

    // Locators
    this.loginLink = "#login2";
    this.usernameInput = "#loginusername";
    this.passwordInput = "#loginpassword";
    this.loginButton = "//button[normalize-space()='Log in']";
  }

  // Navigate to login page
  async gotoLoginPage() {
    await this.page.goto('https://www.demoblaze.com/index.html');
  }

  // Perform login
  async login(username, password) {
    await this.page.locator(this.loginLink).click();
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
  }

};

