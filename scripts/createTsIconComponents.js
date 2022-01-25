const fs = require('fs');
const cheerio = require('cheerio');
const camelcase = require('camelcase');
const glob = require('glob');
const path = require('path');
const chalk = require('chalk');
const rimraf = require('rimraf');
const prettier = require('prettier');
const prettierOptions = require('../.prettierrc');

const rootDir = path.join(__dirname, '..', 'packages', 'ndla-icons');
const attrs = ['xlink:href', 'id'];

const copyright = fs.readFileSync(path.join(__dirname, '..', 'COPYRIGHT'), 'utf-8');
const autoNotice = '// N.B! AUTOGENERATED FILE. DO NOT EDIT';

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.substring(1);
}

function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

function cleanAttributes($el, $) {
  attrs.forEach((attr) => {
    $el.removeAttr(attr);
  });
  if ($el.children().length === 0) {
    return false;
  }

  $el.children().each((index, el) => {
    cleanAttributes($(el), $);
  });
  return true;
}

function camelCaseAttributes($el, $) {
  Object.keys($el[0].attribs).forEach((attr) => {
    if ($el[0].name !== 'svg' && attr.indexOf('-') > 0 && !attr.startsWith('data-')) {
      const value = $el[0].attribs[attr];
      $el.removeAttr(attr);
      const camelCaseAttr = attr
        .split('-')
        .map((token, i) => (i === 0 ? token : capitalize(token)))
        .join('');
      $el.attr(camelCaseAttr, value);
    }
    if (attr === 'class') {
      const value = $el[0].attribs[attr];
      $el.removeAttr(attr);
      $el.attr('className', value);
    }
  });

  if ($el.children().length === 0) {
    return false;
  }

  $el.children().each((index, el) => {
    camelCaseAttributes($(el), $);
  });
  return true;
}

function createComponent(name, svg) {
  const $ = cheerio.load(svg, {
    xmlMode: true,
  });
  const $svg = $('svg');
  const viewBox = $svg.attr('viewBox');
  const license = $svg.attr('data-license');
  const source = $svg.attr('data-source');
  if (!license || !source) {
    return undefined;
  }

  cleanAttributes($svg, $);
  camelCaseAttributes($svg, $);

  const iconSvg = $svg.html();
  return prettier.format(
    `${copyright}
${autoNotice}
import React, { ReactNode } from 'react';
import Icon, { Props as IconProps } from '../Icon';

interface Props extends IconProps {
  children?: ReactNode;
}

const ${name} = (props: Props) => (
  <Icon
    viewBox="${viewBox}"
    data-license="${license}"
    data-source="${source}"
    {...props}>
    <g>
      ${iconSvg}
    </g>
  </Icon>
);

export default ${name};
`,
    {
      ...prettierOptions,
      parser: 'babel',
    },
  );
}

function writeIndexFiles(types) {
  Object.keys(types).forEach((folder) => {
    const components = types[folder];
    const exportsString = components
      .map((component) => `export { default as ${component} } from './${component}';`)
      .join('\n');
    const iconsModule = `${copyright}
${autoNotice}
${exportsString}\n`;
    const formatedIconsModule = prettier.format(iconsModule, {
      ...prettierOptions,
      parser: 'babel',
    });
    const fileName = path.join(rootDir, 'src', folder, 'index.ts');
    fs.writeFileSync(fileName, formatedIconsModule, 'utf-8');
    console.log(`${chalk.green(`CREATED`)} ${chalk.dim(path.join(rootDir, 'src'))}${chalk.bold(`${folder}/index.ts`)}`);
  });
}

function writePackageFiles(types) {
  Object.keys(types).forEach((folder) => {
    const iconsModule = `
{
  "name": "@ndla/icons${folder}",
  "private": true,
  "main": "../lib${folder}/index.js",
  "module": "../es${folder}/index.js",
  "jsnext:main": "../es${folder}/index.js"
}
    `;

    const fileName = path.join(rootDir, folder, 'package.json');
    ensureDirectoryExistence(fileName);
    fs.writeFileSync(fileName, iconsModule, 'utf-8');

    console.log(`${chalk.green(`CREATED`)} ${chalk.dim(path.join(rootDir))}${chalk.bold(`${folder}/package.json`)}`);
  });
}

function deleteComponents() {
  console.log(`${chalk.yellow.bold(`Deleting generted icon components...`)}`);
  const isDirectory = (source) => fs.lstatSync(source).isDirectory();
  const getDirectories = (source) =>
    fs
      .readdirSync(source)
      .map((name) => path.join(source, name))
      .filter(isDirectory);
  getDirectories(path.join(rootDir, 'src')).forEach((directory) => {
    console.log(`${chalk.yellow(`Deleted`)} ${chalk.dim(`${directory}/*`)}`);
    rimraf.sync(`${directory}/*`);
  });
}

function createComponents() {
  console.log(`${chalk.green.bold(`Generted icon components...`)}`);
  const failed = [];
  glob(`${rootDir}/svg/*/*.svg`, (err, icons) => {
    const types = {};
    icons.forEach((iconPath) => {
      const id = path.basename(iconPath, '.svg');
      const svg = fs.readFileSync(iconPath, 'utf-8');
      const folder = iconPath.replace(path.join(`${rootDir}/`, 'svg'), '').replace(`/${path.basename(iconPath)}`, '');
      const name = capitalize(camelcase(id));
      const componentPath = path.join(folder, `${name}.tsx`);

      if (!types[folder]) {
        types[folder] = [];
      }
      types[folder].push(name);

      const component = createComponent(name, svg);
      if (component) {
        const dest = path.join(rootDir, 'src', componentPath);
        ensureDirectoryExistence(dest);
        fs.writeFileSync(dest, component, 'utf-8');
        console.log(`${chalk.green(`CREATED`)} ${chalk.dim(path.join(rootDir, 'src'))}${chalk.bold(componentPath)}`);
      } else {
        failed.push(path.join(rootDir, 'src', componentPath));
        console.log(`${chalk.red(`Failed`)} ${chalk.dim(path.join(rootDir, 'src'))}${chalk.bold(componentPath)}`);
        console.log('No data-license or data-source attribute on <svg>');
      }
    });
    writeIndexFiles(types);
    writePackageFiles(types);

    if (failed.length > 0) {
      console.log(`${chalk.red.bold(`N.B. Failed to generate ${failed.length} icons.`)} `);
      console.log(chalk.dim(`See output for details.`));
    } else {
      console.log(`${chalk.green.bold(`🏁  Finished without errors.`)}`);
    }
  });
}

deleteComponents();
createComponents();
