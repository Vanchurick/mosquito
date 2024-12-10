import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: { "react-hooks": pluginReactHooks },
    rules: {
      "no-console": "warn",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react-hooks/exhaustive-deps": process.env.NODE_ENV !== 'production' ? 'warn' : 'off',
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
];
