/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { render } from "@testing-library/react";
import type { ReactNode } from "react";
import { StaticRouter } from "react-router";
import { MissingRouterContext } from "../MissingRouterContext";
import { SafeLink, isOldNdlaLink } from "../SafeLink";

interface Props {
  children: ReactNode;
}

const wrapper = ({ children }: Props) => <StaticRouter location="foo">{children}</StaticRouter>;

test("SafeLink renderers Link correctly if router context is present", async () => {
  const { container, findByRole } = render(<SafeLink to="/my/path">Internal link</SafeLink>, {
    wrapper,
  });
  const link = await findByRole("link");
  expect(link).toHaveAttribute("href", "/my/path");
  expect(container.firstChild).toMatchInlineSnapshot(`
    <a
      class=""
      data-discover="true"
      href="/my/path"
      tabindex="0"
    >
      Internal link
    </a>
  `);
});

test("SafeLink defaults to normal link if to prop is an external link", async () => {
  const { container, findByRole } = render(<SafeLink to="https://example.com">External link</SafeLink>);
  const link = await findByRole("link");
  expect(link).toHaveAttribute("href", "https://example.com");
  expect(container.firstChild).toMatchInlineSnapshot(`
<a
  class=""
  href="https://example.com"
>
  External link
</a>
`);
});

test("SafeLink defaults to normal link if to prop is an old ndla link", async () => {
  const { container, findByRole } = render(<SafeLink to="/nb/node/54">Normal link</SafeLink>, {
    wrapper,
  });
  const link = await findByRole("link");
  expect(link).toHaveAttribute("href", "/nb/node/54");
  expect(container.firstChild).toMatchInlineSnapshot(`
<a
  class=""
  href="/nb/node/54"
>
  Normal link
</a>
`);
});

test("SafeLink renderers normal link correctly when router context is not present", async () => {
  const { container, findByRole } = render(
    <MissingRouterContext.Provider value={true}>
      <SafeLink to="/my/path">No router context</SafeLink>
    </MissingRouterContext.Provider>,
  );
  const link = await findByRole("link");
  expect(link).toHaveAttribute("href", "/my/path");
  expect(container.firstChild).toMatchInlineSnapshot(`
<a
  class=""
  href="/my/path"
>
  No router context
</a>
`);
});

test("SafeLink renderers normal mailto-link correctly", async () => {
  const { container, findByRole } = render(<SafeLink to="mailto:test@ndla.no">test@ndla.no</SafeLink>, {
    wrapper,
  });
  const link = await findByRole("link");
  expect(link).toHaveAttribute("href", "mailto:test@ndla.no");
  expect(container.firstChild).toMatchInlineSnapshot(`
<a
  class=""
  href="mailto:test@ndla.no"
>
  test@ndla.no
</a>
`);
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
