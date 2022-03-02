<p align="center">
  <h1 align="center">React Starter Kit</h3>

  <p align="center">
    Starting place for react apps
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
- [Testing](#testing)
  - [Custom Test Renderer](#custom-test-renderer)
- [Storybook](#storybook)

<!-- ABOUT THE PROJECT -->

## About The Project

A starting point for react apps using vite

### Built With

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev)

<!-- GETTING STARTED -->

## Getting Started

Follow the instructures below to get setup for local development

1. Clone the repo

```sh
git clone https://github.com/vora/react-starter-kit.git
```

2. Install Dependencies

```sh
npm install
```

From here you can do a number of things. All of the commands should be prefaced with `npm run`:

| Command           | Description                                                 |
| ----------------- | ----------------------------------------------------------- |
| `dev`             | Start vite in development mode (on port 3000)               |
| `build`           | Run a production build                                      |
| `prettier`        | Run [prettier](https://prettier.io/) on the project         |
| `eslint`          | Run [eslint](https://eslint.org/) on the project            |
| `test`            | Run tests on the project with [vitest](https://vitest.dev/) |
| `storybook`       | Run Storybook (runs on port 6006)                           |
| `build-storybook` | Build Storybook for Production                              |

## Testing

This project is setup for snapshot testing with [vitest](https://vitest.dev/). Vitest is a test runner that is very similar to [Jest](https://jestjs.io/) but runs on Vite for much better performance. We use [happy-dom](https://github.com/capricorn86/happy-dom) alongside [React Test Renderer](https://reactjs.org/docs/test-renderer.html) to render the dom for these tests.

### Custom Test Renderer

This project ships with a custom test renderer. This test renderer is located at `src/lib/testHelpers/testRenderer.tsx`. You can specify any number of providers inside the implementation so you won't have to specify them when rendering each component. Refer to `src/pages/Home/components/HomeText/__tests__/HomeText.test.tsx` for a usage example.

## Storybook

This project comes with [Storybook](https://storybook.js.org/). Stories for storybook are located under `src/stories` by default. You can change this by editing `.storybook/main.ts`. Storybook also ships with support for custom decorators like a theme or Redux provider. You can find the configuration for that under `.storybook/preview.tsx`. Below are the commands for storybook. All commands are prefaced with `npm run`:

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `storybook`       | Run Storybook (runs on port 6006) |
| `build-storybook` | Build Storybook for Production    |
