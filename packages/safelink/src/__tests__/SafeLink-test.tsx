/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint-env jest */

import React, { ReactNode } from "react";
import { StaticRouter } from "react-router-dom/server.js";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import MissingRouterContext from "../MissingRouterContext";
import Safelink, { isOldNdlaLink } from "../SafeLink";

interface Props {
  children: ReactNode;
}

const wrapper = ({ children }: Props) => <StaticRouter location="foo">{children}</StaticRouter>;

test("SafeLink renderers Link correctly if router context is present", async () => {
  const { container, findByRole } = render(<Safelink to="/my/path">Internal link</Safelink>, {
    wrapper,
  });
  const link = await findByRole("link");
  expect(link).toHaveAttribute("href", "/my/path");
  expect(container).toMatchSnapshot();
});

test("SafeLink defaults to normal link if to prop is an external link", async () => {
  const { container, findByRole } = render(<Safelink to="https://example.com">External link</Safelink>);
  const link = await findByRole("link");
  expect(link).toHaveAttribute("href", "https://example.com");
  expect(container).toMatchSnapshot();
});

test("SafeLink defaults to normal link if to prop is an old ndla link", async () => {
  const { container, findByRole } = render(<Safelink to="/nb/node/54">Normal link</Safelink>, {
    wrapper,
  });
  const link = await findByRole("link");
  expect(link).toHaveAttribute("href", "/nb/node/54");
  expect(container).toMatchSnapshot();
});

test("SafeLink renderers normal link correctly when router context is not present", async () => {
  const { container, findByRole } = render(
    <MissingRouterContext.Provider value={true}>
      <Safelink to="/my/path">No router context</Safelink>
    </MissingRouterContext.Provider>,
  );
  const link = await findByRole("link");
  expect(link).toHaveAttribute("href", "/my/path");
  expect(container).toMatchSnapshot();
});

test("SafeLink renderers normal mailto-link correctly", async () => {
  const { container, findByRole } = render(<Safelink to="mailto:test@ndla.no">test@ndla.no</Safelink>, {
    wrapper,
  });
  const link = await findByRole("link");
  expect(link).toHaveAttribute("href", "mailto:test@ndla.no");
  expect(container).toMatchSnapshot();
});

test("isOldNdlaLink checks", () => {
  expect(isOldNdlaLink("/nb/node/12")).toBe(true);
  expect(isOldNdlaLink("/nn/node/12?fag=12")).toBe(true);
  expect(isOldNdlaLink("/en/node/12ssjkdlf")).toBe(true);
  expect(isOldNdlaLink("/nb/nde/12")).toBe(false);
  expect(isOldNdlaLink("/subjects")).toBe(false);
  expect(isOldNdlaLink("/sanodesd43/")).toBe(false);
  expect(isOldNdlaLink({ pathname: "/sanodesd43/" })).toBe(false);
});
