const fs = require('fs');
const cheerio = require('cheerio');
const camelcase = require('camelcase');
const capitalize = require('capitalize');
const glob = require('glob');
const path = require('path');
const chalk = require('chalk');
const prettier = require('prettier');

const rootDir = path.join(__dirname, '..', 'packages', 'ndla-icons');
const attrs = ['xlink:href', 'clip-path', 'fill-opacity', 'fill'];

function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

function cleanAtrributes($el, $) {
  attrs.forEach(attr => {
    $el.removeAttr(attr);
  });
  if ($el.children().length === 0) {
    return false;
  }

  $el.children().each((index, el) => {
    cleanAtrributes($(el), $);
  });
  return true;
}

function createComponent(name, svg) {
  const $ = cheerio.load(svg, {
    xmlMode: true,
  });
  const $svg = $('svg');
  const viewBox = $svg.attr('viewBox');
  cleanAtrributes($svg, $);
  const iconSvg = $svg.html();
  return prettier.format(
    `import React from 'react'
import Icon from 'react-icon-base'

const ${name} = props => (
  <Icon viewBox="${viewBox}" {...props}>
    <g>${iconSvg}</g>
  </Icon>
)

export default ${name}
`,
    {
      jsxBracketSameLine: true,
      singleQuote: true,
      trailingComma: 'all',
    },
  );
}

function writeIndexFiles(types) {
  Object.keys(types).forEach(folder => {
    const components = types[folder];
    const iconsModule = `${components
      .map(
        component =>
          `export { default as ${component} } from './${component}';`,
      )
      .join('\n')}\n`;

    const fileName = path.join(rootDir, 'src', folder, 'index.js');
    fs.writeFileSync(fileName, iconsModule, 'utf-8');
    console.log(
      `${chalk.green(`CREATED`)} ${chalk.dim(
        path.join(rootDir, 'src'),
      )}${chalk.bold(`${folder}/index.js`)}`,
    );
  });
}

glob(`${rootDir}/svg/*/*.svg`, (err, icons) => {
  const types = {};
  icons.forEach(iconPath => {
    const id = path.basename(iconPath, '.svg');
    const svg = fs.readFileSync(iconPath, 'utf-8');
    const folder = iconPath
      .replace(path.join(`${rootDir}/`, 'svg'), '')
      .replace(`/${path.basename(iconPath)}`, '');
    const name = capitalize(camelcase(id));
    const componentPath = path.join(folder, `${name}.js`);

    if (!types[folder]) {
      types[folder] = [];
    }
    types[folder].push(name);

    const component = createComponent(name, svg);
    const dest = path.join(rootDir, 'src', componentPath);
    ensureDirectoryExistence(dest);
    fs.writeFileSync(dest, component, 'utf-8');
    console.log(
      `${chalk.green(`CREATED`)} ${chalk.dim(
        path.join(rootDir, 'src'),
      )}${chalk.bold(componentPath)}`,
    );
  });
  writeIndexFiles(types);
});
