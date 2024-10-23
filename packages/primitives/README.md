# @ndla/primitives

A set of primitive components used throughout ndla packages and websites. Mostly styled versions of components from [ ark-ui ](https://ark-ui.com).

## Installation

```sh
yarn add @ndla/primitives
```

This package relies on our styled system, which can be consumed through PandaCSS or plain css. Read about setting it up in [@ndla/preset-panda](../preset-panda/README.md).

## Guidelines

### Primitives should be multi-use

A primitive should be multi-purpose and low-level enough to be composed any which way a user wishes to. If you're creating a one-off component or a component witha limited set of capabilities, consider if it makes more sense in a different package.

### Keep "global" dependencies to a minimum

We try not to impose any technological restrictions on consumers of the primitives; A consumer should for instance be able to choose their own translation or routing libraries.

### Variant usage in primitives

This section does not apply to `sva` usage, as variant overriding is simple there :)

Variants are a blessing and a curse. They provide a clean and structured way of presenting a set of predefined options to users. At the same time, they're a nightmare to override when restyling a primitive.

```tsx
const Button = styled("button", {
  base: {
    color: "text.default",
  },
  variants: {
    primary: {
      background: "suface.action",
      _hover: {
        background: "surface.action.hover",
      },
    },
    subtle: {
      background: "surface.actionSubtle",
      _hover: {
        background: "surface.actionSubtle.hover",
      },
    },
  },
});

// You get the idea
const StyledButton = styled(Button, {
  variants: {
    primary: {
      background: "stroke.default",
      _hover: {
        background: "stroke.default",
      },
    },
  },
});
```

Instead, define primitives with variants with the `cva` function. This allows us to invoke the `cva` function so we can merge the result with whatever value the restyled component has.

```tsx
const buttonRecipe = cva({
  base: {
    color: "text.default",
  },
  variants: {
    primary: {
      background: "suface.action",
      _hover: {
        background: "surface.action.hover",
      },
    },
    subtle: {
      background: "surface.actionSubtle",
      _hover: {
        background: "surface.actionSubtle.hover",
      },
    },
  },
});

// If you want it to support `asChild`
const StyledButton = styled(ark.button, {}, { baseComponent: true });

const Button = forwardRef<HTMLButtonElement, ComponentPropsWithRef<"button"> & RecipeVariantProps<typeof buttonRecipe>>(
  // You need to extract the css prop and any variant props
  ({ css: cssProp, variant, ...props }, ref) => {
    return <StyledButton css={css.raw(buttonRecipe.raw({ variant }), cssProp)} {...props} ref={ref} />;
  },
);

const RestyledButton = styled(Button, {
  base: {
    background: "stroke.default",
    _hover: "stroke.default",
  },
});
```

This leads to slightly more code, but more intuitive styling options for the consumer
