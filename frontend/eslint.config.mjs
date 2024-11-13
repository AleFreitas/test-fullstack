import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {settings: {
    react: {
      version: 'detect', // Detecta automaticamente a versão do React
    },
  }},
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {ignores: ["node_modules", '**/*.config.js']},
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];