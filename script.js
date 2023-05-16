// Variable for the current date using day.js is below
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

// Variable for the current time using day.js
var time = dayjs();
$('#currentTime').text(today.format('h:mm A'));

// Variable for the save button
var saveButton = $(".saveBtn");

// Time compare function uses const current hour and then compares the currentTime to the blockTime using the id, parsed.
// Based on that comparison we are adding classes which apply CSS features to the past, present, and future.
function timeCompare() {
  const currentTime = moment().hours();
  console.log(currentTime);
  $(".time-block").each(function () {
    const blockTime= parseInt($(this).attr("id"));
    console.log(blockTime);
    console.log(currentTime);
    if(blockTime > currentTime) {
      $(this).addClass("future");
    } else if (blockTime === currentTime) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  });

}

// Calling the timeCompare function
timeCompare();

// Save button event listener using JQuery, the event then uses a function and runs that function
// The function defines the siblings, and the parent.
// Then the function says what we want to save in the local storage.
saveButton.on("click", function () {
  var userInput = $(this).siblings(".description").val();
  var id= $(this).parent().attr("id");
  console.log(userInput)
  console.log(id);
  localStorage.setItem(id, userInput);
});

// Here is where we are then making sure that the id and input are going to stay where they are
// Inside of the webpage text area until they are either changed and saved or deleted and saved.
$(".time-block").each(function() {
  const id = $(this).attr("id");
  const input = localStorage.getItem(id);
  $(this).children(".description").val(input);
});