const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const loginData = require('../../data/loginData.json');

test.describe('Login Tests', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('should display login form', async () => {
    const isFormVisible = await loginPage.isLoginFormVisible();
    expect(isFormVisible).toBe(true);
  });

  test('should login with valid credentials', async () => {
    await loginPage.login(loginData.validUser.username, loginData.validUser.password);
    
    const isLoggedIn = await loginPage.isLoggedIn();
    expect(isLoggedIn).toBe(true);
    
    const username = await loginPage.getLoggedInUsername();
    expect(username).toBe(loginData.validUser.username);
  });

  test('should logout successfully', async () => {
    await loginPage.login(loginData.validUser.username, loginData.validUser.password);
    await loginPage.logout();
    
    const isFormVisible = await loginPage.isLoginFormVisible();
    expect(isFormVisible).toBe(true);
  });
});