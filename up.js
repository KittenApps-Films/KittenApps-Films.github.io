import { Octokit } from "https://esm.sh/@octokit/core";

var one = "github_pat_11BO3GZVQ0BEH77fHoiWF7_iuWSG0S"
var two = "0ubQtn31vuMDAyfXu1LtRM3EgHhVXqXTc2p5YYM7IJP6bBLd7eoR"

const octokit = new Octokit({
  auth: one + two,
})

await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
  owner: 'KittenApps-Films',
  repo: 'KittenApps-Films.github.io',
  path: 'up.html',
  headers: {
    'Accept' : 'application/vnd.github.html+json',
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
// The content of the file should be base64
const content = Buffer.from(`Hello world at ${new Date().toUTCString()}`, 'utf8').toString('base64');

// If the file already exists, you need to provide the sha in order to update the file content.
const file = await octokit.rest.repos.getContent({
    owner: owner,
    repo: repo,
    path: path,
    branch: branch,
    });
const { sha } = file.data;
const fileContent = await octokit.rest.repos.createOrUpdateFileContents({
   owner,
   repo,
   path,
   sha: sha,
   message: 'This is the commit message generated via GitHub API',
   content,
   committer: {
     name: 'demo',
     email: 'demo@example.com'
   },
   author: {
     name: 'demo',
     email: 'demo@example.com'
   }
 });

const { commit: { html_url } } = fileContent.data;

console.log(`Content updated, see changes at ${html_url}`);
