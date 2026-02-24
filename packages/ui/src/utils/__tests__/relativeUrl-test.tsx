/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { describe, it, expect } from "vitest";
import { getPossiblyRelativeUrl } from "../relativeUrl";

describe("getPossibleRelativeUrl", () => {
  it("returns a relative URL for NDLA urls", () => {
    const url = "https://ndla.no/article/123";
    const pathname = "https://ndla.no/about/hvem-er-vi";

    expect(getPossiblyRelativeUrl(url, pathname)).toEqual("/article/123");
  });
  it("does not return relative URLs for non-NDLA urls", () => {
    const url = "https://google.com";
    const pathname = "https://ndla.no/about/hvem-er-vi";

    expect(getPossiblyRelativeUrl(url, pathname)).toEqual("https://google.com");
  });
  it("handles www just fine", () => {
    const url = "https://www.ndla.no/article/123";
    const pathname = "https://www.ndla.no/about/hvem-er-vi";

    expect(getPossiblyRelativeUrl(url, pathname)).toEqual("/article/123");
  });
  it("handles other environments", () => {
    const url = "https://test.ndla.no/article/123";
    const pathname = "https://test.ndla.no/about/hvem-er-vi";

    expect(getPossiblyRelativeUrl(url, pathname)).toEqual("/article/123");
  });
  it("strips out the languages from the URL if pathname has no language set", () => {
    const url = "https://test.ndla.no/nb/article/123";
    const pathname = "https://test.ndla.no/about/hvem-er-vi";

    expect(getPossiblyRelativeUrl(url, pathname)).toEqual("/article/123");
  });
  it("replaces languages from the URL that do not match the pathname language", () => {
    const url = "https://test.ndla.no/nb/article/123";
    const pathname = "https://test.ndla.no/nn/about/hvem-er-vi";

    expect(getPossiblyRelativeUrl(url, pathname)).toEqual("/nn/article/123");
  });
  it("returns a base url if the url only contains a language tag", () => {
    const url = "https://ndla.no/nb";
    const pathname = "https://ndla.no/about/hvem-er-vi";

    expect(getPossiblyRelativeUrl(url, pathname)).toEqual("/");
  });
  it("Handles trailing backslash", () => {
    const url = "https://ndla.no/nb/";
    const pathname = "https://ndla.no/about/hvem-er-vi";

    expect(getPossiblyRelativeUrl(url, pathname)).toEqual("/");
  });
  it("handles www", () => {
    const url = "https://www.ndla.no";
    const pathname = "https://ndla.no/about/hvem-er-vi";

    expect(getPossiblyRelativeUrl(url, pathname)).toEqual("/");
  });
  it("handles ports", () => {
    const url = "https://www.ndla.no:8080";
    const pathname = "https://ndla.no/about/hvem-er-vi";

    expect(getPossiblyRelativeUrl(url, pathname)).toEqual("/");
  });
  it("handles mailto from markdown", () => {
    const url = "mailto:test@ndla.no";
    const pathname = "https://ndla.no/about/hvem-er-vi";

    expect(getPossiblyRelativeUrl(url, pathname)).toEqual("mailto:test@ndla.no");
  });
  it("handles params in url", () => {
    const url = "https://ndla.no/search?grepCodes=KM123";
    const pathname = "https://ndla.no/article/666";

    expect(getPossiblyRelativeUrl(url, pathname)).toEqual("/search?grepCodes=KM123");
  });
  it("handles params in url including language tag", () => {
    const url = "https://ndla.no/nb/search?grepCodes=KM123";
    const pathname = "https://ndla.no/en/article/666";

    expect(getPossiblyRelativeUrl(url, pathname)).toEqual("/en/search?grepCodes=KM123");
  });
});
