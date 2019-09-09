var currentURL = window.location.toString();
var index = currentURL.lastIndexOf(".aspx");
if (index > -1) {
  currentURL = currentURL.substring(0,index);
  window.location.replace(currentURL);
}

var notificationBar = document.getElementById("notification-bar");
if (notificationBar.length > 0) {
  var expiry = new Date("2019-09-09 16:30:00");
  var currentDate = new Date();
  if(expiry - currentDate < 0) {
    console.log("expired");
    notificationBar.style.display = "none";
  }
  else {
    console.log("not expired");
  }
}

