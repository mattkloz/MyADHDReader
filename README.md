# MyADHDReader

My ADHD Reader is a browser extension for Chrome and Firefox that manipulates website text so that it is easier for users with ADHD to consume the content. The extension replaces text sections with modified text that includes increased font size, letter spacing and line spacing as well as random bold text to held hold attention.

Currently, only Wikipedia pages are targeted (only tested on Wikipedia so far) but more flexibility will be added in the future.

---

## Install the dependencies

```bash
yarn
# or
npm install
```

## Start the app in development mode

```bash
yarn start
```

## Lint the files

```bash
yarn lint
# or
npm run lint
```

## Format the files

```bash
yarn format
# or
npm run format
```

## Build the app for production

```bash
yarn build
```

## Add the extension to Chrome or Firefox

### _Build the project first_

- Navigate to Chrome > Preferences > Extensions
- Click 'Load Unpacked' at the top
- Navigate to the dist > bex folder in the MyADHDViewed directory
