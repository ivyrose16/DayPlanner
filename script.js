/**
 * array of strings, "9AM etc."
 * create a for loop, for each item in the array make a row in the HTML and append to the page
 * get something to appear, add the times
 * row with three columns
 * 
 *
 * 
 */

$(document).ready(function() {

 var hours = ["9AM", "10 AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

var i;
for (i = 0; i < hours.length; i++) {
    var hoursRow = $("<row>");

        
        hoursRow.addClass("hours-row row hours-row-color");
        hoursRow.attr("data-letter", hours[i]);
        hoursRow.text(hours[i]);
        $("#row").append(hoursRow);

}
});

