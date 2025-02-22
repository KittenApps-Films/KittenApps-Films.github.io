import { Octokit } from "https://esm.sh/@octokit/core";

//const octokit = new Octokit({
//  auth: "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",
//})

await octokit.request('GET /repos/{owner}/{repo}', {
  owner: 'KittenApps-Films',
  repo: 'KittenApps-Films.github.io ',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
