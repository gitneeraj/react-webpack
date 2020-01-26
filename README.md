# React-Webpack

Starter kit app for react with webpack and babel

## Setup

1. Clone this repo to your local machine

```bash
git clone https://github.com/gitneeraj/react-webpack.git
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
