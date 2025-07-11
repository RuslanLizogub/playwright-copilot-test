# Playwright + Mocha + Chai + SuperAgent Template

## 📦 Установка
```bash
npm install
```

## 🚀 Запуск тестов
```bash
npm test
```

## 🔍 Структура
- `tests/` — UI и API тесты
- `utils/apiClient.js` — обёртка над SuperAgent
- `playwright.config.js` — конфигурация Playwright

## ⚙️ Команды
- `npm test` — запустить все тесты

## ✅ Пример
UI-тест открывает https://example.com и проверяет заголовок. API-тест проверяет JSONPlaceholder API.

## 🤖 GitHub Copilot рекомендации
- Используйте шаблоны describe/it
- Предлагайте шаги сценариев ("open page", "click button")
- Просите сгенерировать `page.locator(...)` или `expect(...)`