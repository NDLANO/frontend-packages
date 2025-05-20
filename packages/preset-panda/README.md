# @ndla/preset-panda

The styling solution used across all NDLA solutions, powered by and built upon [PandaCSS](https://pandacss.com)

## What this package is

PandaCSS is a compile-time styling solution powered by PostCSS. At its core it is framework-agnostic, but it also provides thin wrappers for popular JavaScript frameworks. We use the React wrapper. This package exports a preset for PandaCSS, allowing for developers aligned with NDLA to create components using a shared design language. Tokens are exported as plain css variables, and as a Panda preset.

## Installation

```sh
yarn add -D @ndla/preset-panda @pandacss/dev postcss

```

## Usage

This package can be consumed through panda or through plain css. Either way, add this to your css file.

```css
@layer reset, base, tokens, recipes, utilities;
```

### With Panda

Setup panda as you normally would, and add the NDLA preset.

```tsx
import preset from "@ndla/preset-panda";
export default defineConfig({
  presets: [preset],
});
```

### With plain css

```css
/* Probably need a css reset here as well */
@import "@ndla/preset-panda/dist/styles.css";
@import "@ndla/primitives/dist/styles.css";
@import "@ndla/icons/dist/styles.css";
@import "@ndla/ui/dist/styles.css";
@import "@ndla/safelink/dist/styles.css";

@layer reset, base, tokens, recipes, utilities;
```

## Plugin for forwarding css prop

This package also provides a special plugin that alters the styled system that panda exposes. You can read more about the behavioral changes it introduces [here](./src/plugins/README.md) If you use `@ndla/styled-system`, it is already enabled by default. If you only want to use the plugin, it can be added to any panda configuration by adding it to your plugins.

```tsx
import { forwardCssPropPlugin } from "@ndla/preset-panda";
export default defineConfig({
  plugins: [forwardCssPropPlugin],
});
```

## Guidelines

We strive to keep this package as lean as possible, as most other NDLA packages relies upon it, either directly or indirectly. As such, try to keep the `globalCss.ts` file as lean as possible. It is currently reserved for the following scenarios:

- Truly global css
  - Resets
  - Global font styling
  - Body styling
- Extremely large pieces of css
  - Article styling
  - Code block styling (for now).

### Semantic tokens

Always prefer using semantic tokens wherever possible. Values defined in [colors.ts](./src/colors.ts) and [spacing.ts](./src/spacing.ts) should only be used if absolutely necessary. If the current semantic tokens do not fit your needs, let us know.

### Style properties

Prefer properties with proper completion and type safety.

```tsx
const bad = css({
  border: "1px solid token(colors.stroke.default)",
});

const good = css({
  border: "1px solid",
  borderColor: "stroke.default",
});
```

Prefer style properties that are already used throughout the code base, and that can be easily overridden.

```tsx
// Can only be overridden with backgroundColor
const bad = css({
  backgroundColor: "surface.default",
});

// Can be overridden with both `background` and backgroundColor
const good = css({
  background: "surface.default",
});
```

There's a couple of exceptions to this rule, mostly to do with padding and margins. Read source code to get a grasp of how we use those properties :)

## Styling Justifications

### Shorthand vs longhand properties

We prefer using longhand properties wherever possible, and our code generation reflects this. We landed on using longhand properties to lower the cost of entry into the panda ecosystem. Diverging from default css is already a big ask for new developers. By maintaining the likeness with regular css (naming-wise), we hope to encourage developers to write css as they normally would, just camel-cased instead of kebab-cased :)

### Styling props

PandaCSS offers three styling options when using a framework wrapper: the `css` prop, a `styled-system` like approach, and simple class names. We landed on the `css` approach. Instead of explaining why we landed on this, let's instead explain why we avoid the `styled-system` approach

#### Vendor lock-in

The biggest disadvantage to using a styled-system approach is that a full rewrite becomes less feasible the more you invest into the Panda ecosystem. Let's compare the two approaches.

##### styled-system

```tsx
return <Box display="flex" gap="xsmall" alignItems="center" justifyContent="center" />;
```

##### Minimal (styled somewhere else)

```tsx
return <ListContainer />;
```

The latter example is much more independent from the actual styling solution, allowing for 1:1 rewrites without having to mess with the file history. Furthermore, we believe the latter to be more readable. See complex tailwind components for more horror stories.

#### Performance

The styled-system approach is extremely flexible, but also comes at a cost. According to [benchmarks](https://github.com/chakra-ui/panda/discussions/2604), that cost is about a 30% drop in performance. We did not want to compromise on that!

### Strict property values

This is a no-brainer. We want type safety wherever possible.

### Why not strictTokens?

Turning on strictTokens would allow us to enforce our design system to a much greater extent. In a nutshell, this option only allows tokens that are defined explicitly in `@ndla/preset-panda`. We felt this to be too restrictive. Defining every single css value we use is simply too much, and the escape hatch from this breaks autocomplete entirely.

### Preflight position

A preflight is more or less a css reset: A small set of css rules that evens out some styling considerations different browsers have decided to have as their defaults. We've chosen to only turn this on where packages are consumed, namely ndla-frontend and editorial-frontend. Enabling it in a package would force all consumers to use our styling reset. Furthermore, it could generate css that neither us nor the consumer actually needs. This is open to change, however. After all, we assume that our reset (or a similar reset) is used.
