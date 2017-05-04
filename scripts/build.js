/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const chalk = require('chalk');
const babel = require('babel-core');
const fs = require('fs');
const path = require('path');

const PACKAGES_DIR = path.resolve(__dirname, '..', './packages');

const babelOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', '.babelrc'), 'utf8'));
babelOptions.babelrc = false;


function resolveDestPath(file) {
  const packageName = path.relative(PACKAGES_DIR, file).split(path.sep)[0];
  const packageSrcPath = path.resolve(PACKAGES_DIR, packageName, 'src');
  const packageBuildPath = path.resolve(PACKAGES_DIR, packageName, 'lib');
  const relativeToSrcPath = path.relative(packageSrcPath, file);
  const destPath = path.resolve(packageBuildPath, relativeToSrcPath);

  if (destPath.indexOf('.jsx') > -1) { // JSX file should be transformed to js files
    return destPath.substring(0, destPath.length - 1);
  }
  return destPath;
}

function removeBuildFile(file) {
  const destPath = resolveDestPath(file);
  fs.unlinkSync(destPath);
  process.stdout.write(`${chalk.red('\u2022 ') + chalk.red('Deleted \u21D2  ') + path.relative(PACKAGES_DIR, destPath)}\n`);
}

function buildFile(file) {
  const destPath = resolveDestPath(file);
  try {
    const transformed = babel.transformFileSync(file, babelOptions).code;
    fs.writeFileSync(destPath, transformed);
    process.stdout.write(`${chalk.green('\u2022 ') + path.relative(PACKAGES_DIR, file) + chalk.green(' \u21D2  ') + path.relative(PACKAGES_DIR, destPath)}\n`);
  } catch (e) {
    process.stdout.write(`${chalk.red('\u2022 ') + chalk.red(e)}\n`);
  }
}

module.exports = {
  removeBuildFile,
  buildFile,
};
