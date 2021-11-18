let currentDate = moment();
$("#currentDay").text(currentDate.format("dddd, MMMM Do"));

let currentTime = moment();
$("#currentTime").text(currentTime.format("h"));


// Adding an event listener to save local storage
// I can only seem to hook into the first button, so how can I hook into all buttons to avoid creating 15 different event listener functions? Also, I tried the "submit" functino, but it didn't work. I switched it to click and it started working (began logging to the console)


//Statement to synch up time with color scheme of past, present, or future

let timeOnSchedule = document.querySelectorAll(".hour");
let scheduleEntry = document.querySelectorAll("#scheduleEntry");

//Saving textarea entry as a variable
let textAreaEntry = document.querySelector("#textAreaEntry").value;
console.log(textAreaEntry);


let saveTAEntry = document.querySelector("#saveBtn");

saveTAEntry.addEventListener("click", function(){
    console.log(`${textAreaEntry} saved to local storage`);
    localStorage.setItem("9AM", textAreaEntry);
}); 



// Can we use >, <, and = with time? I'm not sure if it can tell that 1:00pm is greater than 12:00PM in its mind
// if (currentTime > timeOnSchedule) { 
//     scheduleEntry.addClass('past');
// } else if (currentTime == timeOnSchedule) {
//     scheduleEntry.addClass('present');
// } else {
//     scheduleEntry.addClass('future');
// };
// Give div for time section a data-vlue and compare that within the if statement

