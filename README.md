# 🎭 Playwright Test Automation Framework

Modern framework for automated web application testing using Playwright, following development best practices.

## 📋 Table of Contents

- [Features](#-features)
- [Requirements](#-requirements)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Running Tests](#-running-tests)
- [Project Structure](#-project-structure)
- [Page Object Model](#-page-object-model)
- [Test Data](#-test-data)
- [Reports](#-reports)
- [CI/CD](#-cicd)
- [Best Practices](#-best-practices)

## 🚀 Features

- ✅ Multiple browser support (Chromium, Firefox, WebKit)
- ✅ Parallel test execution
- ✅ Page Object Model pattern
- ✅ ESLint for code quality control
- ✅ HTML/JUnit/JSON reports
- ✅ Screenshots and videos on failures
- ✅ GitHub Actions CI/CD
- ✅ Mobile testing
- ✅ Execution tracing

## 📋 Requirements

- Node.js 16+ 
- npm or yarn
- Git

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd playwright-copilot-test
```

2. Install dependencies:
```bash
npm install
```

3. Install browsers:
```bash
npx playwright install
```

4. Copy environment variables file:
```bash
cp .env.example .env
```

## ⚙️ Configuration

### Main Configuration
Main settings are in `playwright.config.js`:
- Browsers and devices
- Timeouts and retries
- Reports and artifacts
- Environment variables

### Environment Variables
Configure variables in `.env` file:
```env
BASE_URL=https://demoqa.com
CI=false
HEADLESS=false
BROWSER=chromium
```

## 🚀 Running Tests

### Basic Commands

```bash
# Run all tests
npm test

# Run with UI mode
npm run test:ui

# Run in headed mode
npm run test:headed

# Run specific test
npm run test:login
npm run test:example

# Run by browsers
npm run test:chromium
npm run test:firefox
npm run test:webkit
npm run test:mobile

# Code linting
npm run lint
npm run lint:fix

# CI/CD run
npm run test:ci
```

### Additional Options

```bash
# Run in debug mode
npx playwright test --debug

# Run with specific project
npx playwright test --project=chromium

# Run with specific file
npx playwright test tests/ui/login.spec.js

# Generate test code
npx playwright codegen
```

## 📁 Project Structure

```
├── .github/workflows/     # GitHub Actions
├── data/                  # Test data
│   └── loginData.json
├── pages/                 # Page Object Models
│   ├── BasePage.js
│   ├── HomePage.js
│   ├── LoginPage.js
│   └── LogoutPage.js
├── tests/                 # Test scenarios
│   └── ui/
│       ├── example.spec.js
│       └── login.spec.js
├── playwright.config.js   # Playwright configuration
├── .eslintrc.js          # ESLint configuration
└── README.md             # Documentation
```

## 🏗️ Page Object Model

### BasePage
Base class for all pages with common methods:
```javascript
const BasePage = require('./BasePage');

class MyPage extends BasePage {
  constructor(page) {
    super(page);
    // your locators
  }
}
```

### Locators
Use semantic locators:
```javascript
// ✅ Good
page.getByRole('button', { name: 'Login' })
page.getByLabel('Username')
page.getByText('Welcome')

// ❌ Avoid
page.locator('#submit-btn')
page.locator('.username-input')
```

## 📊 Test Data

Test data is organized in JSON files in the `data/` folder:

```json
{
  "validUser": {
    "username": "tomsmith",
    "password": "SuperSecretPassword!"
  },
  "invalidUser": {
    "username": "invaliduser",
    "password": "wrongpassword"
  }
}
```

## 📈 Reports

### HTML Reports
```bash
# View report
npm run report
# or
npx playwright show-report
```

### Report Types
- **HTML**: Interactive report with details
- **JUnit**: For CI/CD integration
- **JSON**: For custom processing

### Artifacts
- Screenshots on failures
- Videos of failed tests
- Execution traces

## 🔄 CI/CD

### GitHub Actions
Automatic test execution on:
- Push to main/develop branches
- Pull Request to main branch

### Matrix Strategy
Tests run in parallel on:
- Chromium
- Firefox  
- WebKit

### Artifacts
- Test reports
- Screenshots/videos
- Linting results

## 💡 Best Practices

### Writing Tests
- Use `test.describe()` for grouping
- Apply `test.beforeEach()` for setup
- Write descriptive test names
- Avoid brittle locators

### Page Objects
- Inherit from BasePage
- Use semantic locators
- Group related functionality
- Add validation methods

### Expectations
```javascript
// ✅ Web-first assertions
await expect(page.getByText('Success')).toBeVisible();

// ❌ Avoid
await page.waitForTimeout(1000);
```

### Test Data
- Store in separate JSON files
- Use factories for data generation
- Isolate test data between tests

## 🧪 Debugging

### Debug Mode
```bash
# Step-by-step debugging
npx playwright test --debug

# Slow execution
npx playwright test --headed --slowMo=1000
```

### Tracing
```bash
# Enable tracing
npx playwright test --trace=on
```

### Screenshots
```javascript
// In test
await page.screenshot({ path: 'debug.png' });

// In Page Object
await this.takeScreenshot('login-page');
```

## 📚 Useful Links

- [Playwright Documentation](https://playwright.dev/)
- [Best Practices Guide](https://playwright.dev/docs/best-practices)
- [API Reference](https://playwright.dev/docs/api/class-playwright)
- [GitHub Actions](https://docs.github.com/en/actions)

## 📞 Support

If you have questions or suggestions:
- Create an Issue in the repository
- Contact the development team
- Check Playwright documentation

---

**License:** ISC  
**Author:** QA Team  
**Version:** 1.0.0
