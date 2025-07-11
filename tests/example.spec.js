const { chromium } = require('@playwright/test');
const { expect } = require('chai');
const apiClient = require('../utils/apiClient');

describe('Example UI + API Test', function () {
  this.timeout(5000);

  it('should load page and validate title', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');
    const title = await page.title();
    expect(title).to.include('Example');
    await browser.close();
  });

  it('should make GET request to public API', async () => {
    const res = await apiClient.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('id', 1);
  });
});