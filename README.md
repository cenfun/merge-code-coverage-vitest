# merge-code-coverage-vitest
Example for merging code coverage
- Unit test with [Vitest](https://github.com/vitest-dev/vitest) + [vitest-monocart-coverage](https://github.com/cenfun/vitest-monocart-coverage)
- E2E test with [Playwright](https://playwright.dev/) + [Sharding](https://playwright.dev/docs/test-sharding)
    - `npx playwright test --shard=1/2`
    - `npx playwright test --shard=2/2`
- [Merge Coverage](merge-coverage.js)

## Github Actions
- [.github/workflows/main.yml](.github/workflows/main.yml)

## Related Examples
- [Jest + Playwright](https://github.com/cenfun/merge-code-coverage)

## Preview V8 Coverage Reports
- unit: https://cenfun.github.io/merge-code-coverage-vitest/unit/
- e2e (merge-multiple): https://cenfun.github.io/merge-code-coverage-vitest/e2e/
- merged: https://cenfun.github.io/merge-code-coverage-vitest/merged/