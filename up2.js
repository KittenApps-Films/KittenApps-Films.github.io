//'<html><head></head><body>Hello World It ran<script type="module" src="https://kittenapps-films.github.io/up.js"><script type="text/javascript" src="https://kittenapps-films.github.io/up2.js"></script></body></html>'
var url_string = window.location.href; 
var url = new URL(url_string);
var content = url.searchParams.get("c");
