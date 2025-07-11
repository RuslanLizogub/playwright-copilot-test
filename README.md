# Playwright + Mocha + Chai + SuperAgent Template

## 📦 Installation
```bash
npm install
```

## 🚀 Run Tests
```bash
npm test
```

## 🔍 Structure
- `example.spec.js` — UI and API tests
- `apiClient.js` — wrapper for SuperAgent
- `playwright.config.js` — Playwright configuration

## ⚙️ Commands
- `npm test` — run all tests

## ✅ Example
The UI test opens https://example.com and checks the title. The API test verifies the JSONPlaceholder API.

## 🤖 GitHub Copilot Recommendations
- Use `describe`/`it` templates
- Suggest test steps ("open page", "click button")
- Request generation of `page.locator(...)` or `expect(...)`