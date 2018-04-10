/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const chokidar = require('chokidar');
const chalk = require('chalk');
const path = require('path');
const { buildFile, removeBuildFile } = require('./build');
const getPackages = require('./_getPackages');

const SRC_DIR = 'src';
const JS_FILES_PATTERN = '**/*.js*';
const IGNORE_PATTERN = '**/__tests__/**';
const winRegExp = new RegExp(/\\/g);

const packagePatterns = getPackages().map(p => {
  // Handle path formatting on Windows
  if (process.platform === 'win32' && process.argv.indexOf('--wincmd') < 0) {
    // On windows the seperator will become \\ and if ran on any terminal that is not
    // Window's default cmd.exe won't work. @TODO add exception if someone actually wants to use cmd.exe?
    const replacedP = p.replace(winRegExp, '/');
    const pathArr = [replacedP, SRC_DIR, JS_FILES_PATTERN];
    return pathArr.join('/');
  }
  return path.resolve(p, SRC_DIR, JS_FILES_PATTERN);
});

// Initialize watcher
const watcher = chokidar.watch(packagePatterns, {
  ignored: [IGNORE_PATTERN],
});

const handlBuildFile = file => {
  buildFile(file, 'es');
  buildFile(file, 'lib', {
    plugins: ['transform-es2015-modules-commonjs'],
  });
};

watcher
  .on('change', handlBuildFile)
  .on('ready', () => {
    // Attach add event listner after initial scan is completed.
    watcher.on('add', handlBuildFile);
  })
  .on('unlink', file => {
    removeBuildFile(file, 'es');
    removeBuildFile(file, 'lib');
  });

process.stdout.write(
  `${chalk.red('-> ') + chalk.cyan('Watching for changes...')}\n`,
);
