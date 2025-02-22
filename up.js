import { Octokit } from "https://cdn.skypack.dev/octokit";
const octokit = new Octokit({
  auth: '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'
})
await octokit.request('POST /repos/{owner}/{repo}/dispatches', {
  owner: 'KittenApps-Films',
  repo: 'KittenApps-Films.github.io',
  event_type: 'on-demand-test',
  client_payload: {
    unit: false,
    integration: true
  },
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
