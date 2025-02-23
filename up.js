var url_string = window.location.href; 
var url = new URL(url_string);
var c = url.searchParams.get("c");
var content = `
<html>
  <head>
  </head>
  <body>${c}<script type='module' src='https://kittenapps-films.github.io/up.js'></script>
  <script type='text/javascript' src='https://kittenapps-films.github.io/up2.js'></script>
  </body>
  </html>
`
var url_string = window.location.href; 
var url = new URL(url_string);
var d = url.searchParams.get("d");

var url_string = window.location.href; 
var url = new URL(url_string);
var r = url.searchParams.get("r");

if (r == true) {

import { Octokit } from "https://esm.sh/@octokit/core";

var one = "github_pat_11BO3GZVQ0BEH77fHoiWF7_iuWSG0S"
var two = "0ubQtn31vuMDAyfXu1LtRM3EgHhVXqXTc2p5YYM7IJP6bBLd7eoR"

const octokit = new Octokit({
  auth: one + two,
})
var s = true
try { 
  var old = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
  owner: 'KittenApps-Films',
  repo: 'KittenApps-Films.github.io',
  path: d,
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
  } catch {
  false
}


var newFile = await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
  owner: 'KittenApps-Films',
  repo: 'KittenApps-Films.github.io',
  path: d,
  message: 'update up.html from up.js',
  content: btoa(content),
  if (s == true) {
  sha: old.data.sha,
  }
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
}
