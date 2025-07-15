class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('domcontentloaded');
  }

  async getTitle() {
    return await this.page.title();
  }

  async getUrl() {
    return this.page.url();
  }

  async takeScreenshot(name) {
    await this.page.screenshot({ path: `screenshots/${name}.png` });
  }

  async scrollToElement(locator) {
    await locator.scrollIntoViewIfNeeded();
  }

  async waitForElement(locator, options = {}) {
    await locator.waitFor({ state: 'visible', ...options });
  }

  async waitForElement(selector, timeout = 5000) {
    await this.page.waitForSelector(selector, { timeout });
  }

  async clickElement(selector) {
    await this.page.click(selector);
  }

  async getText(selector) {
    return await this.page.textContent(selector);
  }

  async isVisible(selector) {
    return await this.page.isVisible(selector);
  }

  async waitForLoadState(state = 'networkidle') {
    await this.page.waitForLoadState(state);
  }
}

module.exports = { BasePage };
