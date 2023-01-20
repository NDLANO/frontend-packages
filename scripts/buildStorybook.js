const path = require('path');

const runCommand = require('./runCommand');

const isWindows = process.platform === 'win32';
const storybook = isWindows ? 'build-storybook.cmd' : 'build-storybook';
const storybookCmd = path.resolve(__dirname, `../node_modules/.bin/${storybook}`);
const args = process.argv.slice(-2);

runCommand(storybookCmd, args, path.resolve(__dirname, path.resolve('./')));
