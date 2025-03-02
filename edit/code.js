import { one } from '/code/one.js';
import { two } from '/code/two.js';
import { three } from '/code/three.js';
var full = one+two+three
let path = window.location.href.split('?')[0]
export function get() {
  if (path == "https://kittenapps-films.github.io/edit/makeWiki.html") {
    return full
  }
}
