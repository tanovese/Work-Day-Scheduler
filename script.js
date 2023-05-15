// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var task= [];

var mySchedule = [
  {
    idNum: "9",
    hour: "09",
  },
  {
    idNum: "10",
    hour: "10",
  },
  {
    idNum: "11",
    hour: "11",
  },
  {
    idNum: "12",
    hour: "12",
  },
  {
    idNum: "1",
    hour: "1",
  },
  {
    idNum: "2",
    hour: "2",
  },
  {
    idNum: "3",
    hour: "3",
  },
  {
    idNum: "4",
    hour: "4",
  },
  {
    idNum: "5",
    hour: "5",
  },
  {
    idNum: "6",
    hour: "6",
  },
  {
    idNum: "7",
    hour: "7",
  },
  {
    idNum: "8",
    hour: "8",
  },
  {
    idNum: "9",
    hour: "9",
  },
]

var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

var time = dayjs();
$('#currentTime').text(today.format('h:mm A'));

var saveButton = $(".saveBtn");
// var timeBlock= $(".time-block");


function timeCompare() {
  const currentTime = moment().format('HH');
  console.log(currentTime);
  $(".timeblock").each(function () {
    const blockTime= parseInt(this.id);
  console.log(blockTime);
  console.log(currentTime);
    if(blockTime > currentTime) {
      $(this).classList.add("future");
    } else if (blockTime === currentTime) {
      $(this).classList.add("present");
    } else {
      $(this).classList.add("past");
    }
  });

}

timeCompare();

saveButton.on("click", function () {
  var userInput = $(this).siblings(".description").val();
  var id= $(this).parent().attr("id");
  console.log(userInput)
  console.log(id);
  localStorage.setItem(id, JSON.stringify(userInput));
});

$('.time-block').each(function() {
  const id = $(this).attr('id');
  const input = localStorage.getItem(userInput);
  $(this).children('.description').val(value);
});

  
    // HINT: What does `this` reference in the click listener
  // function?
  // How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. \
  
  // HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
