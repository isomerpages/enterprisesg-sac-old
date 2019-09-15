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
  for (var i=0; i<links.length; i++) {
    links[i].addEventListener('click', function (event) {
      href = this.getAttribute("href");
      if (href != null && href.indexOf("/") != 0 && href.indexOf(location.origin) < 0) {
        if (!this.hasAttribute("target")) {
          event.preventDefault();
          window.open(href,"_blank");
        }
      }
    });
  }
}

