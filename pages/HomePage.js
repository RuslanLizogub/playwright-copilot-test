class HomePage {
  constructor(page) {
    this.page = page;
    this.firstCardUp = page.locator('.card-up').first();
    this.logo = page.locator('img[src="/images/Toolsqa.jpg"]');
    this.bannerImage = page.locator('img.banner-image');
    this.footerText = page.locator('footer span');
  }

  async navigate() {
    await this.page.goto('https://demoqa.com/');
  }
}

module.exports = HomePage;