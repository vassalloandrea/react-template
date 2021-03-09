# React with TS template

[![codecov](https://codecov.io/gh/vassalloandrea/react-template/branch/main/graph/badge.svg?token=FDMIA9PIGN)](https://codecov.io/gh/vassalloandrea/react-template)

This is the template that I usually use to create a new React project from scratch removing
the complex boilerplate added by other tools.
Feel free to contribute opening issue and/or making PRs ❤️

## Main technologies

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Jest](https://github.com/facebook/jest)
- [Cypress](https://www.cypress.io/)
- [ESlint](https://github.com/eslint/eslint)
- [Prettier](https://github.com/prettier/prettier)
- [CodeCov](https://about.codecov.io/)
- [WebVitals](https://web.dev/vitals/)

The project has a fully configured CI using GH actions.
Each PR or push on the main branch will trigger the CI that runs:

- The unit tests
- The E2E tests
- The ESlint linter
- The Prettier formatter

and push the Jest coverage on CodeCov.

## Basic development style

The application uses the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) for the component structure.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/)

```
git clone git@github.com:vassalloandrea/react-template.git
cd react-template
npm install
npm run start
```

Your app now is running on [localhost:8080](http://localhost:8080/).

## Run tests

This project uses Jest to run unit test and Cypress to run the E2E ones.

```
npm run test:unit
npm run test:e2e
```

## Run linter

This project uses ESlint and Prettier to check code style.

```
npm run lint
npm run format:check
```

You can use these commands to autofix code style issues

```
npm run lint:fix
npm run format:fix
```
