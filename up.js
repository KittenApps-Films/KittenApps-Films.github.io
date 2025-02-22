import { Octokit } from "https://esm.sh/@octokit/core";

const octokit = new Octokit({
  auth: "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",
})

await octokit.request('GET /repos/{owner}/{repo}', {
  owner: 'KittenApps-Films',
  repo: 'KittenApps-Films.github.io ',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
