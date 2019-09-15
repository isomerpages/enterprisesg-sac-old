var currentURL = window.location.toString();
var index = currentURL.lastIndexOf(".aspx");
if (index > -1) {
  currentURL = currentURL.substring(0,index);
  window.location.replace(currentURL);
}

var content = document.getElementById("main-content");
if (content != null) {
  var links = content.getElementsByTagName('a');
  var href = "";
  console.log(location.origin);
  for (var i=0; i<links.length; i++) {
    href = links[i].getAttribute("href");
    console.log(href);
    if (href.indexOf("/") != 0 && href.indexOf(location.origin) < 0) {
      if (links[i].getAttribute("target") != "_blank") {
        links[i].addEventListener('click', function (event) {
          event.preventDefault();
          window[i].open(href,"_blank");
        });
      }
    }
  }
}

