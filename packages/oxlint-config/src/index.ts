/**
 * Copyright (c) 2026-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { defineConfig } from "oxlint";

const template = `/**
 * Copyright (c) ${new Date().getFullYear()}-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

`;

const mustMatch =
  "^/\\*\\*\\n" +
  " \\* Copyright \\(c\\) [0-9]{0,4}-present, NDLA\\.\\n" +
  " \\*\\n" +
  " \\* This source code is licensed under the GPLv3 license found in the\\n" +
  " \\* LICENSE file in the root directory of this source tree\\.\\n" +
  " \\*\\n" +
  " \\*/";

export const baseConfig = defineConfig({
  plugins: ["eslint", "react", "import", "jsx-a11y", "typescript"],
  jsPlugins: [
    "eslint-plugin-notice",
    {
      name: "import-js",
      specifier: "eslint-plugin-import",
    },
    {
      name: "jsx-a11y-js",
      specifier: "eslint-plugin-jsx-a11y",
    },
  ],
  env: {
    builtin: true,
  },
  rules: {
    "no-misleading-character-class": "error",
    "no-prototype-builtins": "error",
    "no-unexpected-multiline": "error",
    "no-case-declarations": "error",
    "no-empty": "error",
    "no-regex-spaces": "error",
    "no-console": "warn",
    "array-callback-return": "warn",
    "default-case": "warn",
    eqeqeq: ["warn", "smart"],
    "no-self-compare": "warn",
    "no-template-curly-in-string": "warn",
    "no-throw-literal": "warn",
    "no-duplicate-imports": "error",
    "no-unused-vars": [
      "error",
      {
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
    "react/jsx-key": "error",
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-target-blank": "error",
    "react/jsx-no-undef": "error",
    "react/no-children-prop": "error",
    "react/no-danger-with-children": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-is-mounted": "error",
    "react/no-render-return-value": "error",
    "react/no-string-refs": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unknown-property": "error",
    "react/require-render-return": "error",
    "react/button-has-type": "error",
    "react/jsx-pascal-case": "warn",
    "react/style-prop-object": "warn",
    "react/forward-ref-uses-ref": "error",
    "react/jsx-no-useless-fragment": "error",
    "react/rules-of-hooks": "error",
    "react/exhaustive-deps": "error",
    "import/no-cycle": "off",
    "import/first": "error",
    "import/no-anonymous-default-export": "error",
    "jsx-a11y/alt-text": "error",
    "jsx-a11y/anchor-has-content": "error",
    "jsx-a11y/anchor-is-valid": "error",
    "jsx-a11y/aria-activedescendant-has-tabindex": "error",
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/aria-role": "error",
    "jsx-a11y/aria-unsupported-elements": "error",
    "jsx-a11y/click-events-have-key-events": "error",
    "jsx-a11y/heading-has-content": "error",
    "jsx-a11y/html-has-lang": "error",
    "jsx-a11y/iframe-has-title": "error",
    "jsx-a11y/img-redundant-alt": "error",
    "jsx-a11y/interactive-supports-focus": "error",
    "jsx-a11y/label-has-associated-control": "error",
    "jsx-a11y/media-has-caption": "error",
    "jsx-a11y/mouse-events-have-key-events": "error",
    "jsx-a11y/no-access-key": "error",
    "jsx-a11y/no-autofocus": "error",
    "jsx-a11y/no-distracting-elements": "error",
    "jsx-a11y/no-redundant-roles": "error",
    "jsx-a11y/no-noninteractive-tabindex": "error",
    "jsx-a11y/role-has-required-aria-props": "error",
    "jsx-a11y/role-supports-aria-props": "error",
    "jsx-a11y/scope": "error",
    "jsx-a11y/tabindex-no-positive": "error",
    "jsx-a11y/no-static-element-interactions": "error",
    "typescript/ban-ts-comment": "error",
    "typescript/no-duplicate-enum-values": "error",
    // This isn't enabled by default, but we used to disable it explicitly in typescript-eslint.
    "typescript/no-empty-object-type": "off",
    // This isn't enabled by default, but we used to disable it explicitly in typescript-eslint.
    "typescript/no-explicit-any": "off",
    "typescript/no-extra-non-null-assertion": "error",
    "typescript/no-misused-new": "error",
    "typescript/no-namespace": "error",
    "typescript/no-non-null-asserted-optional-chain": "error",
    "typescript/no-require-imports": "error",
    "typescript/no-this-alias": "error",
    "typescript/no-unnecessary-type-constraint": "error",
    "typescript/no-unsafe-declaration-merging": "error",
    "typescript/no-unsafe-function-type": "error",
    "typescript/no-wrapper-object-types": "error",
    "typescript/prefer-as-const": "error",
    "typescript/prefer-namespace-keyword": "error",
    "typescript/triple-slash-reference": "error",
    // TODO: This is a decent alternative to react/no-deprecated. It is currently unsupported by oxlint, but we should enable it once it is implemented.
    "typescript/no-deprecated": "warn",
    // consider turning these on later
    "typescript/no-floating-promises": "off",
    "typescript/no-redundant-type-constituents": "off",
    "typescript/restrict-template-expressions": "off",
    "typescript/no-base-to-string": "off",
    "typescript/no-use-before-define": [
      "warn",
      {
        functions: false,
        classes: false,
        variables: false,
        typedefs: false,
      },
    ],

    // js plugins
    "import-js/no-extraneous-dependencies": "error",
    "jsx-a11y-js/no-static-element-interactions": "error",
    "jsx-a11y-js/no-noninteractive-element-interactions": "error",
    "jsx-a11y-js/no-noninteractive-element-to-interactive-role": "error",
    "jsx-a11y-js/interactive-supports-focus": "error",
    "jsx-a11y-js/no-interactive-element-to-noninteractive-role": "error",
    "notice/notice": [
      "error",
      {
        mustMatch: mustMatch,
        template: template,
      },
    ],
  },
});

export default baseConfig;
