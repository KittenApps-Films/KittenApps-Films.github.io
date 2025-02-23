import { Octokit } from "https://esm.sh/@octokit/core";

var one = "github_pat_11BO3GZVQ0BEH77fHoiWF7_iuWSG0S"
var two = "0ubQtn31vuMDAyfXu1LtRM3EgHhVXqXTc2p5YYM7IJP6bBLd7eoR"

const octokit = new Octokit({
  auth: one + two,
})
async function update() {
var old = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
  owner: 'KittenApps-Films',
  repo: 'KittenApps-Films.github.io',
  path: 'up.html',
  headers: {
    //'Accept' : 'application/vnd.github.html+json',
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
var content = '<html><head></head><body>Hello World<script type="module" src="https://kittenapps-films.github.io/up.js"></script></body></html>'
var newFile = await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
  owner: 'KittenApps-Films',
  repo: 'KittenApps-Films.github.io',
  path: 'up.html',
  message: 'update up.html from up.js',
  content: btoa(content),
  sha: old.data.sha,
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
}
export update
