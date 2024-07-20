# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Getting Started

This project is a todo list website built using Vite and an API powered by Json live server. It provides a minimal setup to get React working with HMR (Hot Module Replacement) and some ESLint rules.

### Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

  ```shell
  git clone https://github.com/your-username/todo-web-portfolio.git
  ```

2. Navigate to the project directory:

  ```shell
  cd todo-web-portfolio
  ```

3. Install the dependencies:

  ```shell
  npm install
  ```

### Usage

1. Start the Json live server:

  ```shell
  npm run server
  ```

2. Start the development server:

  ```shell
  npm run dev
  ```

  This will start the development server and open the application in your default browser. Any changes you make to the code will automatically trigger a hot reload.

### ESLint Configuration

To expand the ESLint configuration for production applications, follow these steps:

1. Configure the top-level `parserOptions` property in your `vite.config.js` file:

  ```js
  export default {
    // other rules...
    parserOptions: {
     ecmaVersion: 'latest',
     sourceType: 'module',
     project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
     tsconfigRootDir: __dirname,
    },
  }
  ```

2. Replace `plugin:@typescript-eslint/recommended` with either `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`.

3. Optionally, add `plugin:@typescript-eslint/stylistic-type-checked` for additional stylistic type checking.

4. Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list.

### Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

### License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
