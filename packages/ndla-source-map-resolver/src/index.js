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
  const sourceMapData = fs.readFileSync(mapFilePath).toString();
  const mapConsumer = new sourceMap.SourceMapConsumer(sourceMapData);
  return {
    mapConsumer,
  };
}

function printOriginalPosition(orgPos) {
  // console.log(`at ${orgPos.name} (${orgPos.source}:${orgPos.line}:${orgPos.column}) `);
  process.stdout.write(
    chalk.red(`at ${orgPos.name} (${orgPos.source}:${orgPos.line}:${orgPos.column}) \n`)
  );
}

const { mapConsumer } = loadSourceMap('main.fa4ad8bb7fdf85c2f2a4.js.map');

const { stackInfo: { stack } } = stackTrace;
stack.forEach(item => printOriginalPosition(mapConsumer.originalPositionFor(item)));
