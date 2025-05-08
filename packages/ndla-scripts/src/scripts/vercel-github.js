#!/usr/bin/env node
/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { inspect } from "util";
import { Vercel } from "@vercel/sdk";

/* eslint-disable no-console */

if (!process.env.CI || !process.env.GITHUB_ACTIONS) {
  throw new Error("Could not detect Github Actions CI environment");
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

const isFork = () => {
  if (!GH_PR_REPO) {
    return false;
  }
  const [prOwner] = GH_PR_REPO.split("/");
  const [owner] = GITHUB_REPOSITORY.split("/");

  return owner !== prOwner;
};

const getAliasUrl = () => {
  const repoName = GITHUB_REPOSITORY.split("/")[1];
  if (GH_PR_NUMBER === "") {
    return `${repoName}-master`;
  }
  return `${repoName}-pr-${GH_PR_NUMBER}.vercel.app`;
};

function logError(message) {
  return function logIfError(error) {
    if (error) {
      console.log(inspect(message, false, null, true));
      console.log(inspect(error, false, null, true));
      // console.log(message, error);
    }
  };
}

async function updateStatus(sha, options) {
  const { description, target_url, state } = options;
  const [owner, repo] = GITHUB_REPOSITORY.split("/");
  console.log(`${description}: ${target_url}`);

  await fetch(`https://api.github.com/repos/${owner}/${repo}/statuses/${sha}`, {
    method: "POST",
    body: JSON.stringify({ state, target_url, description }),
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${githubToken}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  }).catch(logError("setting complete status"));
}

const deploy = async (sha) => {
  if (isFork()) {
    console.log("▲ Vercel deployment is skipped for forks...");
    return;
  }
  if (!githubToken) {
    throw new Error("Missing required environment variable GH_TOKEN");
  }

  if (!vercelToken) {
    throw new Error("Missing required environment variable VERCEL_TOKEN");
  }
  const vercel = new Vercel({ bearerToken: vercelToken });

  let targetUrl = `${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}/actions/runs/${GITHUB_RUN_ID}`;

  await updateStatus(sha, {
    target_url: targetUrl,
    state: "pending",
    description: `▲ Vercel deployment starting`,
  });

  console.log("🤠 Alrighty, deploy starting.");

  const response = await vercel.deployments.createDeployment({
    requestBody: {
      name: "frontend-packages",
      target: "production",
      gitSource: {
        type: "github",
        repo: "frontend-packages",
        org: "ndlano",
        ref: sha,
      },
    },
  });

  const deploymentId = response.id;

  console.log(`Deployment created: ID ${deploymentId} and status ${response.status}`);

  let deploymentStatus;
  let deploymentURL;

  do {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const statusResponse = await vercel.deployments.getDeployment({
      idOrUrl: deploymentId,
      withGitRepoInfo: "true",
    });
    deploymentStatus = statusResponse.status;
    deploymentURL = statusResponse.url;
    console.log(`Deployment status: ${deploymentStatus}`);
  } while (deploymentStatus === "BUILDING" || deploymentStatus === "INITIALIZING");

  if (deploymentStatus === "READY") {
    console.log("💪 Deploy finished! Now we're going to alias to ndla.sh");
    await updateStatus(sha, {
      target_url: `${deploymentURL}`,
      state: "pending",
      description: `▲ Aliasing vercel deployment...`,
    });
    const aliasResponse = await vercel.aliases.assignAlias({
      id: deploymentId,
      requestBody: {
        alias: getAliasUrl(),
        redirect: null,
      },
    });
    console.log(`🔗 It's linked!`);
    await updateStatus(sha, {
      target_url: aliasResponse.alias,
      state: "success",
      description: `▲ Vercel deployment complete`,
    });

    console.log("🏁 All done!");
  }
};

switch (GITHUB_EVENT_NAME) {
  case "pull_request": {
    deploy(GH_PR_SHA);
    break;
  }
  case "push": {
    if (GITHUB_REF === "refs/heads/main") {
      deploy(GITHUB_SHA);
    } else {
      console.log("Not deploying, not on main branch");
    }
    break;
  }
  default: {
    console.log(`${GITHUB_EVENT_NAME} is not a supported event type.`);
  }
}
