const { test, expect } = require('@playwright/test');
const { HomePage } = require('../../pages/HomePage');

test.describe('DemoQA Homepage Tests', () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigate();
  });

  test('should load homepage successfully', async () => {
    await expect(homePage.page).toHaveTitle(/DEMOQA/);
  });

  test('should display main banner', async () => {
    const isBannerVisible = await homePage.isBannerVisible();
    expect(isBannerVisible).toBe(true);
  });

  test('should verify page is fully loaded', async () => {
    const isElementsVisible = await homePage.isElementsCardVisible();
    const isFormsVisible = await homePage.isFormsCardVisible();
    const isAlertsVisible = await homePage.isAlertsCardVisible();
    
    expect(isElementsVisible).toBe(true);
    expect(isFormsVisible).toBe(true);
    expect(isAlertsVisible).toBe(true);
  });

  test('should navigate to elements section', async () => {
    await homePage.clickElementsCard();
    await expect(homePage.page).toHaveURL(/.*elements/);
  });
});