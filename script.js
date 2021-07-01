var rowEl = document.querySelectorAll(".row")
var colEl = document.querySelectorAll(".col-sm")
// function createSchedule() {
//     for (var i = 0; i < 8; i++) {
//         $(".container").append("<.row> ewrtwer" )

//     }
// }

// createSchedule();

function colorSchedule() {

    console.log(rowEl[0]);
    console.log(rowEl[1]);
    console.log(rowEl[2]);
    console.log(colEl[0]);
    console.log(colEl[1]);
    console.log(colEl);

    rowArr = []
    
    for (var i = 9; i < moment("k"); i++) {

        rowArr.push([row[i]])

        if (moment().format("k") < i)
            rowEl.classList.add("past");
        else if (moment().format("k") === i)
            colEl[i].classList.add("present");
        else if (moment().format("k") > i)
        rowEl[i].classList.add("future");
        else alert(Error)
    }
}

colorSchedule();