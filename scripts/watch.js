/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const chokidar = require('chokidar');
const chalk = require('chalk');
const babel = require('babel-core');
const fs = require('fs');
const path = require('path');

// const SRC_DIR = 'src';
// const JS_FILES_PATTERN = '**/*.js';
const IGNORE_PATTERN = '**/__tests__/**';
const PACKAGES_DIR = path.resolve(__dirname, '..', './packages');

const babelOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', '.babelrc'), 'utf8'));
babelOptions.babelrc = false;

// Initialize watcher.
const watcher = chokidar.watch('packages/ndla-editor/src/**/*.js*', {
  ignored: [/(^|[/\\])\../, IGNORE_PATTERN],
  persistent: true,
});


function getDestPath(packageBuildPath, relativeToSrcPath) {
  const destPath = path.resolve(packageBuildPath, relativeToSrcPath);
  if (destPath.indexOf('.jsx') > -1) {
    return destPath.substring(0, destPath.length - 1);
  }
  return destPath;
}

function buildFile(file) {
  // log(`File ${file} has been changed`);
  const packageName = path.relative(PACKAGES_DIR, file).split(path.sep)[0];
  const packageSrcPath = path.resolve(PACKAGES_DIR, packageName, 'src');
  const packageBuildPath = path.resolve(PACKAGES_DIR, packageName, 'lib');
  const relativeToSrcPath = path.relative(packageSrcPath, file);
  // const destPath = path.resolve(packageBuildPath, relativeToSrcPath);
  const destPath = getDestPath(packageBuildPath, relativeToSrcPath);
  const transformed = babel.transformFileSync(file, babelOptions).code;
  fs.writeFileSync(destPath, transformed);
  process.stdout.write(`${chalk.green('  \u2022 ') + path.relative(PACKAGES_DIR, file) + chalk.green(' \u21D2 ') + path.relative(PACKAGES_DIR, destPath)}\n`);
}
// Add event listeners.
watcher
  .on('add', p => console.log(`File ${p} has been added`))
  .on('change', buildFile)
  .on('unlink', p => console.log(`File ${p} has been removed`));
