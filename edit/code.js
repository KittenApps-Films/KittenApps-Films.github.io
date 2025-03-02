import { one } from '/code/one.js';
import { two } from '/code/two.js';
import { three } from '/code/three.js';
var full = one+two+three
let path = window.location.href.split('?')[0]
var paths = {
    one: "https://kittenapps-films.github.io/edit/makeWiki.html"
}
function pathVerify() {
  Object.keys(paths).forEach(function(key) {
  if (paths[key] === path) {
    return true;
  }
})
}
export function get() {
  if (pathVerify()) {
    return full
  } else {
    return "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"
  }
}
if (two[three]) {
  console.log("true")
}
