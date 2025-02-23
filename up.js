import { Octokit } from "https://esm.sh/@octokit/core";

var one = "github_pat_11BO3GZVQ0iU5jj0XlQH1M_Dd5MGFUQ"
var two = "I7QxrwKZgOJTSOzhzXVNDImQGLhTcasP0c6XLUOXBDJuGysgTZJ"

const octokit = new Octokit({
  auth: one + two,
})

var repo = await octokit.request('GET /repos/{owner}/{repo}', {
  owner: 'KittenApps-Films',
  repo: 'KittenApps-Films.github.io',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
console.log(repo)
