var url_string = window.location.href; 
var url = new URL(url_string);
var c = url.searchParams.get("c");
var content = `
<html>
  <head>
  </head>
  <body>
    ${c}
    <script type='module' src='https://kittenapps-films.github.io/edit.js'></script>
  </body>
</html>
`
var url_string = window.location.href; 
var url = new URL(url_string);
var d = url.searchParams.get("d");

var url_string = window.location.href; 
var url = new URL(url_string);
var r = url.searchParams.get("r");

import { full } from './code.js'

import { Octokit } from "https://esm.sh/@octokit/core";

const octokit = new Octokit({
  auth: full,
})

var newFile = await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
  owner: 'KittenApps-Films',
  repo: 'GeoFS_Wiki',
  path: d,
  message: 'making '+d+' from make.js',
  content: btoa(content),
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
