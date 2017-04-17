/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


const fs = require('fs');
const path = require('path');
const sourceMap = require('source-map');
const chalk = require('chalk');

const stackTrace = require('./stacktrace.json');


function loadSourceMap(mapFile) {
  const mapFilePath = path.resolve(__dirname, mapFile);
  process.stdout.write(chalk.green(`Loading ${mapFile} \n`));
  const sourceMapData = fs.readFileSync(mapFilePath).toString();
  const mapConsumer = new sourceMap.SourceMapConsumer(sourceMapData);
  process.stdout.write(chalk.green(`Finished consuming ${mapFile} \n\n`));
  return {
    mapConsumer,
  };
}

function printOriginalPosition(orgPos) {
  process.stdout.write(
    chalk.bold.red(`  at ${orgPos.name} `) + chalk.cyan(`(${orgPos.source}:${orgPos.line}:${orgPos.column}) \n`)
  );
}

const { mapConsumer } = loadSourceMap('main.fa4ad8bb7fdf85c2f2a4.js.map');

const { stackInfo } = stackTrace;
const { stack } = stackInfo;

process.stdout.write(
  chalk.bold.red(`${stackInfo.name}: ${stackInfo.message} \n`)
);
stack.forEach(item => printOriginalPosition(mapConsumer.originalPositionFor(item)));
