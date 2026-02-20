/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ark, type HTMLArkProps } from "@ark-ui/react";
import { css } from "@ndla/styled-system/css";
import { styled } from "@ndla/styled-system/jsx";
import type { StyledProps } from "@ndla/styled-system/types";
import { render } from "@testing-library/react";
import { forwardRef } from "react";

describe("CSS prop forwarding", () => {
  test("Should have a sane default", () => {
    const StyledComponent = styled("div", {
      base: {
        display: "flex",
      },
    });

    const { container } = render(<StyledComponent>Hello</StyledComponent>);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="d_flex"
      >
        Hello
      </div>
    `);
  });
  test("should have a sane default when using the css prop directly on a styled element", () => {
    const StyledComponent = styled("div", {
      base: {
        display: "flex",
      },
    });

    const { container } = render(<StyledComponent css={{ display: "block" }}>Hello</StyledComponent>);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="d_block"
      >
        Hello
      </div>
    `);
  });
  test("Should override a string styled component", () => {
    const StyledComponent = styled("div", {
      base: {
        color: "grey.50",
        display: "flex",
      },
    });

    const StyledStyledComponent = styled(StyledComponent, {
      base: {
        padding: "small",
        display: "block",
      },
    });

    const StyledStyledStyledComponent = styled(StyledStyledComponent, {
      base: {
        borderRadius: "xsmall",
        display: "inline",
      },
    });

    const { container } = render(<StyledStyledStyledComponent>Hello</StyledStyledStyledComponent>);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="c_grey.50 d_inline p_small bdr_xsmall"
      >
        Hello
      </div>
    `);
  });

  test("css prop should win over styled string component", () => {
    const StyledComponent = styled("div", {
      base: {
        color: "grey.50",
        display: "flex",
      },
    });

    const StyledStyledComponent = styled(StyledComponent, {
      base: {
        padding: "small",
        display: "block",
      },
    });

    const { container } = render(
      <StyledStyledComponent css={{ display: "inline", border: "1px" }}>Hello</StyledStyledComponent>,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="c_grey.50 d_inline p_small bd_1px"
      >
        Hello
      </div>
    `);
  });

  test("css prop should win over styled react component", () => {
    const StyledComponent = styled(
      ark.div,
      {
        base: {
          color: "grey.50",
          display: "flex",
        },
      },
      { baseComponent: true },
    );

    const StyledStyledComponent = styled(StyledComponent, {
      base: {
        padding: "small",
        display: "block",
      },
    });

    const { container } = render(
      <StyledStyledComponent css={{ display: "inline", border: "1px" }}>Hello</StyledStyledComponent>,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="c_grey.50 d_inline p_small bd_1px"
      >
        Hello
      </div>
    `);
  });

  test("should override a react component styled component", () => {
    const StyledComponent = styled(
      ark.div,
      {
        base: {
          color: "grey.50",
          display: "flex",
        },
      },
      { baseComponent: true },
    );

    const StyledStyledComponent = styled(StyledComponent, {
      base: {
        padding: "xsmall",
        display: "block",
      },
    });

    const StyledStyledStyledComponent = styled(StyledStyledComponent, {
      base: {
        borderRadius: "xsmall",
        display: "inline",
      },
    });

    const { container } = render(<StyledStyledStyledComponent>Hello</StyledStyledStyledComponent>);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="c_grey.50 d_inline p_xsmall bdr_xsmall"
      >
        Hello
      </div>
    `);
  });

  test("merging components components with asChild merges the css prop", () => {
    const StyledOuter = styled(
      ark.div,
      {
        base: {
          color: "grey.50",
          display: "flex",
        },
      },
      { baseComponent: true },
    );

    const StyledMiddle = styled(
      ark.div,
      {
        base: {
          padding: "xsmall",
          display: "block",
        },
      },
      { baseComponent: true },
    );

    const StyledInner = styled(
      ark.div,
      {
        base: {
          borderRadius: "xsmall",
          display: "inline",
        },
      },
      { baseComponent: true },
    );

    const { container } = render(
      <StyledOuter asChild>
        <StyledMiddle asChild>
          <StyledInner>Hello</StyledInner>
        </StyledMiddle>
      </StyledOuter>,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="bdr_xsmall d_flex p_xsmall c_grey.50"
      >
        Hello
      </div>
    `);
  });

  test("when merging inline css and css from asChild, the one from asChild wins", () => {
    const StyledOuter = styled(
      ark.div,
      {
        base: {
          display: "flex",
          color: "grey.50",
        },
      },
      { baseComponent: true },
    );

    const StyledInner = styled(
      ark.div,
      {
        base: {
          display: "inline",
        },
      },
      { baseComponent: true },
    );

    const { container } = render(
      <StyledOuter asChild>
        <StyledInner css={{ display: "block" }}>Hello</StyledInner>
      </StyledOuter>,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="d_block"
      >
        Hello
      </div>
    `);
  });

  test("explicitly setting consumeCss to false should not consume the css prop", () => {
    const StyledComponent = styled("div", { base: { display: "flex" } });

    const { container } = render(<StyledComponent consumeCss={false}>Hello</StyledComponent>);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="d_flex"
      >
        Hello
      </div>
    `);
  });

  test("explicitly setting consumeCss and asChild to false should not consume the css prop", () => {
    const StyledComponent = styled(ark.div, { base: { display: "flex" } }, { baseComponent: true });

    const { container } = render(
      <StyledComponent asChild={false} consumeCss={false}>
        Hello
      </StyledComponent>,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="d_flex"
      >
        Hello
      </div>
    `);
  });

  test("css prop usage should win when asChilded onto a styled component", () => {
    const StyledOuter = styled(
      ark.div,
      {
        base: {
          display: "flex",
        },
      },
      { baseComponent: true },
    );

    const StyledInner = styled(
      ark.div,
      {
        base: {
          borderRadius: "xsmall",
          display: "inline",
        },
      },
      { baseComponent: true },
    );

    const { container } = render(
      <StyledOuter asChild css={{ display: "block", color: "primary" }}>
        <StyledInner>Hello</StyledInner>
      </StyledOuter>,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="bdr_xsmall d_block c_primary"
      >
        Hello
      </div>
    `);
  });

  test("should allow for automatically merging complex components", () => {
    const Text = ({ children, css: cssProp, ...rest }: HTMLArkProps<"div"> & StyledProps) => {
      return (
        <styled.p className={css({ textStyle: "heading.large", display: "block" }, cssProp)} {...rest}>
          {children}
        </styled.p>
      );
    };

    const StyledText = styled(Text, {
      base: {
        textStyle: "heading.small",
      },
    });

    const { container } = render(<StyledText>Hello</StyledText>);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <p
        class="textStyle_heading.small d_block"
      >
        Hello
      </p>
    `);
  });

  test("converts itself to a class name when asChilded onto a regular component", () => {
    const StyledContainer = styled(
      ark.div,
      {
        base: {
          display: "flex",
        },
      },
      { baseComponent: true },
    );

    const { container } = render(
      <StyledContainer asChild consumeCss>
        <span>Hello</span>
      </StyledContainer>,
    );

    const notAsChildedResult = render(<StyledContainer>Hello</StyledContainer>);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <span
        class="d_flex"
      >
        Hello
      </span>
    `);

    expect(notAsChildedResult.container.firstChild).toMatchInlineSnapshot(`
      <div
        class="d_flex"
      >
        Hello
      </div>
    `);
  });

  test("converts itself to a class name when re-styled and asChilded onto a regular component", () => {
    const StyledContainer = styled(
      ark.div,
      {
        base: {
          display: "flex",
        },
      },
      { baseComponent: true },
    );

    const StyledStyledContainer = styled(StyledContainer, {
      base: {
        display: "block",
      },
    });

    const StyledStyledStyledContainer = styled(StyledStyledContainer, {
      base: {
        display: "inline",
      },
    });

    const { container } = render(
      <StyledStyledStyledContainer asChild consumeCss>
        <span>Hello</span>
      </StyledStyledStyledContainer>,
    );

    const notAsChildedResult = render(<StyledStyledStyledContainer>Hello</StyledStyledStyledContainer>);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <span
        class="d_inline"
      >
        Hello
      </span>
    `);

    expect(notAsChildedResult.container.firstChild).toMatchInlineSnapshot(`
      <div
        class="d_inline"
      >
        Hello
      </div>
    `);
  });

  test("should automatically merge complex components wrapped in styled and asChilded to a non-complex component", () => {
    const StyledBase = styled(
      ark.div,
      {
        base: {
          textStyle: "heading.medium",
        },
      },
      { baseComponent: true },
    );

    const Text = forwardRef<HTMLDivElement, HTMLArkProps<"div"> & StyledProps>(
      ({ children, css: cssProp, ...rest }, ref) => {
        return (
          <StyledBase css={css.raw({ textStyle: "heading.large" }, cssProp)} {...rest} ref={ref}>
            {children}
          </StyledBase>
        );
      },
    );

    const StyledText = styled(Text, {
      base: {
        textStyle: "heading.small",
      },
    });

    const LinkText = forwardRef<HTMLDivElement, HTMLArkProps<"div"> & StyledProps>(
      ({ children, css: cssProp, ...rest }, ref) => {
        return (
          <StyledText css={css.raw({ textStyle: "body.articleLink" }, cssProp)} {...rest} ref={ref}>
            {children}
          </StyledText>
        );
      },
    );

    const StyledLinkText = styled(LinkText, {
      base: {
        textStyle: "body.link",
      },
    });

    const { container } = render(
      <StyledLinkText asChild consumeCss>
        <span>Hello</span>
      </StyledLinkText>,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <span
        class="textStyle_body.link"
      >
        Hello
      </span>
    `);
  });
});
