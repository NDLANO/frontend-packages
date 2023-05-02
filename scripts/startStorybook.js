const path = require('path');

const runCommand = require('./runCommand');

const isWindows = process.platform === 'win32';
const storybook = isWindows ? 'start-storybook.cmd' : 'start-storybook';
const storybookCmd = path.resolve(__dirname, `../node_modules/.bin/${storybook}`);

runCommand(storybookCmd, ['-p', 6006, '--ci', '--quiet'], path.resolve('./'));
