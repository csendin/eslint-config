# Caio Sendin ESLint Config

A powerful and flexible ESLint configuration designed for **Node.js**, **React**, and **Next.js** projects, ensuring high-quality and consistent code across your codebase.

## Table of Contents

- [What's Included?](#whats-included)
- [Installation & Setup](#installation--setup)
    - [React with Next.js](#react-with-nextjs)
    - [React](#react)
    - [Node.js](#nodejs)
- [Contributing](#contributing)

## What's Included?

This package offers a set of predefined ESLint configurations tailored for different environments:

- **Standard Config Base**: General rules that apply across various environments.
- **React Plugin**: Optimizes linting for React projects.
- **Prettier**: Integrates Prettier for consistent code formatting.

Note: The **React Hooks plugin** and other plugins are currently being updated to support the latest ESLint version. Please check back for updates.

## Installation & Setup

### React with Next.js

1. **Install dependencies:**

    ```bash
    npm i @csendin/eslint-config -D
    ```

2. **Configure ESLint**: Update your `eslint.config.mjs` file:

    ```js
    import config from '@csendin/eslint-config/next.mjs'

    /** @type {import('eslint').Linter.Config[]} */
    export default [...config]
    ```

### React

1. **Install dependencies:**

    ```bash
    npm i @csendin/eslint-config -D
    ```

2. **Configure ESLint**: Update your `eslint.config.mjs` file:

    ```js
    import config from '@csendin/eslint-config/react.mjs'

    /** @type {import('eslint').Linter.Config[]} */
    export default [...config]
    ```

### Node.js

1. **Install dependencies:**

    ```bash
    npm i @csendin/eslint-config -D
    ```

2. **Configure ESLint**: Update your `eslint.config.mjs` file:

    ```js
    import config from '@csendin/eslint-config/node.mjs'

    /** @type {import('eslint').Linter.Config[]} */
    export default [...config]
    ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have suggestions for improvements.
