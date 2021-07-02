var curDate = $('#currentDay')
var saveBtn = document.querySelector(".saveBtn")
var notes9 = $('#9')
var notes10 = $('#10')
var notes11 = $('#11')
var notes12 = $('#12')
var notes1 = $('#1')
var notes2 = $('#2')
var notes3 = $('#3')
var notes4 = $('#4')
var notes5 = $('#5')

saveBtn.addEventListener("click", function () {
    saveSchedule();
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

function saveSchedule () {

    
    localStorage.removeItem("notes9");
    localStorage.setItem("notes9", JSON.parse(stringify(notes9)));

    localStorage.removeItem("notes10");
    localStorage.setItem("notes10", JSON.parse(stringify(notes10)));
    
    localStorage.removeItem("notes11");
    localStorage.setItem("notes11", JSON.parse(stringify(notes11)));
    
    localStorage.removeItem("notes12");
    localStorage.setItem("notes12", JSON.parse(stringify(notes12)));
    
    localStorage.removeItem("notes1");
    localStorage.setItem("notes1", JSON.parse(stringify(notes1)));
    
    localStorage.removeItem("notes2");
    localStorage.setItem("notes2", JSON.parse(stringify(notes2)));
    
    localStorage.removeItem("notes3");
    localStorage.setItem("notes3", JSON.parse(stringify(notes3)));
    
    localStorage.removeItem("notes4");
    localStorage.setItem("notes4", JSON.parse(stringify(notes4)));
    
    localStorage.removeItem("notes5");
    localStorage.setItem("notes5", JSON.parse(stringify(notes5)));

}

setSchedule();