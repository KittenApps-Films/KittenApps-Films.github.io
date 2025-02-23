//'<html><head></head><body>Hello World It ran<script type="module" src="https://kittenapps-films.github.io/up.js"><script type="text/javascript" src="https://kittenapps-films.github.io/up2.js"></script></body></html>'
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
