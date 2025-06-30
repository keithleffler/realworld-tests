# RealWorld Test Automation Portfolio

This repository demonstrates end-to-end (E2E) and integration testing of the open-source [RealWorld Medium Clone](https://github.com/gothinkster/react-redux-realworld-example-app) using [Playwright](https://playwright.dev/) in a modular [Nx monorepo](https://nx.dev/).

## Purpose

This project was created to showcase advanced test automation practices including:

- UI/E2E testing with Playwright
- Integration/API testing
- Monorepo architecture with Nx
- Test data management
- GitHub Actions CI integration
- Bruno API testing collection for exploratory testing

## Tech Stack

- [Nx](https://nx.dev/) – Monorepo management
- [Playwright](https://playwright.dev/) – E2E browser testing
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/) (optional for API/integration tests)
- GitHub Actions – CI pipeline
- [Bruno](https://www.usebruno.com/) – API testing and collaboration

## Getting Started

```bash
git clone https://github.com/<yourname>/realworld-tests.git
cd realworld-tests
npm install

# Start RealWorld app (separately or via script)
npm run start:realworld

# Run E2E tests
npx nx run realworld-e2e:test
```

## Project Structure

See [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed layout and rationale.

## Test Strategy

See [TEST_PLAN.md](./TEST_PLAN.md) for coverage goals, test design, and tagging strategy.

## API Collection

This project includes a [Bruno](https://www.usebruno.com/) API testing collection in the `./bruno` directory. It is intended for exploratory and manual API testing against the RealWorld backend.
