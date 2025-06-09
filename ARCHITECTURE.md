# Architecture

This project is organized as an [Nx](https://nx.dev/) monorepo to separate concerns between test types, promote reuse, and scale modularly.

## Directory Overview

```
realworld-tests/
├── apps/
│   ├── realworld-e2e/                # E2E Playwright tests
│   └── realworld-api-integration/   # Optional: REST integration tests
├── libs/
│   ├── test-data/                    # Shared test data and builders
│   ├── selectors/                    # Page objects and locators
│   ├── utils/                        # Test utilities (e.g., login helpers)
│   └── types/                        # Shared TypeScript types
├── tools/                            # Scripts for local setup/testing
├── bruno/                            # API testing collection for Bruno
├── .github/workflows/               # CI with GitHub Actions
├── nx.json, package.json, etc.
```

## Project Layout Goals

- **Modularity:** Independent projects for E2E and integration tests
- **Reusability:** Common logic in `libs/` to reduce duplication
- **Scalability:** Supports growing test coverage without clutter
- **Isolation:** No test relies on another's state or order

## Tooling

- **Playwright + TypeScript:** Rich E2E test authoring with auto-waiting and debugging
- **Nx CLI:** Easy targeting of individual projects/tests
- **GitHub Actions:** CI/CD pipeline for every PR or push
- **Bruno:** For collaborative and exploratory API testing
