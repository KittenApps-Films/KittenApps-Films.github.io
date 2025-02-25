var url_string = window.location.href; 
var url = new URL(url_string);
var d = url.searchParams.get("d");

var url = "https://kittenapps-films.github.io/GeoFS_Wiki/"+d;

setInterval(checkURL(), 500);

async function checkURL() {
  try {
    const response = await fetch(url);
    if (!response.ok) return console.log(`URL ${url} has not been made`);  
    window.location.replace('https://kittenapps-films.github.io/GeoFS_Wiki/'+d);
  } catch (error) {
    console.log(`Error checking URL: ${error}`);
  }
}
