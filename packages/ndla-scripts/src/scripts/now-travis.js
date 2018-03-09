#!/usr/bin/env node

/**
 * Forked/Inspired by: https://github.com/kentcdodds/glamorous-website/blob/master/other/now-travis
 */

const github = require('octonode');
const spawn = require('cross-spawn');
const normalizeUrl = require('normalize-url');
const urlRegex = require('url-regex');
const awaitUrl = require('await-url');

if (!process.env.CI || !process.env.TRAVIS) {
  throw new Error('Could not detect Travis CI environment');
}

const {
  TRAVIS_BUILD_ID,
  TRAVIS_EVENT_TYPE,
  TRAVIS_PULL_REQUEST_SHA,
  TRAVIS_PULL_REQUEST,
  TRAVIS_COMMIT,
  TRAVIS_REPO_SLUG,
  TRAVIS_PULL_REQUEST_SLUG,
  TRAVIS_BRANCH,
} = process.env;
const { NOW_TOKEN: nowToken, GH_TOKEN: githubToken } = process.env;
const client = github.client(githubToken);
const ghRepo = client.repo(process.env.TRAVIS_REPO_SLUG);
const providedArgs = process.argv.slice(2);

function isFork() {
  if (!TRAVIS_PULL_REQUEST_SLUG) {
    return false;
  }
  const [prOwner] = TRAVIS_PULL_REQUEST_SLUG.split('/');
  const [owner] = TRAVIS_REPO_SLUG.split('/');

  return owner !== prOwner;
}

function getUrl(content) {
  const urls = content.match(urlRegex()) || [];

  return urls.map(url => normalizeUrl(url.trim().replace(/\.+$/, '')))[0];
}

function logError(message) {
  return function logIfError(error) {
    if (error) {
      console.log(message, error);
    }
  };
}

function safeify(s, safed = []) {
  if (safed.indexOf(s) !== -1) {
    return 'CIRCULAR';
  }
  safed.push(s);
  if (typeof s === 'string') {
    return s
      .split(nowToken)
      .join('NOW_TOKEN')
      .split(githubToken)
      .join('GITHUB_TOKEN');
  } else if (typeof s === 'object' && s !== null) {
    return Object.keys(s).reduce((acc, k) => {
      acc[k] = safeify(s, safed);
      return acc;
    }, {});
  }
  return s;
}

function safeLog(...args) {
  const safeArgs = args.map(s => safeify(s));
  console.log(...safeArgs);
}

function safeError(...args) {
  const safeArgs = args.map(s => safeify(s));
  console.error(...safeArgs);
}

function updateStatus(sha, options) {
  const { description, target_url: url } = options;
  console.log(`${description}: ${url}`);
  ghRepo.status(sha, options, logError('setting complete status'));
}

function onError(sha, err) {
  safeError(err);
  updateStatus(sha, {
    state: 'error',
    description: `▲ Now deployment failed. See Travis logs for details.`,
  });
}

function spawnPromise(sha, command, ...args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, ...args);
    let stdout = '';
    let stderr = '';
    child.stdout.on('data', data => {
      stdout += data;
      safeLog(String(data));
    });
    child.stderr.on('data', data => {
      safeError(String(data));
      stderr += String(safeify(data));
    });

    child.on('error', error => {
      onError(sha, error);
      reject(safeify(error));
    });

    child.on('close', () => {
      if (stderr) {
        reject(stderr);
      } else {
        resolve(stdout);
      }
    });
  });
}

function getAliasUrl() {
  const repoName = TRAVIS_REPO_SLUG.split('/')[1];
  if (TRAVIS_PULL_REQUEST === 'false') {
    return `https://${repoName}-master.ndla.sh`;
  }
  return `https://${repoName}-pr-${TRAVIS_PULL_REQUEST}.ndla.sh`;
}

async function spawnAlias(sha, deployUrl) {
  const newUrl = getAliasUrl();
  const cliArgs = ['alias', '--token', nowToken, deployUrl, newUrl];
  safeLog('spawning shell with command:', `now ${cliArgs.join(' ')}`);
  await spawnPromise(sha, 'now', cliArgs);
  return newUrl;
}

async function spawnDeploy(sha) {
  const cliArgs = [
    '--token',
    nowToken,
    '--no-clipboard',
    '--npm',
    ...providedArgs,
  ];
  safeLog('spawning shell with command:', `now ${cliArgs.join(' ')}`);
  const result = await spawnPromise(sha, 'now', cliArgs);
  return getUrl(result);
}

async function deploy(sha) {
  if (isFork()) {
    console.log(`▲ Now deployment is skipped for forks...`);
    return;
  }

  if (!githubToken) {
    throw new Error('Missing required environment variable GH_TOKEN');
  }

  if (!nowToken) {
    throw new Error('Missing required environment variable NOW_TOKEN');
  }
  let targetUrl = `https://travis-ci.org/${TRAVIS_REPO_SLUG}/builds/${TRAVIS_BUILD_ID}`;

  updateStatus(sha, {
    target_url: targetUrl,
    state: 'pending',
    description: `▲ Now deployment pending`,
  });

  const result = await spawnDeploy(sha);
  targetUrl = getUrl(result);

  updateStatus(sha, {
    target_url: targetUrl,
    state: 'pending',
    description: `▲ Now deployment build started...`,
  });

  console.log(
    `🤠 Alrighty, deploy started. Now we're going to ping ${targetUrl} until it's ready!`,
  );

  // check on the site for ~20 minutes every 10 seconds
  await awaitUrl(targetUrl, { interval: 10000, tries: 119 }).catch(err => {
    console.error('Error waiting for the deployment to be ready.');
    onError(sha, err);
    throw err;
  });

  console.log(`💪 Deploy finished! Now we're going to alias to ndla.sh`);

  targetUrl = await spawnAlias(sha, targetUrl);

  console.log(`🔗 It's linked and ready for use!`);

  updateStatus(sha, {
    target_url: targetUrl,
    state: 'success',
    description: `▲ Now deployment complete`,
  });

  console.log('🏁 All done!');
}

switch (TRAVIS_EVENT_TYPE) {
  case 'pull_request': {
    deploy(TRAVIS_PULL_REQUEST_SHA);
    break;
  }
  case 'push': {
    if (TRAVIS_PULL_REQUEST !== 'false' || TRAVIS_BRANCH === 'master') {
      deploy(TRAVIS_COMMIT);
    } else {
      console.log(`Skip deploy of commits not updating a PR`);
    }
    break;
  }
  default: {
    console.log(`${TRAVIS_EVENT_TYPE} is not supported by now-travis`);
  }
}
