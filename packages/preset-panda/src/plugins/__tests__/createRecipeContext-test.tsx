/**
 * Copyright (c) 2026-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ark } from "@ark-ui/react/factory";
import { createRecipeContext } from "@ndla/styled-system/jsx";
import { render } from "@testing-library/react";

describe("createRecipeContext", () => {
  test("should have a sane default", () => {
    const { withContext } = createRecipeContext({
      base: { display: "flex", color: "grey.50" },
    });
    const StyledDiv = withContext(ark.div, { baseComponent: true });

    const { container } = render(<StyledDiv>Hello</StyledDiv>);

    const snapshot = `
      <div
        class="d_flex c_grey.50"
      >
        Hello
      </div>
    `;
    expect(container.firstChild).toMatchInlineSnapshot(snapshot);
  });

  test("css prop should win over recipe base", () => {
    const { withContext } = createRecipeContext({
      base: { display: "flex", color: "grey.50" },
    });
    const StyledDiv = withContext(ark.div, { baseComponent: true });

    const { container } = render(<StyledDiv css={{ display: "block" }}>Hello</StyledDiv>);

    const snapshot = `
      <div
        class="d_block c_grey.50"
      >
        Hello
      </div>
    `;
    expect(container.firstChild).toMatchInlineSnapshot(snapshot);
  });

  test("variant props injected via PropsProvider are applied", () => {
    const { withContext, PropsProvider } = createRecipeContext({
      base: { color: "grey.50" },
      variants: {
        size: {
          small: { padding: "xsmall" },
          large: { padding: "small" },
        },
      },
    });
    const StyledDiv = withContext(ark.div, { baseComponent: true });

    const { container } = render(
      <PropsProvider value={{ size: "small" }}>
        <StyledDiv>Hello</StyledDiv>
      </PropsProvider>,
    );

    const snapshot = `
      <div
        class="c_grey.50 p_xsmall"
      >
        Hello
      </div>
    `;
    expect(container.firstChild).toMatchInlineSnapshot(snapshot);
  });

  test("inline props take precedence over PropsProvider", () => {
    const { withContext, PropsProvider } = createRecipeContext({
      base: { color: "grey.50" },
      variants: {
        size: {
          small: { padding: "xsmall" },
          large: { padding: "small" },
        },
      },
    });
    const StyledDiv = withContext(ark.div, { baseComponent: true });

    const { container } = render(
      <PropsProvider value={{ size: "small" }}>
        <StyledDiv size="large">Hello</StyledDiv>
      </PropsProvider>,
    );

    const snapshot = `
      <div
        class="c_grey.50 p_small"
      >
        Hello
      </div>
    `;
    expect(container.firstChild).toMatchInlineSnapshot(snapshot);
  });

  test("asChild forwards css correctly through withContext", () => {
    const { withContext: withOuterContext } = createRecipeContext({
      base: { color: "grey.50", display: "flex" },
    });
    const Outer = withOuterContext(ark.div, { baseComponent: true });

    const { withContext: withInnerContext } = createRecipeContext({
      base: { borderRadius: "xsmall", display: "inline" },
    });
    const Inner = withInnerContext(ark.div, { baseComponent: true });

    const { container } = render(
      <Outer asChild>
        <Inner>Hello</Inner>
      </Outer>,
    );

    const snapshot = `
      <div
        class="bdr_xsmall d_flex c_grey.50"
      >
        Hello
      </div>
    `;
    expect(container.firstChild).toMatchInlineSnapshot(snapshot);
  });

  test("consumeCss forces className production when asChilded onto a plain element", () => {
    const { withContext } = createRecipeContext({
      base: { display: "flex" },
    });
    const StyledDiv = withContext(ark.div, { baseComponent: true });

    const { container } = render(
      <StyledDiv asChild consumeCss>
        <span>Hello</span>
      </StyledDiv>,
    );

    const snapshot = `
      <span
        class="d_flex"
      >
        Hello
      </span>
    `;
    expect(container.firstChild).toMatchInlineSnapshot(snapshot);
  });
});
