const path = require('path');

const runCommand = require('./runCommand');

const isWindows = process.platform === 'win32';
const storybook = isWindows ? 'build-storybook.cmd' : 'build-storybook';
const storybookCmd = path.resolve(__dirname, `../packages/ndla-ui/node_modules/.bin/${storybook}`);
const outputDir = path.resolve(__dirname, '../.out/');

runCommand(storybookCmd, ['-o', outputDir], path.resolve(__dirname, '../packages/ndla-ui/'));
