/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree. *
 */

export const illegalFormats = (files, allowedFiles) => {
  return files.filter(file => {
    const typeToArray = file.type.split('/');

    const fileTypeAllowed =
      allowedFiles.includes(file.type) ||
      allowedFiles.includes(`${typeToArray[0]}/*`) ||
      allowedFiles.includes(`.${typeToArray[1]}`);

    return !fileTypeAllowed;
  });
};

export const illegalEndings = (files, allowedFiles) => {
  return files.filter(file => {
    const fileEnding = file.name.split('.').pop();

    const fileEndingAllowed = allowedFiles.includes(`.${fileEnding}`);

    return !fileEndingAllowed;
  });
};

export const getIllegalFiles = (files, allowedFiles) => {
  const illegal = illegalFormats(files, allowedFiles);
  return illegalEndings(illegal, allowedFiles);
};
