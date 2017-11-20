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
const glob = require('glob');
const mkdirp = require('mkdirp');
const stringLength = require('string-length');
const getPackages = require('./_getPackages');

const PACKAGES_DIR = path.resolve(__dirname, '..', './packages');

const babelOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '..', '.babelrc'), 'utf8'),
);
babelOptions.babelrc = false;
const SRC_DIR = 'src';
const JS_FILES_PATTERN = '**/*.js*';
const IGNORE_PATTERN = '**/__tests__/**';
const OK = chalk.reset.inverse.bold.green(' DONE ');

const adjustToTerminalWidth = str => {
  const columns = process.stdout.columns || 80;
  const width = columns - stringLength(OK) + 1;
  const strs = str.match(new RegExp(`(.{1,${width}})`, 'g'));
  let lastString = strs[strs.length - 1];
  if (lastString.length < width) {
    lastString += Array(width - lastString.length).join(chalk.dim('.'));
  }
  return strs
    .slice(0, -1)
    .concat(lastString)
    .join('\n');
};

function resolveDestPath(file) {
  const packageName = path.relative(PACKAGES_DIR, file).split(path.sep)[0];
  const packageSrcPath = path.resolve(PACKAGES_DIR, packageName, SRC_DIR);
  const packageBuildPath = path.resolve(PACKAGES_DIR, packageName, 'es');
  const relativeToSrcPath = path.relative(packageSrcPath, file);
  const destPath = path.resolve(packageBuildPath, relativeToSrcPath);

  if (destPath.indexOf('.jsx') > -1) {
    // JSX file should be transformed to js files
    return destPath.substring(0, destPath.length - 1);
  }
  return destPath;
}

function removeBuildFile(file) {
  const destPath = resolveDestPath(file);
  fs.unlinkSync(destPath);
  process.stdout.write(
    `${chalk.red('\u2022 ') +
      chalk.red('Deleted \u21D2  ') +
      path.relative(PACKAGES_DIR, destPath)}\n`,
  );
}

function buildFile(file, silent) {
  const destPath = resolveDestPath(file);
  mkdirp.sync(path.dirname(destPath));
  try {
    const transformed = babel.transformFileSync(file, babelOptions).code;
    fs.writeFileSync(destPath, transformed);
    if (!silent) {
      process.stdout.write(
        `${chalk.green('\u2022 ') +
          path.relative(PACKAGES_DIR, file) +
          chalk.green(' \u21D2  ') +
          path.relative(PACKAGES_DIR, destPath)}\n`,
      );
    }
  } catch (e) {
    process.stdout.write(`${chalk.red('\u2022 ') + chalk.red(e)}\n`);
  }
}

function buildNodePackage(p) {
  const srcDir = path.resolve(p, SRC_DIR);
  const pattern = path.resolve(srcDir, JS_FILES_PATTERN);
  const files = glob.sync(pattern, {
    nodir: true,
    ignore: [IGNORE_PATTERN],
  });

  process.stdout.write(adjustToTerminalWidth(`${path.basename(p)}`));

  files.forEach(file => buildFile(file, true));
  process.stdout.write(`${OK}\n`);
}

function buildPackages() {
  const packages = getPackages();
  process.stdout.write(chalk.inverse('Building packages \n'));
  packages.forEach(buildNodePackage);
  process.stdout.write('\n');
}

if (process.argv[2] === 'packages') {
  buildPackages();
}

module.exports = {
  buildPackages,
  removeBuildFile,
  buildFile,
};
