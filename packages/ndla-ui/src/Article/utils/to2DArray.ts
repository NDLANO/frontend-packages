export const to2DArray = <T>(src: T[], col: number): Array<T[]> => {
  const cp = [...src];
  const rows: Array<T[]> = [];
  while (cp.length) rows.push(cp.splice(0, col));
  return rows;
};
