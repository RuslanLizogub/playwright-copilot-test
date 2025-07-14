const { test, expect } = require('@playwright/test');
const HomePage = require('../../pages/HomePage');

test('Validate the first card-up element is visible', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await homePage.firstCardUp.waitFor({ state: 'visible' });
  await expect(homePage.firstCardUp).toBeVisible();
});

test('Validate the logo is visible', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await homePage.logo.waitFor({ state: 'visible' });
  await expect(homePage.logo).toBeVisible();
});

test('Validate the banner image is visible', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await homePage.bannerImage.waitFor({ state: 'visible' });
  await expect(homePage.bannerImage).toBeVisible();
});

test('Validate the footer text is correct', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await homePage.footerText.waitFor({ state: 'visible' });
  await expect(homePage.footerText).toHaveText('© 2013-2020 TOOLSQA.COM | ALL RIGHTS RESERVED.');
});