var url_string = window.location.href; 
var url = new URL(url_string);
var name = url.searchParams.get("n");
var html = `
<html>
  <head>
  </head>
  <body>
    <div id="content"></div>
    <script type="text/javascript" src="index.js"></script>
  </body>
</html>
`
var javascript = `
var content = "Home page of ${n}"

var url_string = window.location.href; 
var url = new URL(url_string);
var file = url.searchParams.get("f");
var doc = document.getElementById("content");

if (file == "one") {
  doc.innerHTML = one
} else {
  doc.innerHTML = content
}
`

var url_string = window.location.href; 
var url = new URL(url_string);
var type = url.searchParams.get("t");

import { full } from './code.js'

import { Octokit } from "https://esm.sh/@octokit/core";

const octokit = new Octokit({
  auth: full,
})

var newFile = await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
  owner: 'KittenApps-Films',
  repo: 'GeoFS_Wiki',
  path: type+"/"+n+"/index.html",
  message: 'making index.html from make.js',
  content: btoa(content),
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
var newFile = await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
  owner: 'KittenApps-Films',
  repo: 'GeoFS_Wiki',
  path: type+"/"+n+"/index.js",
  message: 'making index.js from make.js',
  content: btoa(content),
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
window.location.replace("https://kittenapps-films.github.io/edit/saving.html?d="+type+"/"+n+"/index.html");
