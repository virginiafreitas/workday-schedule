// All the code that interacts with the DOM is wrapped in this function in a call to jQuery to ensure that it won't run until the browser has finished rendering all the elements in the html.
$(function () {
  
  // FIRST STEP:
  //use jquery to select the time-block class, equivalent to document.querySelectorAll(".time-block");
  var childrenElements = $(".time-block"); 
  //use dayjs() to grab current hour and convert it to integer
  var currentTime = parseInt(dayjs().format('HH'));
  //use for loop for iterating all the time blocks(i) comparing to current hour
  for (var i=9; i<18; i++) {
    //apply the past, present, or future class to each time block by comparing the time block to the current hour in an if statement.
    if (currentTime < i) {
      $("#hour-" + i).addClass("future"); //$("hour-" + i) is equivalent to document.querySelector("#hour-" + i)
    } else if (currentTime === i) {
      $("#hour-" + i).removeClass("future"); //removes the existing class "future" from the element of that id attribute in the html    
      $("#hour-" + i).addClass("present"); //adds the class "present" from the element of that id attribute in the html
    } else {
      $("#hour-" + i).removeClass("future");      
      $("#hour-" + i).removeClass("present");      
      $("#hour-" + i).addClass("past");    
    }  
  }  

  // SECOND STEP: use dayjs to display the current date in the header of the page
  $("#currentDay").text(dayjs().format('MM/DD/YYYY'))  
  
  // THIRD STEP: save user input in the local storage
  $(".saveBtn").on("click", function() {  // Added a listener for click events on the save button. 
    //"this" refers to the class "saveBtn"
    console.log($(this).siblings(".description").val())  
    // use setItem() to add key (ex: hour-10) and value input (description) to the localStorage
    localStorage.setItem($(this).parent().attr("id"), $(this).siblings(".description").val()) // Used the id in the containing time-block as a key to save the user input in local storage.
  })

  // FOURTH STEP: retrieve values saved on the localStorage and display on the textarea elements
  $(".time-block").each(function() { //runs function in the specified time-block class
    //figure out what hour block id you're in by using $(this) and the id attribute of each time-block
    var timeBlockId = $(this).attr("id");
    //getItem for localStorage to pull previously stored content
    var userInput = localStorage.getItem(timeBlockId);
    //check localStorage if there is storage and display the items (value) inside the text area of corresponding hour
    if(userInput) {
      $(this).find(".description").val(userInput);
    }  
  })  
  
});