var target = document.querySelector("#content");
var div = document.getElementById("preview")

var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
      div.innerHTML = target.innerHTML
      });
});

var config = {
  childList: true,
  subtree: true,
  characterData: true
};

observer.observe(target, config);
