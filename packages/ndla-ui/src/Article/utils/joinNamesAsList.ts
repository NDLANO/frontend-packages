type ListOptions = {
  conjunction: string;
};

export const joinNamesAsList = (names: string[], options: ListOptions) => {
  let joinedNames = '';

  names.forEach((name, i) => {
    if (i === 0) {
      joinedNames += name;
    } else if (i === names.length - 1) {
      joinedNames += ` ${options.conjunction} ${name}`;
    } else {
      joinedNames += `, ${name}`;
    }
  });

  return joinedNames;
};
