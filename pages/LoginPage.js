const { BasePage } = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.url = 'https://the-internet.herokuapp.com/login';
    
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('button[type="submit"]');
    this.logoutButton = page.getByRole('link', { name: 'Logout' });
    this.successMessage = page.locator('.flash.success');
    this.loginForm = page.locator('#login');
  }

  async navigate() {
    await this.page.goto(this.url);
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForSelector('#login', { timeout: 10000 });
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.page.waitForURL('**/secure', { timeout: 10000 });
  }

  async logout() {
    await this.logoutButton.click();
  }

  async isLoggedIn() {
    return await this.successMessage.isVisible();
  }

  async isLoginFormVisible() {
    return await this.loginForm.isVisible();
  }

  async getLoggedInUsername() {
    const text = await this.successMessage.textContent();
    return text?.includes('secure area!') ? 'tomsmith' : null;
  }
}

module.exports = { LoginPage };