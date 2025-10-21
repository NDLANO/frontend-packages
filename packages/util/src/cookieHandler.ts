/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export interface CookieParams {
  cookieName: string;
  cookieValue: string;
  removeCookie?: boolean;
  lax?: boolean;
  path?: string;
  expiration?: Date | string;
}

/** Client/Browser only */
export const setCookie = (params: CookieParams): void => {
  document.cookie = getCookieString(params);
};

const getCookieExpiration = (expiration?: Date | string, removeCookie?: boolean): string => {
  if (expiration !== undefined) {
    if (typeof expiration === "string") return `expires=${expiration}`;
    else return `expires=${expiration.toUTCString()}`;
  }

  if (removeCookie) {
    return "Thu, 01 Jan 1970 00:00:01 GMT";
  } else {
    const d = new Date();
    d.setTime(d.getTime() + 9999 * 24 * 60 * 60 * 1000);
    return `expires=${d.toUTCString()}`;
  }
};

export const getCookieString = ({
  cookieName,
  cookieValue,
  removeCookie,
  lax,
  path = "/",
  expiration,
}: CookieParams) => {
  const expires = getCookieExpiration(expiration, removeCookie);
  return `${cookieName}=${cookieValue}; ${expires}; SameSite=${lax ? "Lax" : "Strict"}; path=${path}`;
};

/**
 * Missing cookie returns `null`, Cookie without value returns `undefined` otherwise cookie value
 * @param cookieName name of cookie to fetch
 * @param cookies string of cookies (usually `document.cookie` if in browser)
 */
export const getCookie = (cookieName: string, cookies: string): string | undefined => {
  // https://stackoverflow.com/a/15724300
  const value = `; ${cookies}`;
  const parts = value.split(`; ${cookieName}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift();
};

export const isValidCookie = (cookieName: string, cookies: string): boolean => {
  const cookie = getCookie(cookieName, cookies);
  return cookie !== null && cookie !== undefined;
};

/** Client/Browser only */
export const deleteCookie = (cookieName: string): void => {
  setCookie({ cookieName, cookieValue: "", removeCookie: true });
};
