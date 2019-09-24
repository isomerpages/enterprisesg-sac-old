var mainContent = document.getElementById("main-content");
if (mainContent != null) {
  var contentDivs = mainContent.getElementsByClassName('content');
  if (contentDivs.length > 0) {
    var content = contentDivs[0];
    var links = content.getElementsByTagName('a');
    var href = "";
    for (var i=0; i<links.length; i++) {
      links[i].addEventListener('click', function (event) {
        href = this.getAttribute("href");
        if (href != null && href.indexOf("/") != 0 && href.indexOf(location.origin) < 0 && href.indexOf('www.sac-accreditations.gov.sg') < 0) {
          if (!this.hasAttribute("target")) {
            event.preventDefault();
            window.open(href,"_blank");
          }
        }
      });
    }
  }
}

