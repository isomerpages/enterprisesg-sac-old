document.getElementById('txtPassengerName_1').value = "Tan Kee Seng";
document.getElementById('ddlPassengerGender_1').value = "M";
document.getElementById('ddlPassengerNationality_1').value = "SG";
document.getElementById('txtPassengerIcOrPassport_1').value = "K0849851Z";
document.getElementById('txtPassengerPassportExpiry_1').value = "04/12/2024";
document.getElementById('ddlPassengerType_1').value = "ADULT";
document.getElementById('txtPassengerContact_1').value = "6598168517";

document.getElementById('txtPassengerName_2').value = "Lim Lai Hoi";
document.getElementById('ddlPassengerGender_2').value = "F";
document.getElementById('ddlPassengerNationality_2').value = "SG";
document.getElementById('txtPassengerIcOrPassport_2').value = "K0850280R";
document.getElementById('txtPassengerPassportExpiry_2').value = "04/12/2024";
document.getElementById('ddlPassengerType_2').value = "ADULT";
document.getElementById('txtPassengerContact_2').value = "91852485";

document.getElementById('txtPassengerName_3').value = "Tan Yee Ping Sharon";
document.getElementById('ddlPassengerGender_3').value = "F";
document.getElementById('ddlPassengerNationality_3').value = "SG";
document.getElementById('txtPassengerIcOrPassport_3').value = "K0849845A";
document.getElementById('txtPassengerPassportExpiry_3').value = "04/12/2024";
document.getElementById('ddlPassengerType_3').value = "ADULT";

var icpassportContainers = document.getElementsByClassName('icpassport-container');
for (var i=0; i<icpassportContainers.length; i++) {
  icpassportContainers[i].style.display = '';
}

var passportexpiryContainers = document.getElementsByClassName('passportexpiry-container');
for (var i=0; i<passportexpiryContainers.length; i++) {
  passportexpiryContainers[i].style.display = '';
}
