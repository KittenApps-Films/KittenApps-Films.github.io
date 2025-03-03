var target = document.querySelector("#content");
var div = document.getElementById("preview")
div.innerHTML = target.value

var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
      div.innerHTML = target.value
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
