const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const LogoutPage = require('../../pages/LogoutPage');

test('Login, verify success, logout, and verify logout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const logoutPage = new LogoutPage(page);

  // Navigate to the login page
  await loginPage.navigate();

  // Perform login
  await loginPage.login();
  await expect(logoutPage.successMessage).toHaveText(/You logged into a secure area!/);

  // Perform logout
  await logoutPage.logout();
  await expect(logoutPage.successMessage).toHaveText(/You logged out of the secure area!/);
});