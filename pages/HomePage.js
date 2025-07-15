const { BasePage } = require('./BasePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.url = 'https://demoqa.com/';
    
    this.elementsCard = page.locator('.card-body').filter({ hasText: 'Elements' });
    this.formsCard = page.locator('.card-body').filter({ hasText: 'Forms' });
    this.alertsCard = page.locator('.card-body').filter({ hasText: 'Alerts, Frame & Windows' });
    this.widgetsCard = page.locator('.card-body').filter({ hasText: 'Widgets' });
    this.interactionsCard = page.locator('.card-body').filter({ hasText: 'Interactions' });
    this.bookStoreCard = page.locator('.card-body').filter({ hasText: 'Book Store Application' });
    this.banner = page.locator('.banner-image');
  }

  async navigate() {
    await this.page.goto(this.url);
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForSelector('.card-body', { timeout: 10000 });
  }

  async clickElementsCard() {
    await this.elementsCard.click();
  }

  async isElementsCardVisible() {
    return await this.elementsCard.isVisible();
  }

  async isFormsCardVisible() {
    return await this.formsCard.isVisible();
  }

  async isAlertsCardVisible() {
    return await this.alertsCard.isVisible();
  }

  async isBannerVisible() {
    return await this.banner.isVisible();
  }
}

module.exports = { HomePage };