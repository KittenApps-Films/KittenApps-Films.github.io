import { Octokit } from "https://esm.sh/@octokit/core";

var one = "github_pat_11BO3GZVQ0BEH77fHoiWF7_iuWSG0S"
var two = "0ubQtn31vuMDAyfXu1LtRM3EgHhVXqXTc2p5YYM7IJP6bBLd7eoR"

const octokit = new Octokit({
  auth: one + two,
})

await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
  owner: 'KittenFilms',
  repo: 'kittenfilms.github.io',
  //path: 'PATH',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
