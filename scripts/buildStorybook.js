const path = require('path');

const runCommand = require('./runCommand');

const isWindows = process.platform === 'win32';
const storybook = isWindows ? 'build-storybook.cmd' : 'build-storybook';
const storybookCmd = path.resolve(
  __dirname,
  `../packages/storybook/node_modules/.bin/${storybook}`,
);
let args = process.argv.slice(-2);

if (args[0] === '-o') {
  // hack to accommodate storybook-to-ghpages script
  args = [
    args[0],
    path.resolve(__dirname, '../packages/storybook/', `../../${args[1]}`),
  ];
}

runCommand(
  storybookCmd,
  args,
  path.resolve(__dirname, '../packages/storybook/'),
);
