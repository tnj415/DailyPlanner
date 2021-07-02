var curDate = $('#currentDay')

$('button').on("click", function () {
    console.log('clicked')
    //save value at .description to note
    note = $(this).siblings('.description').val();
    //save id of block we access with click
    slot = $(this).parent().attr('id');
    // save in localStorage
    localStorage.setItem(slot, note);
});

function getSchedule() {

    for (var i = 9; i < 18; i++) {
        
        var str = i.toString();
        //look for id, store item in child
        $('#' + str).children().eq(1).val(localStorage.getItem(str));
    }
}
function setSchedule() {
    //display date at id current day
    document.querySelector("#currentDay").textContent = moment().format("dddd, MMMM Do")

    var curTime24 = Number(moment().format("k"))

    //color schedule depending on current time
    for (var i = 9; i < 18; i++) {
        if (curTime24 > i)
            $(".description").eq(i - 9).addClass("past");
        else if (curTime24 === i)
            $(".description").eq(i - 9).addClass("present");
        else if (curTime24 < i)
            $(".description").eq(i - 9).addClass("future");
    }
}

setSchedule();
getSchedule()