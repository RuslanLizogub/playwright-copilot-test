const { test, expect } = require('@playwright/test');

test('Validate the first card-up element is visible', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  const firstCardUp = page.locator('.card-up').first();
  await firstCardUp.waitFor({ state: 'visible' });
  await expect(firstCardUp).toBeVisible();
});

test('Validate the logo is visible', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  const logo = page.locator('img[src="/images/Toolsqa.jpg"]');
  await logo.waitFor({ state: 'visible' });
  await expect(logo).toBeVisible();
});

test('Validate the banner image is visible', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  const bannerImage = page.locator('img.banner-image');
  await bannerImage.waitFor({ state: 'visible' });
  await expect(bannerImage).toBeVisible();
});

test('Validate the footer text is correct', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  const footerText = page.locator('footer span');
  await footerText.waitFor({ state: 'visible' });
  await expect(footerText).toHaveText('© 2013-2020 TOOLSQA.COM | ALL RIGHTS RESERVED.');
});
