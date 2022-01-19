// get today's date and define format using moment.js
var dateToday = moment().format("ddd, MMM Do, YYYY");

// identify DOM element by id "currentDay"
var date = $("#currentDay")

// append <span> with dateToday variable inside to the date variable above
$(date).append("<span>" + dateToday + "</span>");

// on click of element with class "save-btn"
$(".save-btn").on("click", function() {
    // get and trim the value the textarea that's a sibling to .save-btn that was clicked
    var taskBlockText = $(this).siblings("textarea").val().trim();
    // get the id attribute of the parent element of this .save-btn that was clicked
    var taskBlockTime = $(this).parent().attr("id");
    // send the above variable values to localStorage
    localStorage.setItem(taskBlockTime, taskBlockText);
});

// retrieve data from local storage on loading for each time block
$("#8 textarea").val(localStorage.getItem("8"));
$("#9 textarea").val(localStorage.getItem("9"));
$("#10 textarea").val(localStorage.getItem("10"));
$("#11 textarea").val(localStorage.getItem("11"));
$("#12 textarea").val(localStorage.getItem("12"));
$("#13 textarea").val(localStorage.getItem("13"));
$("#14 textarea").val(localStorage.getItem("14"));
$("#15 textarea").val(localStorage.getItem("15"));
$("#16 textarea").val(localStorage.getItem("16"));
$("#17 textarea").val(localStorage.getItem("17"));

// identify the hour we're currently in
var currentHour = (new Date()).getHours();

// color code the time blocks
var colorCode = $(".colorcode").each(function(){
    // create a variable that gets the number from the id field
    var val = parseInt($(this).prop("id"));
    // if the variable val is greater than the currentHour variable set the class as future
    if(val > currentHour){
      $(this).addClass("future");
    // if the variable val is less than the currentHour variable set the class as past
    }else if(val < currentHour){
      $(this).addClass("past");
    // if the variable val is equal to the currentHour variable set the class as present
    }else if(val === currentHour){
      $(this).addClass("present");
    }
  });

// set an interval of every 15 minutes to refresh colors
setInterval(function () {
    colorCode();
  }, (1000 * 60) * 15);