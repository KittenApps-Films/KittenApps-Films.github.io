//name of wiki
var url_string = window.location.href; 
var url = new URL(url_string);
var name = url.searchParams.get("n");
//type of wiki, users, airlines or air_forces
var url_string = window.location.href; 
var url = new URL(url_string);
var type = url.searchParams.get("t");

function works() {
  if (type === "users" || type === "airlines" || type === "air_forces" && ad.length > 0) {
    return true
  } else {
    return false
  }
}

import { full } from './code.js'

import { fuller } from './code.js'

fuller()

import { Octokit } from "https://esm.sh/@octokit/core";

if (works) {

var home = `
<html>
  <head>
  </head>
  <body>
    <div id="content"></div>
    <script type="module" src="index.js"></script>
  </body>
</html>
`
var maker = `
import { dictionary } from './data.js'

var url_string = window.location.href; 
var url = new URL(url_string);
var file = url.searchParams.get("f");
var doc = document.getElementById("content");

if (file == "one") {
  doc.innerHTML = dictionary.one
} else {
  doc.innerHTML = dictionary.home
}
`
var data = `
export var dictionary = { 
     home:"Home page of ${name}",
};
`

const octokit = new Octokit({
  auth: full,
})

var home = await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
  owner: 'KittenApps-Films',
  repo: 'GeoFS_Wiki',
  path: type+"/"+name+"/index.html",
  message: 'making index.html from make.js',
  content: btoa(home),
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
var maker = await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
  owner: 'KittenApps-Films',
  repo: 'GeoFS_Wiki',
  path: type+"/"+name+"/index.js",
  message: 'making index.js from make.js',
  content: btoa(maker),
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
var data = await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
  owner: 'KittenApps-Films',
  repo: 'GeoFS_Wiki',
  path: type+"/"+name+"/data.js",
  message: 'making data.js from make.js',
  content: btoa(data),
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
window.location.replace("https://kittenapps-films.github.io/edit/saving.html?d="+type+"/"+n+"/index.html");
} else {
  alert("An error ocured")
}
