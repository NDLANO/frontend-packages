import { ListItemType } from './ListView';

const activeAlphabet = (items: ListItemType[]) => {
  const letters: Record<string, boolean> = {};
  'abcdefghijklmnopqrstuvxyzæøå'.split('').forEach((letter) => {
    letters[letter] = false;
  });
  items.forEach((item) => {
    letters[item.name.charAt(0).toLowerCase()] = true;
  });
  return letters;
};

export { activeAlphabet as default };
