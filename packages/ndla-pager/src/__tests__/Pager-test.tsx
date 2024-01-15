/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Pager from "../Pager";

interface PagerTestParams {
  setup: { page: number; lastPage: number };
  expected: (string | number)[];
}

interface WrapperProps {
  children?: ReactNode;
}

const wrapper = ({ children }: WrapperProps) => <MemoryRouter>{children}</MemoryRouter>;

const pagerTest = ({ setup, expected }: PagerTestParams) => {
  test(`component/LinkPager page ${setup.page}/${setup.lastPage}`, async () => {
    const path = "somepath";
    const prev = setup.page - 1;
    const next = setup.page + 1;
    const { findByTestId } = render(<Pager pathname={path} query={{}} {...setup} />, {
      wrapper,
    });
    const pager = await findByTestId("pager");
    expect(pager.children.length).toBe(expected.length);

    expected.forEach((value, i) => {
      const step = pager.children[i];
      switch (value) {
        case "current":
          expect(step).toHaveTextContent(setup.page.toString());
          expect(step).not.toHaveAttribute("href");
          expect(step).toHaveAttribute("aria-current", "step");
          break;
        case "back":
          expect(step).toHaveTextContent("<");
          expect(step).toHaveAttribute("href", `/${path}?page=${prev}`);
          break;
        case "forward":
          expect(step).toHaveTextContent(">");
          expect(step).toHaveAttribute("href", `/${path}?page=${next}`);
          break;
        default:
          expect(step).toHaveTextContent(value.toString());
          expect(step).toHaveAttribute("href", `/${path}?page=${value}`);
      }
    });
  });
};

pagerTest({ setup: { page: 1, lastPage: 1 }, expected: ["current"] });
pagerTest({
  setup: { page: 3, lastPage: 5 },
  expected: ["back", 1, 2, "current", 4, 5, "forward"],
});
pagerTest({
  setup: { page: 1, lastPage: 5 },
  expected: ["current", 2, 3, 4, 5, "forward"],
});
pagerTest({
  setup: { page: 19, lastPage: 19 },
  expected: ["back", 15, 16, 17, 18, "current"],
});
pagerTest({
  setup: { page: 4, lastPage: 10 },
  expected: ["back", 2, 3, "current", 5, 6, "forward"],
});
