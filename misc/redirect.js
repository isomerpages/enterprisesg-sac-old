var currentURL = window.location.toString();
var index = currentURL.lastIndexOf(".aspx");
if (index > -1) {
  currentURL = currentURL.substring(0,index);
  window.location.replace(currentURL);
}

var links = document.getElementsByTagName('a');
var href = "";
for (var i=0; i<links.length; i++) {
  href = links[i].getAttribute("href");
  console.log(href);
  if (href.indexOf(location.origin) < 0) {
    if (links[i].getAttribute("target") != "_blank") {
      links[i].addEventListener('click', function (event) {
        event.preventDefault();
        links[i].open(href,"_blank");
      });
    }
  }
}
