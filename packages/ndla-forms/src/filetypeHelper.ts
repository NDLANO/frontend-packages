/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export const illegalFormats = (files: File[], allowedFiles: string[]) => {
  return files.filter((file) => {
    const [type, subtype] = file.type.split("/");

    const fileTypeAllowed =
      allowedFiles.includes(file.type) || allowedFiles.includes(`${type}/*`) || allowedFiles.includes(`.${subtype}`);

    return !fileTypeAllowed;
  });
};

export const illegalEndings = (files: File[], allowedFiles: string[]) => {
  return files.filter((file) => {
    const fileEnding = file.name.split(".").pop();

    const fileEndingAllowed = allowedFiles.includes(`.${fileEnding}`);

    return !fileEndingAllowed;
  });
};

export const getIllegalFiles = (files: File[], allowedFiles: string[]) => {
  const illegal = illegalFormats(files, allowedFiles);
  return illegalEndings(illegal, allowedFiles);
};
