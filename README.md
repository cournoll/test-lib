## Web & cloud frontend commons

React library with common frontend features.

### Setup

Install dependencies:

```bash
npm i
```

### Documentation

[Typedoc](https://cournoll.github.io/test-lib/typedoc)

[Storybook](https://cournoll.github.io/test-lib/storybook)

### Build

To build the `dist` and `docs` version of your component:

```bash
npm run build
```

The build is done with [Rollup](https://github.com/rollup/rollup).
See `rollup.config.js` for the configuration.

### Test

```bash
npm t
```

Tests uses [Jest](https://github.com/facebook/jest).

### Run a local example

Install example dependencies:

```bash
npm run example:install
```

Start Rollup in watch mode:

```bash
npm start
```

In another console tab start example:

```bash
npm run example:start
```
