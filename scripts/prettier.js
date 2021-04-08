const path = require('path');
const chalk = require('chalk');

const runCommand = require('./runCommand');

const shouldWrite = process.argv[2] === 'write';
const isWindows = process.platform === 'win32';
const prettier = isWindows ? 'prettier.cmd' : 'prettier';
const prettierCmd = path.resolve(__dirname, `../node_modules/.bin/${prettier}`);

const args = [].concat(`--${shouldWrite ? 'write' : 'l'}`, '"**/*(*.js|*.jsx|*.md|*.ts|*.tsx)"');

try {
  runCommand(prettierCmd, args, path.resolve(__dirname, '..'));
} catch (e) {
  if (!shouldWrite) {
    // prettier-ignore
    console.log(
      `${chalk.red(`\nThis project uses prettier to format all JavaScript code.\n`) +
        chalk.dim(`Please run `) +
        chalk.reset('yarn format') +
        chalk.dim(` and add changes to files listed above to your commit.`)
       }\n`
    );
    process.exitCode = 1;
  }
}
