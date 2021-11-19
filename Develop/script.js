let currentDate = moment();
$("#currentDay").text(currentDate.format("dddd, MMMM Do, YYYY"));

let currentTime = moment().hour();


let timeBlock = $("textarea")
let saveBtn = $('button')




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
