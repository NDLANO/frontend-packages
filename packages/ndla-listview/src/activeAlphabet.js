const activeAlphabet = (items) => {
  const letters = {};
  'abcdefghijklmnopqrstuvxyzæøå'.split('').forEach((letter) => {
    letters[letter] = false;
  });
  items.forEach((item) => {
    letters[item.name.charAt(0).toLowerCase()] = true;
  });
  return letters;
};

export { activeAlphabet as default };
