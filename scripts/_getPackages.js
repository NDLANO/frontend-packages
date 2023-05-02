/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const fs = require('fs');
const path = require('path');

const PACKAGES_DIR = path.resolve(__dirname, '..', './packages');

// Get absolute paths of all directories under packages/*
function getPackages() {
  return fs
    .readdirSync(PACKAGES_DIR)
    .map((file) => path.resolve(PACKAGES_DIR, file))
    .filter((f) => fs.lstatSync(path.resolve(f)).isDirectory())
    .filter(
      (f) =>
        f.indexOf('ndla-scripts') === -1 && f.indexOf('types-embed') === -1 && f.indexOf('eslint-config-ndla') === -1,
    ); // skip private, config and script packages
}

module.exports = getPackages;
