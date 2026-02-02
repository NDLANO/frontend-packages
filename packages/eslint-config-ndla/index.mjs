/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// @ts-check

import eslint from "@eslint/js";
// @ts-expect-error - no typedefs
import pluginHeader from "eslint-plugin-header";
import importPlugin from "eslint-plugin-import";
// @ts-expect-error - no typedefs
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

// eslint 9 workaround
pluginHeader.rules.header.meta.schema = false;

export default tseslint.config(
  {
    ignores: ["**/es/**/*", "**/lib/**/*", "**/dist/**/*", "**/styled-system/**/*"],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx,mts,cts,mtsx,ctsx}"],
    settings: {
      react: {
        version: "detect",
      },
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    extends: [eslint.configs.recommended],
    rules: {
      "no-console": "warn",
      "array-callback-return": "warn",
      "default-case": "warn",
      eqeqeq: ["warn", "smart"],
      "no-self-compare": "warn",
      "no-sequences": "warn",
      "no-template-curly-in-string": "warn",
      "no-throw-literal": "warn",
      "no-unused-expressions": "error",
      "no-duplicate-imports": "error",
      "no-unused-vars": [
        "error",
        {
          caughtErrors: "none",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
          args: "all",
          ignoreRestSiblings: true,
        },
      ],
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "lodash",
              message: "Do not import lodash directly, use subpath imports instead.",
            },
          ],
          patterns: [
            "@ndla/*/lib/**",
            "@ndla/*/lib",
            "@ndla/*/es/**",
            "@ndla/*/es",
            "@ndla/*/src/**",
            "@ndla/*/src",
            "@ndla/*/build/*",
          ],
        },
      ],
    },
  },
  {
    extends: tseslint.configs.recommended,
    files: ["**/*.{ts,tsx,mts,cts,mtsx,ctsx}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-use-before-define": [
        "warn",
        {
          functions: false,
          classes: false,
          variables: false,
          typedefs: false,
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          caughtErrors: "none",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
          args: "all",
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  {
    extends: [reactPlugin.configs.flat?.recommended ?? {}, reactPlugin.configs.flat?.["jsx-runtime"] ?? {}].filter(
      Boolean,
    ),
    files: ["**/*.{jsx,tsx,mtsx,ctsx}"],
    plugins: {
      "react-hooks": hooksPlugin,
    },
    rules: {
      "react/display-name": "off",
      "react/prop-types": "off",
      "react/button-has-type": "error",
      "react/jsx-pascal-case": "warn",
      "react/style-prop-object": "warn",
      "react/forward-ref-uses-ref": "error",
      "react/jsx-no-leaked-render": "error",
      "react/jsx-no-useless-fragment": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
  jsxA11y.flatConfigs.recommended,
  {
    files: ["**/*.{jsx,tsx,mtsx,ctsx}"],
    ignores: [
      "**/*.stories.{js,mjs,cjs,ts,jsx,tsx,mts,cts,mtsx,ctsx}",
      "**/*-test.{js,mjs,cjs,ts,jsx,tsx,mts,cts,mtsx,ctsx}",
    ],
    plugins: {
      import: importPlugin,
    },
    rules: {
      "import/first": "error",
      // TODO: There's a perf issue with this rule. It's disabled until it's fixed.
      // "import/no-cycle": ["warn", { maxDepth: Infinity }],
      "import/no-anonymous-default-export": "error",
      // TODO: Replace this with the simple-import-sort plugin
      "import/no-extraneous-dependencies": "error",
    },
  },
  {
    plugins: {
      header: pluginHeader,
    },
    rules: {
      "header/header": [
        2,
        "block",
        [
          "*",
          {
            pattern: " * Copyright \\(c\\) \\d{4}-present, NDLA.",
            template: ` * Copyright (c) ${new Date().getFullYear()}-present, NDLA.`,
          },
          " *",
          " * This source code is licensed under the GPLv3 license found in the",
          " * LICENSE file in the root directory of this source tree.",
          " *",
          " ",
        ],
        2,
      ],
    },
  },
  {
    files: ["**/*.stories.{js,mjs,cjs,ts,jsx,tsx,mts,cts,mtsx,ctsx}"],
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
);
