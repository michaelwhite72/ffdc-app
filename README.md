# FFDC App

Native app in vuejs to use with [fusionfabric.cloud](https://www.fusionfabric.cloud) [api](https://developer.fusionfabric.cloud)

[Contact Author](mailto:pierre.quemard@finastra.com)

## Project setup

### Install

Make sure you have [nodejs](https://nodejs.org/en/) installed.

Load dependencies for the project
```
npm install
```

> You can also add vue/cli globally to develop in vue
> ```npm install -g @vue/cli```

### Configure

Set ```.env``` file

```bash
PORT=8000
CLIENT_ID=MyClient_ID
CLIENT_SECRET=MyClient_Secret
API_URL=
AUTH_URL=
TOKEN_URL=
```

## Compile project

Front-end:
```
npm run build
```

Back-end:
```
npm run build:server
```


## Test and run

Front-end:
```
npm run serve
```

Back-end:
```
npm run dev
```

## Misc

Lint and fix files
```
npm run lint
```

