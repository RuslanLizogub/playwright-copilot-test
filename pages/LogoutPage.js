const BasePage = require('./BasePage');

class LogoutPage extends BasePage {
  constructor(page) {
    super(page);
    this.logoutButton = page.getByRole('link', { name: 'Logout' });
    this.successMessage = page.locator('#flash');
    this.secureAreaHeader = page.getByRole('heading', { name: 'Secure Area', exact: true });
  }

  async logout() {
    await this.waitForElement(this.logoutButton);
    await this.logoutButton.click();
  }

  async getSuccessMessage() {
    await this.waitForElement(this.successMessage);
    return await this.successMessage.textContent();
  }

  async isSecureAreaVisible() {
    return await this.secureAreaHeader.isVisible();
  }
}

module.exports = LogoutPage;