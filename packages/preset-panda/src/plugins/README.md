# panda-forward-css-prop-plugin

A plugin for ensuring that the panda css prop is always merged when a component is `asChild`-ed or re-styled.

## Installation

```sh
yarn add -D @ndla/preset-panda @pandacss/dev postcss
```

## Usage

Add the plugin to your panda config and regenerate the styled-system

```tsx
import { forwardCssPropPlugin } from "@ndla/preset-panda";
export default defineConfig({
  plugins: [forwardCssPropPlugin],
});
```

## How PandaCSS works

In my mind, PandaCSS (henceforth referred to as Panda) consists of several parts, or phases. They claim to be a compile-time css solution (like tailwind), but that's not entirely true. PandaCSS consists of a compile-time step and a runtime step.

### Compile time

PandaCSS builds upon PostCSS and ts-morph to traverse through your project to look for every instance of styling in your project. Depending on your setup, this could include the `css` prop, `css` and `styled` invocations and styled-system props (`<Box display="flex" />`). When your entire project has been traversed, all style rules are compiled into css classes. By default, Panda uses a similar naming scheme to Tailwind; `display: "flex"` will generate a css class named `d_flex`. Finally, Panda spits out all project styles into `styles.css` (or similar)

### Runtime

Everything in panda is essentially an abstraction on top of the `css` function. This function takes in a set of styles, which are then converted into a list of classes that is applied as the component class name.

```tsx
import { css } from "@ndla/styled-system";

// Turns into something like `d_flex gap_xsmall ai_center`
const test = css({
  display: "flex",
  gap: "xsmall",
  alignItems: "center",
});
```

#### Runtime merging of css

Panda has a limited and, in my opinion, weird set of rules when it comes to merging styles. Take this example from styled-components:

```tsx
const Container = styled.div`
  display: flex;
`;

const RestyledContainer = styled(Container)`
  display: block;
`;
```

You'd expect RestyledContainer to have two classnames, with the one from `RestyledContainer` being applied last. This is not the case in panda.

```tsx
const Container = styled("div", {
  base: {
    display: "flex",
  },
});

const RestyledContainer = styled(Container, {
  base: {
    display: "block",
  },
});
```

Panda merges the two styles, and only outputs `d_block` as the class name. As a matter of fact, it actually relies on this logic to ensure that the proper styles are applied. Panda does not guarantee that the "last" style that is applied is the one that is actually applied in the browser. This is due to the way the panda extractor works. It has no concept of specificity relative to the component usage. If the component had the class name `d_flex d_block`, the class that appears latest in `styles.css` wins. This is unfortunate. Luckily, panda merges style attributes to avoid this.

#### How runtime merging works

The easiest way of merging two style objects in panda is by simply using the css function.

```tsx
// The raw function is more or less an identity function backed by a cache. It returns whatever you give it.
const obj1 = css.raw({
  display: "flex",
  gap: "xsmall",
});

const obj2 = css.raw({
  display: "grid",
  padding: "xsmall",
});

// outputs `d_grid gap_xsmall p_xsmall`
const merged = css(obj1, obj2);
```

The styled components function is slightly more complicated. When creating a styled component, panda stores a bunch of metadata on the created component. Without going into detail, you can imagine that every styled component has the `__base__` and `__cva__` attributes, containing whatever you pass to as the first and second arguments, respectively.

```tsx
const Container = styled("div", {
  base: {
    display: "flex",
  },
});

const StyledContainer = styled(Container, {
  base: {
    display: "block",
  },
});

//Pretty much turns into this

Container.__base__ = "div";

Container.__cva__ = {
  base: {
    display: "flex",
  },
};

StyledContainer.__base__ = Container;

StyledContainer.__cva__ = {
  base: {
    display: "block",
  },
};
```

Panda does a naive check here. If the component you pass into the `styled` function has a `__cva__` attribute, it automatically merges the two `__cva__` attributes.

This works great! Sometimes. However, style merging quickly falls apart when you move onto more complex component compositions. What if you need to wrap your styled component with another component?

```tsx
const Text = ({ children, css: cssProp, ...rest }: HTMLArkProps<"div"> & JsxStyleProps) => {
  return (
    <styled.p className={css({ textStyle: "heading.large", display: "block" }, cssProp)} {...rest}>
      {children}
    </styled.p>
  );
};

// Turns into `textStyle_heading\.large d_block textStyle_heading\.small`

const StyledText = styled(Text, {
  base: {
    textStyle: "heading.small",
  },
});
```

Panda doesn't know That the `Text` component is actually a styled component, and therefore doesn't merge the two style objects. What about the `asChild` prop that `radix-ui` popularized?

```tsx
return (
  <DialogTrigger asChild>
    <Button>Hello</Button>
  </DialogTrigger>
);
```

Again, panda doesn't have a clue as to how these two objects should be merged.

#### How this plugin solves merging

By default, panda automatically converts the content in `__cva__` into a class name when a styled component is invoked

```tsx
// This converts {display: "flex"} into d_flex
return <Container />;
```

This plugins inverts this. By default, `__cva__` content is only converted to a class name when a set of criterion are fulfilled.

##### String components

The simplest criterion is when you pass in a string component to the styled function (`styled("div")`. Panda already handles this case, so we don't need to do anything to support it.

##### Re-styled string components

We use the same reasoning as panda when figuring out whether the first argument to the styled function is a styled component, namely the `__base__` attribute. As such, this is totally fine

```tsx
const Container = styled("div", {
  base: {
    display: "flex",
  },
});

const StyledContainer = styled(Container, {
  base: {
    display: "block",
  },
});

const StyledStyledStyledContainer = styled(StyledContainer, {
  base: {
    display: "inline",
  },
});
```

##### consumeCss

The `consumeCss` prop forces panda to convert the css object to a class name string. This mostly covers cases when you use `asChild` to merge a styled component with an underlying component that does not suppport Panda.

```tsx
const Container = styled("div", {
  base: {
    display: "flex",
  },
});

return (
  <Container asChild consumeCss>
    {/* This receives `className="d_flex"` as a prop */}
    <div>Hello</div>
  </Container>
);
```

##### Complex components.

This is the most important concept to understand about how this plugin approaches css merging and forwarding. By default, we assume that anything you pass to the styled function that is _not_ a string explicitly supports panda. However, this does not always hold true. What if you want to style an external component, or an `asChild` factory like the one [ark](https://ark-ui.com) exports?

To solve this, we've introduced the `baseComponent` option.

```tsx
const Container = styled(
  ark.div,
  {
    base: {
      display: "flex",
    },
  },
  { baseComponent: true },
);
```

By providing the `baseComponent` option, panda more or less considers this component to be a string component. If you render the component normally, the `__cva__` property is automatically converted to a string. If you `asChild` the component, the css prop is forwarded to the child. If you're `asChild`-ing onto a non-panda component, you have to include the `consumeCss` prop.

```tsx
return (
  <Container asChild consumeCss>
    <div>Hello</div>
  </Container>
);
```

For the most part, you do not need to think about using the `baseComponent` option when developing. It's mostly relevant when you're creating primitives that builds upon external libraries.
