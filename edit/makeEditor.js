var target = document.querySelector("#content");
var name = document.getElementById("name")
var div = document.getElementById("preview")
div.innerHTML = target.value.replace("</script>", "script tag close, (script dat may not be used)");

var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
      div.innerHTML = target.value.replace("</script>", "script tag close, (script dat may not be used)");
      });
});

var config = {
  childList: true,
  subtree: true,
  characterData: true
};

observer.observe(target, config);

function myFunction() {
console.log("change")
  document.getElementById("preview").innerHTML = document.querySelector("#content").value
}
document.querySelector("#content").onchange = function() {myFunction()};
function save() {
      window.location.replace(`https://kittenapps-films.github.io/edit/makeWiki.html?t=${type}&n=${name}&c=${target.value}`);
}
