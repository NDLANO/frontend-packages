const chalk = require('chalk');
const spawn = require('cross-spawn');

module.exports = function runCommand(cmd, args = [], cwd = __dirname) {
  const displayArgs = args.length > 25 ? `${args.slice(0, 25)}...` : args.join(' ');
  console.log(chalk.dim(`$ cwd "${cwd}"\n$ ${cmd} ${displayArgs}\n`));
  const result = spawn.sync(`"${cmd}"`, args, {
    cwd,
    shell: true,
    stdio: 'inherit',
  });
  if (result.error || result.status !== 0) {
    const message = 'Error running command.';
    const error = new Error(message);
    error.stack = message;
    throw error;
  }
};
