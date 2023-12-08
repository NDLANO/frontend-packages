#!/usr/bin/env node
/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/**
 * Forked/Inspired by: https://github.com/kentcdodds/glamorous-website/blob/master/other/now-travis
 */

import { inspect } from 'util';
import spawn from 'cross-spawn-promise';
import normalizeUrl from 'normalize-url';
import urlRegex from 'url-regex-safe';

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
  VERCEL_TOKEN: vercelToken,
  GH_TOKEN: githubToken,
} = process.env;
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

  return urls.map((url) => normalizeUrl(url.trim().replace(/\.+$/, '')))[0];
}

function logError(message) {
  return function logIfError(error) {
    if (error) {
      console.log(inspect(message, false, null, true));
      console.log(inspect(error, false, null, true));
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
  const { description, target_url, state } = options;
  const [owner, repo] = GITHUB_REPOSITORY.split('/');
  console.log(`${description}: ${target_url}`);

  await fetch(`https://api.github.com/repos/${owner}/${repo}/statuses/${sha}`, {
    method: 'POST',
    body: JSON.stringify({ state, target_url, description }),
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${githubToken}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  }).catch(logError('setting complete status'));
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
