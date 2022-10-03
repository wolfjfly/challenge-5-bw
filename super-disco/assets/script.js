var today=moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
console.log('wkday,month,day',currentDay);


var computerTime=today.format("HH");
console.log("Time is ",computerTime);

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var inputText = $(this).siblings(".description").val();
        var blockTime = $(this).parent().attr("id");
        localStorage.setItem(blockTime, inputText);
        $("#saveAck").removeClass("hidden")
        setTimeout(showAck, 5000);
    })
    function showAck(){
        $("#saveAck").addClass("hidden");
    }

    function setBlockColor() {
        $(".row").each(function () {
            var currentHour = parseInt($(this).attr("id").split("current-time")[0]);
            console.log('computer time',computerTime)
            console.log('block time',currentHour)
            
            if (computerTime < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (computerTime === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    setBlockColor();
})
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));