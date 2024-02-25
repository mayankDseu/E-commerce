# Introduction

This is an ecommerec website made using MERN STACK, AND PAYMENT GATEWAY STRIPE,

 MERN Stack E-commerce App using Reactjs, Nodejs, Express, Mongodb, Redux Toolkit, RTK Query, and TypeScript.

This e-commerce app will allow you to shop for clothes, accessories, and home goods.

# Features 

1. Authorization by firebase and google sign in authentication.
2. Great and Responsive UI.
3. Two panel webapp one for User and another for admin
4. Lazy Loading for images
5. Secured Routes using React Router Dom

# User Features
1. user can look through the products
2. can add prodcuts in cart.
3. Product Listing
4. Product Details 
5. Shopping Cart Functionality
6. Check out page.

# Admin Features
1. look through the products and stocks
2. can see all orders
3. can change the status of the order

# Installation

1. clone the github repo : https://github.com/mayankDseu/E-commerce.git
2. do npm install
3. npm run dev
4. run the web app on http://localhost:8000


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
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
