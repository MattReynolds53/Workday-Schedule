let currentDate = moment();
$("#currentDay").text(currentDate.format("dddd, MMMM Do, YYYY"));

let currentTime = moment().hour();
// $("#currentTime").text(currentTime.format('h'));


// Adding an event listener to save local storage
// I can only seem to hook into the first button, so how can I hook into all buttons to avoid creating 15 different event listener functions? Also, I tried the "submit" functino, but it didn't work. I switched it to click and it started working (began logging to the console)


//Statement to synch up time with color scheme of past, present, or future


// let scheduleEntry = document.querySelectorAll("#scheduleEntry");
let timeBlock = $("textarea")
let saveBtn = $('button')

//Saving textarea entry as a variable
// let textAreaEntry = document.querySelector("#textAreaEntry").value;
// console.log(textAreaEntry);


// let saveTAEntry = document.querySelector("#saveBtn");

// saveTAEntry.on("click", function(){
//     console.log(`${textAreaEntry} saved to local storage`);
//     localStorage.setItem("9AM", textAreaEntry);
// }); 



// Can we use >, <, and = with time? I'm not sure if it can tell that 1:00pm is greater than 12:00PM in its mind

function setColor() {
    
    timeBlock.each(function() {

        let hour = $(this).attr('id');
        
        if (currentTime > hour) { 
            $(this).addClass('past');
        } else if (currentTime == hour) {
            $(this).removeClass('past');
            $(this).addClass('present');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        };
    })
    
}

saveBtn.on('click', function() {
    let id = $(this).attr('id')
    let task = $(this).parent('div').siblings('div').children('textarea').val()
    localStorage.setItem(id, task)
    getTasks()
})

function getTasks() {
    for (let i = 9; i < 18; i++) {
        var getTask = localStorage.getItem(i)
        $("#" + i).text(getTask)
    }
}

getTasks()
setColor()

// Give div for time section a data-vlue and compare that within the if statement

