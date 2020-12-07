export const isPathToHighlight = (
  path: string,
  href: string | false | null,
): boolean => {
  const regexForPath = new RegExp(`^(/.*)?${path}$`);
  return regexForPath.test(href || '');
};
