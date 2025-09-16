/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type ReactNode, forwardRef } from "react";
import { type HTMLArkProps, ark } from "@ark-ui/react";
import { render } from "@testing-library/react";
import { css, sva } from "@ndla/styled-system/css";
import { createStyleContext, styled } from "@ndla/styled-system/jsx";
import type { StyledProps } from "@ndla/styled-system/types";

const svaA = sva({
  slots: ["root", "child"],
  base: {
    root: {
      display: "flex",
    },
    child: {
      display: "block",
    },
  },
});

const svaB = sva({
  slots: ["root", "child"],
  base: {
    root: {
      display: "inline",
    },
  },
});

interface MockContextProps {
  children: ReactNode;
}

const MockContext = ({ children }: MockContextProps) => {
  return children;
};

describe("createStyleContext", () => {
  test("should have a sane default", () => {
    const { withProvider, withContext, withRootProvider } = createStyleContext(svaA);

    const RootProviderRoot = withRootProvider(MockContext);

    const ProviderRoot = withProvider(ark.div, "root", { baseComponent: true });
    const ContextRoot = withContext(ark.div, "root", { baseComponent: true });

    const rootProviderResult = render(
      <RootProviderRoot>
        <ContextRoot>Hello</ContextRoot>
      </RootProviderRoot>,
    );
    const providerResult = render(<ProviderRoot>Hello</ProviderRoot>);
    const contextResult = render(
      <ProviderRoot>
        <ContextRoot>Hello</ContextRoot>
      </ProviderRoot>,
    );

    const inlineSnapshot = `
      <div
        class="d_flex"
      >
        Hello
      </div>
    `;

    expect(rootProviderResult.container.firstChild).toMatchInlineSnapshot(inlineSnapshot);
    expect(providerResult.container.firstChild).toMatchInlineSnapshot(inlineSnapshot);
    expect(contextResult.container.firstChild?.firstChild).toMatchInlineSnapshot(inlineSnapshot);
  });

  test("should have a sane default with string components", () => {
    const { withProvider, withContext, withRootProvider } = createStyleContext(svaA);

    const RootProviderRoot = withRootProvider(MockContext);

    const ProviderRoot = withProvider("div", "root");
    const ContextRoot = withContext("div", "root");

    const rootProviderResult = render(
      <RootProviderRoot>
        <ContextRoot>Hello</ContextRoot>
      </RootProviderRoot>,
    );
    const providerResult = render(<ProviderRoot>Hello</ProviderRoot>);
    const contextResult = render(
      <ProviderRoot>
        <ContextRoot>Hello</ContextRoot>
      </ProviderRoot>,
    );

    const inlineSnapshot = `
      <div
        class="d_flex"
      >
        Hello
      </div>
    `;

    expect(rootProviderResult.container.firstChild).toMatchInlineSnapshot(inlineSnapshot);
    expect(providerResult.container.firstChild).toMatchInlineSnapshot(inlineSnapshot);
    expect(contextResult.container.firstChild?.firstChild).toMatchInlineSnapshot(inlineSnapshot);
  });

  test("should have a sane default when using the css prop directly on a styled element", () => {
    const { withProvider, withContext, withRootProvider } = createStyleContext(svaA);

    const RootProviderRoot = withRootProvider(MockContext);

    const ProviderRoot = withProvider(ark.div, "root", {
      baseComponent: true,
    });
    const ContextRoot = withContext(ark.div, "root", {
      baseComponent: true,
    });

    const rootProviderResult = render(
      <RootProviderRoot>
        <ContextRoot css={{ display: "block" }}>Hello</ContextRoot>
      </RootProviderRoot>,
    );
    const providerResult = render(<ProviderRoot css={{ display: "block" }}>Hello</ProviderRoot>);
    const contextResult = render(
      <ProviderRoot>
        <ContextRoot css={{ display: "block" }}>Hello</ContextRoot>
      </ProviderRoot>,
    );

    const inlineSnapshot = `
      <div
        class="d_block"
      >
        Hello
      </div>
    `;

    expect(rootProviderResult.container.firstChild).toMatchInlineSnapshot(inlineSnapshot);
    expect(providerResult.container.firstChild).toMatchInlineSnapshot(inlineSnapshot);
    expect(contextResult.container.firstChild?.firstChild).toMatchInlineSnapshot(inlineSnapshot);
  });

  test("should have no problems merging a react component and a string component", () => {
    const { withProvider, withContext } = createStyleContext(svaA);

    const ProviderRoot = withProvider(ark.div, "root", {
      baseComponent: true,
    });
    const ContextRoot = withContext("div", "child");

    const contextResult = render(
      <ProviderRoot asChild>
        <ContextRoot>Hello</ContextRoot>
      </ProviderRoot>,
    );

    const inlineSnapshot = `
      <div
        class="d_flex"
      >
        Hello
      </div>
    `;

    expect(contextResult.container.firstChild).toMatchInlineSnapshot(inlineSnapshot);
  });

  test("should not automatically forward css prop regardless of whether you pass in a component or a string", () => {
    const { withProvider, withContext } = createStyleContext(svaA);

    const ProviderRoot = withProvider(ark.div, "root", {
      baseComponent: true,
    });
    const ContextRoot = withContext("div", "root");

    const providerResult = render(
      <ProviderRoot>
        <ContextRoot>Hello</ContextRoot>
      </ProviderRoot>,
    );

    const inlineSnapshot = `
      <div
        class="d_flex"
      >
        <div
          class="d_flex"
        >
          Hello
        </div>
      </div>
    `;

    expect(providerResult.container.firstChild).toMatchInlineSnapshot(inlineSnapshot);
  });

  test("should be automatically overridden with styled", () => {
    const { withProvider, withContext, withRootProvider } = createStyleContext(svaA);

    const RootProviderRoot = withRootProvider(MockContext);

    const ProviderRoot = withProvider(ark.div, "root", {
      baseComponent: true,
    });
    const ContextRoot = withContext(ark.div, "root", {
      baseComponent: true,
    });

    const StyledProviderRoot = styled(ProviderRoot, {
      base: {
        display: "block",
      },
    });

    const StyledContextRoot = styled(ContextRoot, {
      base: {
        display: "block",
      },
    });

    const rootProviderResult = render(
      <RootProviderRoot>
        <StyledContextRoot>Hello</StyledContextRoot>
      </RootProviderRoot>,
    );
    const providerResult = render(<StyledProviderRoot>Hello</StyledProviderRoot>);
    const contextResult = render(
      <ProviderRoot>
        <StyledContextRoot>Hello</StyledContextRoot>
      </ProviderRoot>,
    );

    const inlineSnapshot = `
      <div
        class="d_block"
      >
        Hello
      </div>
    `;

    expect(rootProviderResult.container.firstChild).toMatchInlineSnapshot(inlineSnapshot);
    expect(providerResult.container.firstChild).toMatchInlineSnapshot(inlineSnapshot);
    expect(contextResult.container.firstChild?.firstChild).toMatchInlineSnapshot(inlineSnapshot);
  });
  test("should merge in css from parent components", () => {
    const { withProvider, withContext, withRootProvider } = createStyleContext(svaA);

    const RootProviderRoot = withRootProvider(MockContext);

    const ProviderRoot = withProvider(ark.div, "root", {
      baseComponent: true,
    });
    const ContextRoot = withContext(ark.div, "root", {
      baseComponent: true,
    });

    const Parent = styled(
      ark.div,
      {
        base: {
          display: "block",
        },
      },
      { baseComponent: true },
    );

    const rootProviderResult = render(
      <RootProviderRoot>
        <Parent asChild>
          <ContextRoot>Hello</ContextRoot>
        </Parent>
      </RootProviderRoot>,
    );
    const providerResult = render(
      <Parent asChild>
        <ProviderRoot>Hello</ProviderRoot>
      </Parent>,
    );
    const contextResult = render(
      <ProviderRoot>
        <Parent asChild>
          <ContextRoot>Hello</ContextRoot>
        </Parent>
      </ProviderRoot>,
    );

    const inlineSnapshot = `
      <div
        class="d_block"
      >
        Hello
      </div>
    `;

    expect(rootProviderResult.container.firstChild).toMatchInlineSnapshot(inlineSnapshot);
    expect(providerResult.container.firstChild).toMatchInlineSnapshot(inlineSnapshot);
    expect(contextResult.container.firstChild?.firstChild).toMatchInlineSnapshot(inlineSnapshot);
  });

  test("should automatically forward the css prop when asChild is true", () => {
    const { withProvider, withContext, withRootProvider } = createStyleContext(svaA);

    const RootProviderRoot = withRootProvider(MockContext);

    const ProviderRoot = withProvider(ark.div, "root", {
      baseComponent: true,
    });
    const ContextRoot = withContext(ark.div, "root", {
      baseComponent: true,
    });

    const Child = styled("div", {
      base: {
        display: "inline",
      },
    });

    const rootProviderResult = render(
      <RootProviderRoot>
        <ContextRoot asChild>
          <Child>Hello</Child>
        </ContextRoot>
      </RootProviderRoot>,
    );
    const providerResult = render(
      <ProviderRoot asChild>
        <Child>Hello</Child>
      </ProviderRoot>,
    );
    const contextResult = render(
      <ProviderRoot>
        <ContextRoot asChild>
          <Child>Hello</Child>
        </ContextRoot>
      </ProviderRoot>,
    );

    const inlineSnapshot = `
      <div
        class="d_flex"
      >
        Hello
      </div>
    `;

    expect(rootProviderResult.container.firstChild).toMatchInlineSnapshot(inlineSnapshot);
    expect(providerResult.container.firstChild).toMatchInlineSnapshot(inlineSnapshot);
    expect(contextResult.container.firstChild?.firstChild).toMatchInlineSnapshot(inlineSnapshot);
  });

  test("seamlessly merges components from two different sets", () => {
    const styledA = createStyleContext(svaA);

    const ARootProviderRoot = styledA.withRootProvider(MockContext);

    const AProviderRoot = styledA.withProvider(ark.div, "root", {
      baseComponent: true,
    });
    const AContextRoot = styledA.withContext(ark.div, "root", {
      baseComponent: true,
    });

    const styledB = createStyleContext(svaB);

    const BRootProviderRoot = styledB.withRootProvider(MockContext);

    const BProviderRoot = styledB.withProvider(ark.div, "root", {
      baseComponent: true,
    });
    const BContextRoot = styledB.withContext(ark.div, "root", {
      baseComponent: true,
    });

    const rootProviderResult = render(
      <ARootProviderRoot>
        <BRootProviderRoot>
          <AContextRoot asChild>
            <BContextRoot>Hello</BContextRoot>
          </AContextRoot>
        </BRootProviderRoot>
      </ARootProviderRoot>,
    );
    const providerResult = render(
      <AProviderRoot asChild>
        <BProviderRoot>Hello</BProviderRoot>
      </AProviderRoot>,
    );

    const contextResult = render(
      <AProviderRoot asChild>
        <BProviderRoot>
          <AContextRoot asChild>
            <BContextRoot>Hello</BContextRoot>
          </AContextRoot>
        </BProviderRoot>
      </AProviderRoot>,
    );

    const inlineSnapshot = `
      <div
        class="d_flex"
      >
        Hello
      </div>
    `;

    expect(rootProviderResult.container.firstChild).toMatchInlineSnapshot(inlineSnapshot);
    expect(providerResult.container.firstChild).toMatchInlineSnapshot(inlineSnapshot);
    expect(contextResult.container.firstChild?.firstChild).toMatchInlineSnapshot(inlineSnapshot);
  });
  test("seamlessly merges components onto non-styled components", () => {
    const { withProvider, withContext, withRootProvider } = createStyleContext(svaA);

    const RootProviderRoot = withRootProvider(MockContext);

    const ProviderRoot = withProvider(ark.div, "root", {
      baseComponent: true,
    });
    const ContextRoot = withContext(ark.div, "root", {
      baseComponent: true,
    });

    const rootProviderResult = render(
      <RootProviderRoot>
        <ContextRoot asChild consumeCss>
          <span>Hello</span>
        </ContextRoot>
      </RootProviderRoot>,
    );
    const providerResult = render(
      <ProviderRoot asChild consumeCss>
        <span>Hello</span>
      </ProviderRoot>,
    );

    const inlineSnapshot = `
      <span
        class="d_flex"
      >
        Hello
      </span>
    `;

    expect(rootProviderResult.container.firstChild).toMatchInlineSnapshot(inlineSnapshot);
    expect(providerResult.container.firstChild).toMatchInlineSnapshot(inlineSnapshot);
  });
  test("correctly consumes css when merging a complex styled component onto a primitive", () => {
    const TextComponent = styled(ark.p, {}, { baseComponent: true });

    const Text = forwardRef<HTMLParagraphElement, HTMLArkProps<"p"> & StyledProps>(({ css: cssProp, ...rest }, ref) => {
      return <TextComponent css={css.raw({ display: "block" }, cssProp)} ref={ref} {...rest} />;
    });

    const { withProvider, withContext, withRootProvider } = createStyleContext(svaA);

    const RootProviderRoot = withRootProvider(MockContext);

    const ProviderRoot = withProvider(Text, "root");
    const ContextRoot = withContext(Text, "root");

    const rootProviderResult = render(
      <RootProviderRoot>
        <ContextRoot asChild consumeCss>
          <span>Hello</span>
        </ContextRoot>
      </RootProviderRoot>,
    );
    const providerResult = render(
      <ProviderRoot asChild consumeCss>
        <span>Hello</span>
      </ProviderRoot>,
    );
    const contextResult = render(
      <ProviderRoot>
        <ContextRoot asChild consumeCss>
          <span>Hello</span>
        </ContextRoot>
      </ProviderRoot>,
    );

    const inlineSnapshot = `
      <span
        class="d_flex"
      >
        Hello
      </span>
    `;

    expect(rootProviderResult.container.firstChild).toMatchInlineSnapshot(inlineSnapshot);
    expect(providerResult.container.firstChild).toMatchInlineSnapshot(inlineSnapshot);
    expect(contextResult.container.firstChild?.firstChild).toMatchInlineSnapshot(inlineSnapshot);
  });
});
