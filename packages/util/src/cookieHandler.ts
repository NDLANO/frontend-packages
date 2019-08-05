export const setCookie = (cookieName:string, cookieValue:string, removeCookie:boolean) => {
  let expires;
  if (removeCookie) {
    expires = 'Thu, 01 Jan 1970 00:00:01 GMT';
  } else {
    const d = new Date();
    d.setTime(d.getTime() + 9999 * 24 * 60 * 60 * 1000);
    expires = `expires=${d.toUTCString()}`;
  }
  document.cookie = `${cookieName}=${cookieValue}; ${expires}; path=/`;
};

export const getCookie = (cookieName:string, cookies:string) => {
  const value = `; ${cookies}`;
  const parts:Array<any> = value.split(`; ${cookieName}=`);
  if (parts.length > 1) {
    return parts
      .pop()
      .split(';')
      .shift();
  }
  return null;
};

export const isValidCookie = (cookieName:string, cookies:string) =>
  getCookie(cookieName, cookies) !== null;

export const deleteCookie = (cookieName:string) => {
  setCookie(cookieName, '', true);
};