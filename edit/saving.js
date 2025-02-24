var url_string = window.location.href; 
var url = new URL(url_string);
var d = url.searchParams.get("d");

setInterval(checkURL('https://kittenapps-films.github.io/GeoFS_Wiki/'+d), 500);

async function checkURL(url) {
  try {
    const response = await fetch(url);
    //go again
  } catch (error) {
    window.location.replace('https://kittenapps-films.github.io/GeoFS_Wiki/'+d);
  }
}
