var rowEl = document.querySelector(".row")
// function createSchedule() {
//     for (var i = 0; i < 8; i++) {
//         $("body").append("<container>").append("<row>" + "ewrtwer" )

//     }
// }

// createSchedule();

function colorSchedule() {

    for (var i = 9; i < moment(k); i++) {
        if (moment(k) < i)
            rowEl.addClass(".past");
        else if (moment(k) === i)
            rowEl.addClass(".present");
        else rowEl.addClass(".future");
    }
}