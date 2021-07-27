#!/usr/bin/env node

/**
 * Forked/Inspired by: https://github.com/kentcdodds/glamorous-website/blob/master/other/now-travis
 */

const github = require('octonode');
const spawn = require('cross-spawn-promise');
const normalizeUrl = require('normalize-url');
const urlRegex = require('url-regex');

if (!process.env.CI || !process.env.GITHUB_ACTIONS) {
  throw new Error('Could not detect Github Actions CI environment');
}

const {
  GH_PR_NUMBER,
  GH_PR_REPO,
  GH_PR_SHA,
  GITHUB_EVENT_NAME,
  GITHUB_REF,
  GITHUB_REPOSITORY,
  GITHUB_RUN_ID,
  GITHUB_SERVER_URL,
  GITHUB_SHA,
} = process.env;
const { NOW_TOKEN: nowToken, GH_TOKEN: githubToken } = process.env;
const client = github.client(githubToken);
const ghRepo = client.repo(GITHUB_REPOSITORY);
const providedArgs = process.argv.slice(2);

function isFork() {
  if (!GH_PR_REPO) {
    return false;
  }
  const [prOwner] = GH_PR_REPO.split('/');
  const [owner] = GITHUB_REPOSITORY.split('/');

  return owner !== prOwner;
}

function getUrl(content) {
  const urls = content.match(urlRegex()) || [];

  return urls.map(url => normalizeUrl(url.trim().replace(/\.+$/, '')))[0];
}

function logError(message) {
  return function logIfError(error) {
    if (error) {
      const util = require('util');
      console.log(util.inspect(message, false, null, true));
      console.log(util.inspect(error, false, null, true));
      // console.log(message, error);
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
  }
  if (typeof s === 'object' && s !== null) {
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
    description: `▲ Now deployment failed. See github-actions logs for details.`,
  });
}

function getAliasUrl() {
  const repoName = GITHUB_REPOSITORY.split('/')[1];
  if (GH_PR_NUMBER === '') {
    return `https://${repoName}-master.ndla.sh`;
  }
  return `https://${repoName}-pr-${GH_PR_NUMBER}.ndla.sh`;
}

async function spawnAlias(sha, deployUrl) {
  const newUrl = getAliasUrl();
  const cliArgs = ['alias', '--token', nowToken, deployUrl, newUrl];
  safeLog('spawning shell with command:', `now ${cliArgs.join(' ')}`);
  try {
    await spawn('now', cliArgs);
  } catch (error) {
    onError(sha, error);
    throw error;
  }
  return newUrl;
}

async function spawnDeploy(sha) {
  const cliArgs = ['--token', nowToken, '--no-clipboard', '--regions', 'bru1', ...providedArgs];
  safeLog('spawning shell with command:', `now ${cliArgs.join(' ')}`);
  try {
    const result = await spawn('now', cliArgs);
    return result.toString();
  } catch (error) {
    onError(sha, error);
    throw error;
  }
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
  let targetUrl = `${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}/actions/runs/${GITHUB_RUN_ID}`;

  updateStatus(sha, {
    target_url: targetUrl,
    state: 'pending',
    description: `▲ Now deployment starting`,
  });

  console.log(`🤠 Alrighty, deploy starting.`);

  const result = await spawnDeploy(sha);
  targetUrl = getUrl(result);

  console.log(`💪 Deploy finished! Now we're going to alias to ndla.sh`);

  updateStatus(sha, {
    target_url: `${targetUrl}`,
    state: 'pending',
    description: `▲ Aliasing now deployment...`,
  });

  targetUrl = await spawnAlias(sha, targetUrl);

  console.log(`🔗 It's linked!`);

  updateStatus(sha, {
    target_url: targetUrl,
    state: 'success',
    description: `▲ Now deployment complete`,
  });

  console.log('🏁 All done!');
}

switch (GITHUB_EVENT_NAME) {
  case 'pull_request': {
    deploy(GH_PR_SHA);
    break;
  }
  case 'push': {
    if (GITHUB_REF === 'refs/heads/master') {
      deploy(GITHUB_SHA);
    } else {
      console.log(`Skip deploy of commits not updating a PR`);
    }
    break;
  }
  default: {
    console.log(`${GITHUB_EVENT_NAME} is not supported by now-github`);
  }
}
