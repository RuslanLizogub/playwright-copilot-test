const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');

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
    await loginPage.login('testuser', 'Test@123');
    
    const isLoggedIn = await loginPage.isLoggedIn();
    expect(isLoggedIn).toBe(true);
    
    const username = await loginPage.getLoggedInUsername();
    expect(username).toBe('testuser');
  });

  test('should logout successfully', async () => {
    await loginPage.login('testuser', 'Test@123');
    await loginPage.logout();
    
    const isFormVisible = await loginPage.isLoginFormVisible();
    expect(isFormVisible).toBe(true);
  });
});