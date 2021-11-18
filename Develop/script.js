let currentDate = moment();
$("#currentDay").text(currentDate.format("dddd, MMMM Do"));

// Adding an event listener to save local storage
// I can only seem to hook into the first button, so how can I hook into all buttons to avoid creating 15 different event listener functions? Also, I tried the "submit" functino, but it didn't work. I switched it to click and it started working (began logging to the console)
let saveInfo = document.querySelector("#btn");
saveInfo.addEventListener("click", function(){
    console.log("Item saved to local storage");
}); 