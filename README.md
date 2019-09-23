# next-ts-boilerplate [![CircleCI](https://circleci.com/gh/tvararu/next-ts-boilerplate.svg?style=svg)](https://circleci.com/gh/tvararu/next-ts-boilerplate)

This is a boilerplate project which uses:

- [Next.js](https://nextjs.org) as the frontend framework
- [Jest](https://jestjs.io) for unit testing
- [Cypress](https://cypress.io) for integration testing
- [CircleCI](https://circleci.com) and/or [GitHub Actions](https://github.com/features/actions) for continuous integration
- [Now](https://zeit.co/now/) for serverless continuous deployment
- [Now dev](https://zeit.co/blog/now-dev) for local development
- [Tailwind](https://tailwindcss.com) with [PurgeCSS](https://www.purgecss.com) as the CSS framework
- [TypeScript](https://www.typescriptlang.org) where possible

## Still to investigate

- [ ] Add caching to GitHub Actions so that it runs faster

## What to customise when cloning

- Update the [LICENSE.txt](LICENSE.txt)
- Update name, description, author, and repository in [package.json](package.json)
- Update name and alias in [now.json](now.json)
- Update title and description in [pages/\_app.tsx](pages/_app.tsx)
- Clean up the README, removing most of the stuff above

## Installation and usage

Install the required version of `node` using `nvm`:

```bash
nvm <.nvmrc
```

Install dependencies:

```bash
yarn
```

Run locally:

```bash
yarn now dev
open http://localhost:3000
```

Deploy:

```bash
yarn deploy
```

Run jest unit tests:

```bash
yarn jest
```

Run cypress end to end tests:

```bash
yarn cypress open # Interactive test runner
# or
yarn cypress run # Headless
```

## License

[MIT](LICENSE.txt).
