export const isPathToHighlight = (
  path: string,
  href: string | false | null,
): boolean => {
  const regexForPath = new RegExp(`^(/.*)?/subjects${path}$`);
  return regexForPath.test(href || '');
};
