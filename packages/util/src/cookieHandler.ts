export interface CookieParams {
  cookieName: string;
  cookieValue: string;
  removeCookie?: boolean;
  lax?: boolean;
  path?: string;
  expiration?: Date | string;
}

/** Client/Browser only */
export const setCookie = (params: CookieParams) => {
  document.cookie = getCookieString(params);
};

const getCookieExpiration = (expiration?: Date | string, removeCookie?: boolean): string => {
  if (expiration !== undefined) {
    if (typeof expiration === 'string') return `expires=${expiration}`;
    else return `expires=${expiration.toUTCString()}`;
  }

  if (removeCookie) {
    return 'Thu, 01 Jan 1970 00:00:01 GMT';
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
  path = '/',
  expiration,
}: CookieParams) => {
  const expires = getCookieExpiration(expiration, removeCookie);
  return `${cookieName}=${cookieValue}; ${expires}; SameSite=${lax ? 'Lax' : 'Strict'}; path=${path}`;
};

/**
 * Missing cookie returns `null`, Cookie without value returns `undefined` otherwise cookie value
 * @param cookieName name of cookie to fetch
 * @param cookies string of cookies (usually `document.cookie` if in browser)
 */
export const getCookie = (cookieName: string, cookies: string): string | undefined | null => {
  const value = `; ${cookies}`;
  const parts = value.split(`; ${cookieName}=`);
  const cookiePart = parts.pop();
  if (cookiePart) {
    return cookiePart.split(';').shift();
  }
  return null;
};

export const isValidCookie = (cookieName: string, cookies: string) => getCookie(cookieName, cookies) !== null;

/** Client/Browser only */
export const deleteCookie = (cookieName: string) => {
  setCookie({ cookieName, cookieValue: '', removeCookie: true });
};
