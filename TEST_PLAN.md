# Test Plan – RealWorld Medium Clone

This document outlines the testing strategy, scope, and coverage for the RealWorld frontend using Playwright and integration test tools.

## Scope

| Test Type      | Covered | Notes                                           |
|----------------|---------|-------------------------------------------------|
| Unit Tests     | No      | Out of scope — frontend unit tests assumed     |
| Integration    | Yes     | API contract and edge cases                     |
| UI/E2E         | Yes     | Full user journeys tested via Playwright       |
| Load/Perf      | No      | Not currently in scope                          |
| Security       | No      | Not currently in scope                          |

## UI/E2E Test Coverage

| Feature     | Test Cases                                 |
|-------------|---------------------------------------------|
| Auth        | Login, Signup, Logout                      |
| Articles    | Create, Edit, Delete, View                 |
| Navigation  | Header links, Routing, Nav visibility      |
| Settings    | Update profile, bio, image                 |
| Error flows | Invalid login, Unauthorized article access |

## Integration Test Coverage

| Endpoint           | Tests                                      |
|--------------------|--------------------------------------------|
| `POST /users/login`| Valid login, invalid password, bad payload |
| `GET /articles`    | Pagination, empty state, tag filtering     |
| `POST /articles`   | Valid create, missing fields, unauthorized |

## Test Data Strategy

- Static and dynamic test data managed in `libs/test-data`
- Reusable factories (e.g. `userFactory`, `articleFactory`)
- Page Objects in `libs/selectors` for clean E2E interaction
- Logged-in sessions handled via UI or token helper in `libs/utils`

## Tagging Convention

Tags can be used with Playwright's `.grep` filtering to group:

- `@smoke` for minimal core functionality
- `@regression` for full coverage
- `@integration` for non-UI API tests

## CI Integration

- GitHub Actions runs `nx run-many --target=test --all`
- CI is triggered on `push` and `pull_request` to `main`
- Playwright report uploaded on failure (optional)
