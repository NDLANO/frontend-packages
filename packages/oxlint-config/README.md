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
  // if you want type aware linting
  options: {
    typeAware: true,
  },
});
```

### Setup

#### Neovim

Use the following configuration when setting up the language server

```lua
{
    settings = {
        fixKind = "all",
    },
}

```

#### VSCode

Add this to your `settings.json`:

```json
{
  "oxc.fixKind": "all"
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
          "fixKind": "all"
        }
      }
    }
  }
}
```
