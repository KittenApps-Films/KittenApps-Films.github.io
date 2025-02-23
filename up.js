import { Octokit } from "https://esm.sh/@octokit/core";

const octokit = new Octokit({
  auth: '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',
})

await octokit.request('GET /repos/{owner}/{repo}', {
  owner: 'KittenApps-Films',
  repo: 'KittenApps-Films.github.io ',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
