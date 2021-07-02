var curDate = $('#currentDay')

$('button').on("click", function () {
    console.log('clicked')
    note = $(this).siblings('.description').val();
    slot = $(this).parent().attr('id');
    console.log('note', note)
    console.log('slot', slot)
    // save in localStorage
    localStorage.setItem(slot, note);
});

function getSchedule() {

    for (var i = 9; i < 18; i++) {
        var temp = "";
        var str = i.toString();
        $('#' + str).children().eq(1).val(localStorage.getItem(str));

    }

}


function setSchedule() {

    document.querySelector("#currentDay").textContent = moment().format("dddd, MMMM Do")

    var curTime24 = Number(moment().format("k"))

    var curTime24 = 14;
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