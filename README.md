# MyADHDReader

My ADHD Reader is a browser extension for Chrome and Firefox that manipulates website text so that it is easier for users with ADHD to consume the content. The extension replaces text sections with modified text that includes increased font size, letter spacing and line spacing as well as random bold text to held hold attention.

Currently, only Wikipedia pages are targeted (only tested on Wikipedia so far) but more flexibility will be added in the future.

<img width="778" alt="Before" src="https://github.com/mattkloz/MyADHDReader/assets/12042150/1bd91e95-92a3-4fa1-8fed-ff4077505098">
### Before

<img width="778" alt="After" src="https://github.com/mattkloz/MyADHDReader/assets/12042150/7a98c8d9-5b28-47ef-ae3a-c69b441c7161">
### After



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

- Navigate to `Chrome > Preferences > Extensions`
- Click 'Load Unpacked' at the top
- Navigate to the `dist > bex` folder in the MyADHDViewed directory
