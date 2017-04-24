/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


const fs = require('fs');
const path = require('path');
const util = require('util');
const sourceMap = require('source-map');
const chalk = require('chalk');

function loadFile(fileName) {
  try {
    const filePath = path.resolve(fileName);
    const fileData = fs.readFileSync(filePath).toString();
    process.stdout.write(chalk.green(`Loaded ${fileName} \n`));
    return fileData;
  } catch (e) {
    process.stdout.write(chalk.bold.red(`Error loading ${fileName}\n`));
    process.stdout.write(chalk.bold.red(util.format(e)));
    process.on('exit', () => process.exit(1));
  }
  return undefined;
}

function consumeSourceMap(sourceMapData) {
  const mapConsumer = new sourceMap.SourceMapConsumer(sourceMapData);
  return {
    mapConsumer,
  };
}

function printSourceLine(mapConsumer, orgPos) {
  const src = mapConsumer.sourceContentFor(orgPos.source);
  const lines = src.split('\n');
  const line = lines[orgPos.line - 1];

  process.stdout.write(
    chalk.bold.green(`${line} \n`)
  );
}

function printOriginalPosition(mapConsumer, frame, printSourceLineFlag) {
  const orgPos = mapConsumer.originalPositionFor({ line: frame.line, column: frame.column });
  process.stdout.write(
    chalk.bold.red(`  at ${name} `) + chalk.cyan(`(${orgPos.source}:${orgPos.line}:${orgPos.column}) \n`)
  );

  if (printSourceLineFlag) {
    printSourceLine(mapConsumer, orgPos);
  }
}

function runSourceMapResolver(argv) {
  const mapFile = loadFile(argv.mapFile);
  const { mapConsumer } = consumeSourceMap(mapFile);

  const errorEventFile = loadFile(argv.errorEventFile);
  const { stackInfo } = JSON.parse(errorEventFile);
  const { stack } = stackInfo;

  process.stdout.write(
    chalk.bold.red(`\n${stackInfo.name}: ${stackInfo.message} \n`)
  );
  stack.forEach(frame => printOriginalPosition(mapConsumer, frame));
}

module.exports = runSourceMapResolver;
