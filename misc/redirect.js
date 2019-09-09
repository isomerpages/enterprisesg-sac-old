var currentURL = window.location.toString();
var index = currentURL.lastIndexOf(".aspx");
if (index > -1) {
  currentURL = currentURL.substring(0,index);
  window.location.replace(currentURL);
}

var notificationBar = document.getElementById("notification-bar");
if (notificationBar != null) {
  var expiry = new Date("2019-09-10 00:00:00");
  var currentDate = new Date();
  if(expiry - currentDate < 0) {
    notificationBar.style.display = "none";
  }
}

