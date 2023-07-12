# wordkay-schedule


## Description
    

The objective of this project was to develop a user-friendly calendar application that enables users to save and delete events for every business hour of the day. The application utilizes jQuery to dynamically update the HTML and CSS, allowing the current date to be displayed prominently, while also changing the column colors based on the time of day. My personal goal on this project was to learn how to use jQuery and day.js libraries effectively and to gain proficiency in storing data on local storage, as well as to enhance my JavaScript skills.


## Installation


1. HTML and CSS files were provided.
2. Created the Javascript file.
3. Created new time-blocks on html to replicate existing hours 9am, 10am and 11am through 5pm.
4. Used jquery to select the time-block class.
5. Used dayjs() to grab current hour and convert it to integer.
6. Used for loop for iterating all the time blocks(i) comparing to current hour.
7. Applied the past, present, or future class to each time block by comparing the time block to the current hour in an if statement.
8. Removed the existing class "pass" from the element of that id attribute in the html.
9. Added the class "present" from the element of that id attribute in the html.
10. Used dayjs to display the current date in the header of the page.
11. Saved user input in the local storage.
12. Added a listener for click events on the save button. 
13. Used "this" to refer to the class "saveBtn".
14. Used setItem() to add key (ex: hour-10) and value input (description) to the localStorage.
15. Retrieved values saved on the localStorage and display on the textarea elements.
16. Ran a function in the specified time-block class
17. Figured out what hour block id you're in by using $(this) and the id attribute of each time-block.
18. Used getItem for localStorage to pull previously stored content.
19. Checked on localStorage if there is storage and display the items (value) inside the text area of corresponding hour.


## Usage


1. Open the following URL in the browser: https://virginiafreitas.github.io/workday-schedule/
2. See that the third line of the header will be displaying the current date as MM-DD-YYYY.
3. Choose one time of the day, between 9am and 5pm, to add new activities or remove existing activities.
4. Activities can be typed inside the text area to the right side of the column with the hours of the day.
5. If the time of the day has already passed, the background color of the area to type the activity should be gray.
6. If the time of the day is the current time, the background color of the area to type the activity should be pink.
If the time of the day is in the future, the background color of the area to type the activity should be dark blue.
7. After adding or removing the activity, click on the black button to the right side, and it will be saved to the local storage.
8. Refresh the page to verify that any change will remain in its designated area.


![alt text](assets/images/screenshot1.png) 

![alt text](assets/images/screenshot2.png) 

![alt text](assets/images/screenshot3.png) 

![alt text](assets/images/screenshot4.png) 

![alt text](assets/images/screenshot5.png) 



## Credits

I have received advice from the UC Berkeley Extension tutors Henry Weigand on pseudocoding and Dennis Itua and Kyle Vance on developing the code.
I reached out to the Mozilla Developer webpage to learn how to use some of the functions. ( https://developer.mozilla.org/en-US/ )
I reached out to the Day.js webpage to learn how to use the tool. ( https://day.js.org/en/ )


## License

    MIT License