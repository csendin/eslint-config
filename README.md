# Caio Sendin ESLint Config

A powerful and flexible ESLint configuration designed for **Node.js**, **React**, and **Next.js** projects, ensuring high-quality and consistent code across your codebase.

## 📝 Table of Contents

- [What's Included?](#whats-included)
- [Installation & Setup](#installation--setup)
    - [React with Next.js](#react-with-nextjs)
    - [React](#react)
    - [Node.js](#nodejs)
- [Contributing](#contributing)

## 🚀 What's Included?

This package offers a set of predefined ESLint configurations tailored for different environments:

- **Standard Config Base**: General rules that apply across various environments.
- **React Plugin**: Optimizes linting for React projects.
- **React Hooks Plugin**: Ensures correct usage of React Hooks.
- **JSX a11y Plugin**: Encourages accessibility best practices in JSX code.
- **Prettier**: Integrates Prettier for consistent code formatting.

## 💻 Installation & Setup

### 🔥 React with Next.js

1. **Install dependencies:**

    ```bash
    npm i @csendin/eslint-config -D
    ```

2. **Configure ESLint**: Update your `.eslintrc.json` file:

    ```json
    {
        "extends": [
            "@csendin/eslint-config/next",
            "next/core-web-vitals"
        ]
    }
    ```

### ⚛️ React

1. **Install dependencies:**

    ```bash
    npm i @csendin/eslint-config -D
    ```

2. **Configure ESLint**: Update your `.eslintrc.json` file:

    ```json
    {
        "extends": ["@csendin/eslint-config/react"]
    }
    ```

### 🖥️ Node.js

1. **Install dependencies:**

    ```bash
    npm i @csendin/eslint-config -D
    ```

2. **Configure ESLint**: Update your `.eslintrc.json` file:

    ```json
    {
        "extends": ["@csendin/eslint-config/node"]
    }
    ```

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have suggestions for improvements.
