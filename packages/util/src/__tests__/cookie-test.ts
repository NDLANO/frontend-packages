/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint-env jest */

import { getCookie, isValidCookie } from "../index";

const testCookieKey = "COOKIE_KEY";
const dummyCookies =
  'COOKIE_KEY={"1":true,"2":true,"3":true}; OTHER_COOKIE_KEYS={"test":true}; THIRD_COOKIE=ONEWITH=IN;';

test("test getCookie ", () => {
  expect(getCookie(testCookieKey, dummyCookies)).toBe('{"1":true,"2":true,"3":true}');
});

test("test getCookie new", () => {
  expect(getCookie("NEW_COOKIE_KEY", dummyCookies)).toBe(null);
});

test("test that cookies with = signs work", () => {
  expect(getCookie("THIRD_COOKIE", dummyCookies)).toBe("ONEWITH=IN");
});

test("test isValidCookie existingCookie", () => {
  expect(isValidCookie(testCookieKey, dummyCookies)).toBe(true);
});

test("test isValidCookie newCookie", () => {
  expect(isValidCookie("NEW_COOKIE_KEY", dummyCookies)).toBe(false);
});
