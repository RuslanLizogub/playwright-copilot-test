class LogoutPage {
  constructor(page) {
    this.page = page;
    this.logoutButton = page.locator('a[href="/logout"]');
    this.successMessage = page.locator('#flash');
  }

  async logout() {
    await this.logoutButton.click();
  }
}

module.exports = LogoutPage;