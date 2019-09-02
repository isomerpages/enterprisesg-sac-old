var currentURL = window.location;
var index = currentURL.lastIndexOf(".aspx");
if (index > -1) {
  currentURL = currentURL.substring(0,index);
  window.location.replace(currentURL);
}
