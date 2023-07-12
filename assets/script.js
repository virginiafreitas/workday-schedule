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
      $("#hour-" + i).addClass("past"); //$("hour-" + i) is equivalent to document.querySelector("#hour-" + i)
    } else if (currentTime === i) {
      $("#hour-" + i).removeClass("past"); //removes the existing class "pass" from the element of that id attribute in the html    
      $("#hour-" + i).addClass("present"); //adds the class "present" from the element of that id attribute in the html
    } else {
      $("#hour-" + i).removeClass("past");      
      $("#hour-" + i).removeClass("present");      
      $("#hour-" + i).addClass("future");    
    }  
  }  

});