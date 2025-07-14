# Playwright Test Template

## 📦 Installation
Install dependencies using npm:
```bash
npm install
```

## 🚀 Run Tests
Run all tests:
```bash
npm test
```

Run the login test:
```bash
npm run test:login
```

Run the example test:
```bash
npm run test:example
```

## 🔍 Project Structure
- `tests/ui/login.spec.js` — UI tests for login and logout functionality on [The Internet](https://the-internet.herokuapp.com/login)
- `tests/ui/example.spec.js` — UI tests for example functionality on [DemoQA](https://demoqa.com/)
- `pages/LoginPage.js` — Page Object Model for the login page
- `pages/LogoutPage.js` — Page Object Model for the logout page
- `data/loginData.json` — Test data for login credentials
- `playwright.config.js` — Configuration for Playwright

## 📊 Viewing Reports
After running tests, view the Playwright HTML report:
```bash
npx playwright show-report
```

## ⚙️ Commands
- `npm test` — Run all tests
- `npm run test:login` — Run the login test
- `npm run test:example` — Run the example test

## ✅ Example Tests
### Login Test
The login test navigates to [The Internet](https://the-internet.herokuapp.com/login), performs login, verifies success, performs logout, and verifies logout.

### Example Test
The example test navigates to [DemoQA](https://demoqa.com/), validates the visibility of elements such as cards, logo, and footer text.

## 🤖 Guidelines for Writing Tests
- Use Playwright best practices
- Prefer `getByRole()` and `getByText()` selectors over `locator()`
- Keep test code clean and focused on the test scenario
- Avoid unnecessary comments in test files
- Store test data in JSON files