#!/usr/bin/env node

/**
 * Forked/Inspired by: https://github.com/kentcdodds/glamorous-website/blob/master/other/now-travis
 */

const { Octokit } = require('octokit');
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
const { VERCEL_TOKEN: vercelToken, GH_TOKEN: githubToken } = process.env;
const octokit = new Octokit({ auth: githubToken });
const providedArgs = process.argv.slice(2);

function isFork() {
  if (!GH_PR_REPO) {
    return false;
  }
  const [prOwner] = GH_PR_REPO.split('/');
  const [owner] = GITHUB_REPOSITORY.split('/');

  return owner !== prOwner;
}

export function getUrl(content) {
  const urls = content.match(urlRegex()) || [];

  return urls.map((url) => normalizeUrl(url.trim().replace(/\.+$/, '')))[0];
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
    return s.split(vercelToken).join('VERCEL_TOKEN').split(githubToken).join('GITHUB_TOKEN');
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
  const safeArgs = args.map((s) => safeify(s));
  console.log(...safeArgs);
}

function safeError(...args) {
  const safeArgs = args.map((s) => safeify(s));
  console.error(...safeArgs);
}

async function updateStatus(sha, options) {
  const { description, target_url: url } = options;
  const [owner, repo] = GITHUB_REPOSITORY.split('/');
  console.log(`${description}: ${url}`);
  await octokit.rest.repos
    .createCommitStatus({
      sha,
      owner,
      repo,
      target_url: url,
      description,
      state: options.state,
    })
    .catch(logError('setting complete status'));
}

function onError(sha, err) {
  safeError(err);
  updateStatus(sha, {
    state: 'error',
    description: `▲ Vercel deployment failed. See github-actions logs for details.`,
  });
}

function getAliasUrl() {
  const repoName = GITHUB_REPOSITORY.split('/')[1];
  if (GH_PR_NUMBER === '') {
    return `${repoName}-master.ndla.sh`;
  }
  return `${repoName}-pr-${GH_PR_NUMBER}.ndla.sh`;
}

async function spawnAlias(sha, deployUrl) {
  const newUrl = getAliasUrl();
  const cliArgs = ['alias', deployUrl, newUrl, '--token', vercelToken];
  safeLog('spawning shell with command:', `vercel ${cliArgs.join(' ')}`);
  try {
    await spawn('vercel', cliArgs);
  } catch (error) {
    onError(sha, error);
    throw error;
  }
  return `https://${newUrl}`;
}

async function spawnDeploy(sha) {
  const cliArgs = ['--token', vercelToken, '--no-clipboard', '--regions', 'bru1', '--confirm', ...providedArgs];
  safeLog('spawning shell with command:', `vercel ${cliArgs.join(' ')}`);
  try {
    const result = await spawn('vercel', cliArgs);
    return result.toString();
  } catch (error) {
    onError(sha, error);
    throw error;
  }
}

async function deploy(sha) {
  if (isFork()) {
    console.log(`▲ Vercel deployment is skipped for forks...`);
    return;
  }

  if (!githubToken) {
    throw new Error('Missing required environment variable GH_TOKEN');
  }

  if (!vercelToken) {
    throw new Error('Missing required environment variable VERCEL_TOKEN');
  }
  let targetUrl = `${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}/actions/runs/${GITHUB_RUN_ID}`;

  updateStatus(sha, {
    target_url: targetUrl,
    state: 'pending',
    description: `▲ Vercel deployment starting`,
  });

  console.log(`🤠 Alrighty, deploy starting.`);

  const result = await spawnDeploy(sha);
  targetUrl = getUrl(result);

  console.log(`💪 Deploy finished! Now we're going to alias to ndla.sh`);

  updateStatus(sha, {
    target_url: `${targetUrl}`,
    state: 'pending',
    description: `▲ Aliasing vercel deployment...`,
  });

  targetUrl = await spawnAlias(sha, targetUrl);

  console.log(`🔗 It's linked!`);

  updateStatus(sha, {
    target_url: targetUrl,
    state: 'success',
    description: `▲ Vercel deployment complete`,
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
    console.log(`${GITHUB_EVENT_NAME} is not supported by vercel-github`);
  }
}
