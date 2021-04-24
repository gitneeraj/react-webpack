# React-Webpack

Starter kit app for react with webpack and babel

## Setup

1. Get the repo

```bash
npx degit gitneeraj/react-webpack react-webpack
```

2. Change directory to newly cloned repo directory

```bash
cd react-webpack
```

3. Run setup command to install all required npm packages

```bash
npm i
```

## Scripts

| `npm run` | Description      |
| :-------- | :--------------- |
| `start`   | Start dev server |
| `build`   | Build for prod   |
| `test`    | Run tests        |

## Editor configs

### Visual Studio Code

Create .vscode/settings.json in root dir

Add following in .vscode/settings.json

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": { "source.fixAll.eslint": true }
}
```

Also install ESLint plugin in VSCode for better linting errors/warns.
