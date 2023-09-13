import { join } from 'path';
import spawn from 'cross-spawn';
import { sync } from 'glob';

const [executor, ignoredBin, script, ...args] = process.argv;

function attemptResolve(...resolveArgs) {
  try {
    return require.resolve(...resolveArgs);
  } catch (error) {
    return null;
  }
}

function handleSignal(result) {
  if (result.signal === 'SIGKILL' || result.signal === 'SIGTERM') {
    console.log(`The script "${script}" failed because the process exited too early with signal ${result.signal}.`);
  }
  process.exit(1);
}

function spawnScript() {
  const relativeScriptPath = join(__dirname, './scripts', script);
  const scriptPath = attemptResolve(relativeScriptPath);

  if (!scriptPath) {
    throw new Error(`Unknown script "${script}".`);
  }

  const result = spawn.sync(executor, [scriptPath, ...args], {
    stdio: 'inherit',
  });

  if (result.signal) {
    handleSignal(result);
  } else {
    process.exit(result.status);
  }
}

if (script) {
  spawnScript();
} else {
  const scriptsPath = join(__dirname, 'scripts/');
  const scriptsAvailable = sync(join(__dirname, 'scripts', '*'));
  const scriptsAvailableMessage = scriptsAvailable
    .map((s) => s.replace(scriptsPath, '').replace(/\.js$/, ''))
    .filter(Boolean)
    .join('\n  ')
    .trim();
  const fullMessage = `
Usage: ${ignoredBin} [script] [--flags]

Available Scripts:
  ${scriptsAvailableMessage}

Options:
  All options depend on the script. For most scripts you can assume that the args you pass will be forwarded to the respective tool that's being run under the hood.

  `.trim();
  console.log(`\n${fullMessage}\n`);
}
