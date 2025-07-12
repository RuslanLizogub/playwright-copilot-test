const { test, expect } = require('@playwright/test');
const HomePage = require('../../pages/HomePage');

test('Validate the first card-up element is visible', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await homePage.waitForCardUp();
  await expect(homePage.firstCardUp).toBeVisible();
});

test('Validate the logo is visible', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await homePage.waitForLogo();
  await expect(homePage.logo).toBeVisible();
});

test('Validate the banner image is visible', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await homePage.waitForBannerImage();
  await expect(homePage.bannerImage).toBeVisible();
});

test('Validate the footer text is correct', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await homePage.waitForFooterText();
  await expect(homePage.footerText).toHaveText('© 2013-2020 TOOLSQA.COM | ALL RIGHTS RESERVED.');
});