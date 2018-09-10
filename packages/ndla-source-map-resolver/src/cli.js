const yargs = require('yargs');
const util = require('util');
const chalk = require('chalk');
const runSourceMapResolver = require('./index');

const args = {
  options: {
    mapFiles: {
      alias: 'm',
      description: 'List of paths to source map files',
      type: 'array',
    },
    errorEventFile: {
      alias: 'e',
      description: 'Path to error event file',
      type: 'string',
    },
  },
  usage:
    'Usage: $0 --mapFiles <pathToMapFile1> <pathToMapFile2> --errorEventFile <pathToErrorEventFile>',
  docs:
    'Documentation:\nhttps://github.com/NDLANO/frontend-packages/tree/ndla-source-map-resolver/packages/ndla-source-map-resolver',
};

async function run(programArgs) {
  const { argv } = yargs(programArgs || process.argv.slice(2))
    .usage(args.usage)
    .help('h')
    .alias('help', 'h')
    .options(args.options)
    .demandOption(['errorEventFile'])
    .epilogue(args.docs)
    .wrap(Math.min(100, process.stdout.columns));

  if (argv.help) {
    yargs.showHelp();
    process.on('exit', () => process.exit(1));
  }

  try {
    await runSourceMapResolver(argv);
  } catch (e) {
    process.stdout.write(chalk.bold.red(util.format(e)));
    process.on('exit', () => process.exit(1));
  }
}
exports.run = run;
