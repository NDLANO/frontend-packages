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

const packagePatterns = getPackages().map(p =>
  path.resolve(p, SRC_DIR, JS_FILES_PATTERN),
);

// Initialize watcher
const watcher = chokidar.watch(packagePatterns, {
  ignored: [IGNORE_PATTERN],
});

watcher
  .on('change', buildFile)
  .on('ready', () => {
    // Attach add event listner after initial scan is completed.
    watcher.on('add', buildFile);
  })
  .on('unlink', removeBuildFile);

process.stdout.write(
  `${chalk.red('-> ') + chalk.cyan('Watching for changes...')}\n`,
);
