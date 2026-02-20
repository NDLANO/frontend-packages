# @ndla/oxlint-config

An opinionated OXLint config for NDLA projects.

## Installing

```bash
yarn add --D @ndla/oxlint-config oxlint
```

If you want to use type-aware linting, you also need to install tsgolint

```bash
yarn add --D oxlint-tsgolint
```

## Usage

### Configs

Prefer `oxlint.config.ts` wherever possible.

Example:

```typescript
import { defineConfig } from "oxlint";
import baseConfig from "@ndla/oxlint-config";

export default defineConfig({
  extends: [baseConfig],
});
```

### Setup

#### Neovim

Use the following configuration when setting up the language server

```lua
{
    cmd = { "./node_modules/.bin/oxlint", "--lsp" }, -- Mason doesn't have an up-to-date version of oxlint, so we use the locally installed one.
        root_markers = { ".oxlintrc.json", "oxlint.config.ts" }, -- nvim-lspconfig doesn't support oxlint.config.ts as a root marker yet
        settings = {
            fixKind = "all",
            typeAware = "true",
        },
}

```

#### VSCode

Add this to your `settings.json`:

```json
{
  "oxc.fixKind": "all",
  "oxc.typeAware": true
}
```

#### Zed

Add this to your `settings.json`:

```json
{
  "lsp": {
    "oxlint": {
      "initialization_options": {
        "settings": {
          "fixKind": "all",
          "typeAware": true
        }
      }
    }
  }
}
```
