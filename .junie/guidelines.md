# RealWorld Test Automation Guidelines

This document provides essential information for developers working on the RealWorld test automation project.

## Build/Configuration Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/keithleffler/realworld-tests.git
   cd realworld-tests
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

### Configuration
- The project uses Nx for monorepo management
- E2E tests are configured in `apps/realworld-e2e/playwright.config.ts`
- API tests are configured in `apps/realworld-api-integration/test.config.ts`
- Base URLs:
  - UI tests: `https://demo.realworld.io/`
  - API tests: `https://api.realworld.io/api`

## Testing Information

### Running Tests

#### E2E Tests
```bash
# Run all E2E tests
npm run test:e2e

# Run E2E tests with Playwright UI
npm run test:e2e:ui
```

#### API Tests
```bash
# Run all API tests
npm run test:api

# Run API tests with Playwright UI
npm run test:api:ui
```

#### All Tests
```bash
# Run all tests (E2E and API)
npm run test
```

### Adding New Tests

#### E2E Tests
1. Create a new test file in `apps/realworld-e2e/tests/`
2. Import the Playwright test library:
   ```typescript
   import { test, expect } from '@playwright/test';
   ```
3. Use page selectors from `libs/selectors/` for UI elements
4. Use test data from `libs/test-data/` for consistent test data

Example:
```typescript
import { test, expect } from '@playwright/test';
import { loginPageSelectors } from '../../../libs/selectors/loginPage';
import { testUsers } from '../../../libs/test-data/userFactory';

test.describe('Login Feature', () => {
  test('should login with valid credentials', async ({ page }) => {
    await page.goto('/login');
    
    await page.fill(loginPageSelectors.emailInput, testUsers.validUser.email);
    await page.fill(loginPageSelectors.passwordInput, testUsers.validUser.password);
    await page.click(loginPageSelectors.signInButton);
    
    // Assertions
    await expect(page).toHaveURL('/');
  });
});
```

#### API Tests
1. Create a new test file in `apps/realworld-api-integration/tests/`
2. Import the Playwright test library:
   ```typescript
   import { test, expect } from '@playwright/test';
   ```
3. Use the `request` fixture for API calls
4. Use test data from `libs/test-data/` for consistent test data

Example:
```typescript
import { test, expect } from '@playwright/test';
import { testUsers } from '../../../libs/test-data/userFactory';

test.describe('Articles API', () => {
  test('should fetch articles', async ({ request }) => {
    const response = await request.get('/articles');
    
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toHaveProperty('articles');
  });
});
```

## Additional Development Information

### Project Structure
- The project follows the Nx monorepo structure as described in `ARCHITECTURE.md`
- Test code is organized by test type (E2E, API) in separate applications
- Shared code is in the `libs/` directory

### Code Style
- Use TypeScript for all test code
- Follow the Page Object Model pattern for UI tests
- Use descriptive test names that explain the behavior being tested
- Group related tests using `test.describe()`
- Use the `beforeEach` and `afterEach` hooks for setup and teardown

### Test Data Management
- Use the `userFactory.ts` for generating test users
- Use the `testUsers` object for predefined test users
- Create new factory files for other types of test data (articles, comments, etc.)

### Debugging Tests
- Use the UI mode for visual debugging:
  ```bash
  npm run test:e2e:ui
  ```
- Add `await page.pause()` in your test to pause execution at a specific point
- Use `console.log()` statements with the `[DEBUG_LOG]` prefix for logging

### CI Integration
- Tests run automatically on GitHub Actions for PRs and pushes to main
- The CI configuration is in `.github/workflows/`
