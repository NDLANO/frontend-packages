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
const SourceMap = require('source-map');
const chalk = require('chalk');
const parseUrl = require('parse-url');
const fetch = require('node-fetch');
const ora = require('ora');

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

async function consumeSourceMap(sourceMapData) {
  const mapConsumer = await new SourceMap.SourceMapConsumer(sourceMapData);
  return mapConsumer;
}

function printSourceLine(mapConsumer, orgPos) {
  const src = mapConsumer.sourceContentFor(orgPos.source);
  const lines = src.split('\n');
  const line = lines[orgPos.line - 1];

  process.stdout.write(chalk.bold.green(`${line} \n`));
}

function printOriginalPosition(sourceMaps, frame, printSourceLineFlag) {
  const sourceMap = sourceMaps.find(map => frame.url.indexOf(map.name) !== -1);

  if (sourceMap) {
    const orgPos = sourceMap.mapping.originalPositionFor({
      line: frame.line,
      column: frame.column,
    });
    process.stdout.write(
      chalk.bold.red(`  at ${orgPos.name} `) + chalk.cyan(`(${orgPos.source}:${orgPos.line}:${orgPos.column}) \n`),
    );

    if (printSourceLineFlag) {
      printSourceLine(sourceMap.mapping, orgPos);
    }
  } else {
    process.stdout.write(chalk.bold.red(`  at ${frame.func} `) + chalk.cyan(`(${frame.url}) \n`));
  }
}

async function fetchAssets(url) {
  const name = parseUrl(url)
    .pathname.split('/')
    .pop();
  const spinner = ora(`fetching ${name}`).start();
  const response = await fetch(url);
  const json = await response.json();
  spinner.succeed(`Fetched  ${name}`);
  return json;
}

async function fetchSourceMapFile(url) {
  const name = parseUrl(url)
    .pathname.split('/')
    .pop();
  const spinner = ora(`Fetching ${name}`).start();
  const response = await fetch(url);
  const text = await response.text();
  spinner.succeed(`Fetched  ${name}`);
  return text;
}

function getSourceMapFileNames(assets) {
  return Object.keys(assets).map(key => `${assets[key].js}.map`);
}

async function collectSourceMaps(argv, url) {
  if (argv.mapFiles) {
    return argv.mapFiles.map(mapFile => {
      const content = loadFile(mapFile);
      const name = path.basename(mapFile).replace('.map', '');
      const { mapConsumer } = consumeSourceMap(content);
      return {
        name,
        mapping: mapConsumer,
      };
    });
  }
  if (url) {
    const { resource, protocol, port } = parseUrl(url);
    const base = resource + (port ? `:${port}` : '');
    const assetsUrl = `${protocol}://${base}/static/assets.json`;
    const assets = await fetchAssets(assetsUrl);
    const sourceMapFileNames = getSourceMapFileNames(assets);
    return Promise.all(
      sourceMapFileNames.map(async fileName => {
        const urlToSourceMap = `${protocol}://${base}${fileName}`;
        const content = await fetchSourceMapFile(urlToSourceMap);
        const mapping = await consumeSourceMap(content);
        const name = path.basename(fileName).replace('.map', '');
        return {
          name,
          mapping,
        };
      }),
    );
  }

  throw new Error('No  sourcemaps to collect');
}

async function runSourceMapResolver(argv) {
  const data = JSON.parse(loadFile(argv.errorEventFile));
  const first = data.events[0];
  const {
    event: {
      json: { stackInfo },
    },
  } = first;
  const { url } = stackInfo.stack[0];
  const sourceMaps = await collectSourceMaps(argv, url);
  process.stdout.write(chalk.bold.red(`\n${stackInfo.name}: ${stackInfo.message} \n`));
  stackInfo.stack.forEach(frame => printOriginalPosition(sourceMaps, frame));
}

module.exports = runSourceMapResolver;
