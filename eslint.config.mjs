import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import vitest from "eslint-plugin-vitest";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    rules: {
      "no-unused-vars": "warn",
    },
  },
  {
    files: ["tests/**"], // or any other pattern
    plugins: {
      vitest,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...vitest.configs.recommended.rules, // you can also use vitest.configs.all.rules to enable all rules
      "vitest/max-nested-describe": ["error", { max: 3 }], // you can also modify rules' behavior using option like this
    },
  },
];
