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

## 🔍 Project Structure
- `tests/ui/example.spec.js` — UI tests written in Playwright
- `pages/HomePage.js` — Page Object Model for the homepage
- `playwright.config.js` — Configuration for Playwright

## ⚙️ Commands
- `npm test` — Run all tests

## ✅ Example Test
The UI test navigates to https://demoqa.com and validates the visibility of elements.

## 🤖 Guidelines for Writing Tests
- Use Playwright best practices
- Prefer `getByRole()` and `getByText()` selectors over `locator()`
- Keep test code clean and focused on the test scenario