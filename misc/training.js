//this script is used for displaying the interactive training calender under 'services > training, courses and seminars'
var trainingYearSelects = document.getElementsByClassName('trainingYearSelect');
if (trainingYearSelects.length > 0) {
    for (var i=0; i<trainingYearSelects.length; i++) {
        var currTrainingTableID = "training-table-" + trainingYearSelects[i].getAttribute("data-refYear");
        var currTrainingTable = document.getElementById(currTrainingTableID);
        if (currTrainingTable == null) {
            trainingYearSelects[i].style.display = "none";
        }
        else {
            trainingYearSelects[i].addEventListener('click', function (event) {
                var currTrainingTableID = "training-table-" + this.getAttribute("data-currYear");
                var currTrainingTable = document.getElementById(currTrainingTableID);
                if (currTrainingTable != null) {
                    currTrainingTable.style.display = "none";
                }
                var refYear = this.getAttribute("data-refYear");
                var refTrainingTableID = "training-table-" + refYear;
                var refTrainingTable = document.getElementById(refTrainingTableID);
                if (refTrainingTable != null) {
                    document.getElementById('training-calendar-year-title').textContent = refYear;
                    refTrainingTable.style.display = "table";
                }
            });
        }
    }
}
