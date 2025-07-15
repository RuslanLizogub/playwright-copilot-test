const { BasePage } = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.url = 'https://demoqa.com/login';
    
    this.usernameInput = page.locator('#userName');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login');
    this.logoutButton = page.locator('#submit');
    this.userNameValue = page.locator('#userName-value');
    this.profileWrapper = page.locator('.profile-wrapper');
    this.loginForm = page.locator('#userForm');
  }

  async navigate() {
    await this.page.goto(this.url);
    await this.waitForLoadState();
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async logout() {
    await this.logoutButton.click();
  }

  async isLoggedIn() {
    return await this.userNameValue.isVisible();
  }

  async isLoginFormVisible() {
    return await this.loginForm.isVisible();
  }

  async getLoggedInUsername() {
    return await this.userNameValue.textContent();
  }
}

module.exports = { LoginPage };