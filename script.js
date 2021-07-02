var curDate = $('#currentDay')
var saveBtn9 = document.querySelector(".saveBtn9")
var saveBtn10 = document.querySelector(".saveBtn10")
var saveBtn11 = document.querySelector(".saveBtn11")
var saveBtn12 = document.querySelector(".saveBtn12")
var saveBtn1 = document.querySelector(".saveBtn1")
var saveBtn2 = document.querySelector(".saveBtn2")
var saveBtn3 = document.querySelector(".saveBtn3")
var saveBtn4 = document.querySelector(".saveBtn4")
var saveBtn5 = document.querySelector(".saveBtn5")
var notes9 = $('#9')
var notes10 = $('#10')
var notes11 = $('#11')
var notes12 = $('#12')
var notes1 = $('#1')
var notes2 = $('#2')
var notes3 = $('#3')
var notes4 = $('#4')
var notes5 = $('#5')

saveBtn9.addEventListener("click", function () {
    localStorage.setItem("notes9", JSON.stringify(notes9));

});

saveBtn10.addEventListener("click", function () {
    localStorage.setItem("notes10", JSON.stringify(notes10));

});

saveBtn11.addEventListener("click", function () {
    localStorage.setItem("notes11", JSON.stringify(notes11));

});

saveBtn12.addEventListener("click", function () {
    localStorage.setItem("notes12", JSON.stringify(notes12));

});

saveBtn1.addEventListener("click", function () {
    localStorage.setItem("notes1", JSON.stringify(notes1));

});

saveBtn2.addEventListener("click", function () {
    localStorage.setItem("notes2", JSON.stringify(notes2));

});

saveBtn3.addEventListener("click", function () {
    localStorage.setItem("notes3", JSON.stringify(notes3));

});

saveBtn4.addEventListener("click", function () {
    localStorage.setItem("notes4", JSON.stringify(notes4));

});

saveBtn5.addEventListener("click", function () {
    localStorage.setItem("notes5", JSON.stringify(notes5));

});


function setSchedule() {

    document.querySelector("#currentDay").textContent = moment().format("dddd, MMMM Do")

    var curTime24 = Number(moment().format("k"))
    console.log(curTime24)
//var curTime24 = 14;
    for (var i = 9; i < 18; i++) {
        if (curTime24 > i)
            $(".description").eq(i - 9).addClass("past");
        else if (curTime24 === i)
            $(".description").eq(i - 9).addClass("present");
        else if (curTime24 < i)
            $(".description").eq(i - 9).addClass("future");
    }

   $('#9').textContent = JSON.parse(localStorage.getItem("#9"));
   $('#10').textContent =JSON.parse(localStorage.getItem("#10"));
   $('#11').textContent =JSON.parse(localStorage.getItem("#11"));
   $('#12').textContent =JSON.parse(localStorage.getItem("#12"));
   $('#1').textContent = JSON.parse(localStorage.getItem("#1"));
   $('#2').textContent =JSON.parse(localStorage.getItem("#2"));
   $('#3').textContent = JSON.parse(localStorage.getItem("#3"));
   $('#4').textContent = JSON.parse(localStorage.getItem("#4"));
   $('#5').textContent = JSON.parse(localStorage.getItem("#5"));
}

// function saveSchedule () {

    
//     localStorage.removeItem("notes9");
//     localStorage.setItem("notes9", JSON.stringify(notes9));

//     localStorage.removeItem("notes10");
//     localStorage.setItem("notes10", JSON.stringify(notes10));
    
//     localStorage.removeItem("notes11");
//     localStorage.setItem("notes11", JSON.stringify(notes11));
    
//     localStorage.removeItem("notes12");
//     localStorage.setItem("notes12", JSON.stringify(notes12));
    
//     localStorage.removeItem("notes1");
//     localStorage.setItem("notes1", JSON.stringify(notes1));
    
//     localStorage.removeItem("notes2");
//     localStorage.setItem("notes2", JSON.stringify(notes2));
    
//     localStorage.removeItem("notes3");
//     localStorage.setItem("notes3", JSON.stringify(notes3));
    
//     localStorage.removeItem("notes4");
//     localStorage.setItem("notes4", JSON.stringify(notes4));
    
//     localStorage.removeItem("notes5");
//     localStorage.setItem("notes5", JSON.stringify(notes5));

// }

setSchedule();