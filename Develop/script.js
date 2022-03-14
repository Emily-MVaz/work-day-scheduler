$( document ).ready(function () {
    //setting current day at top
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));


   //event listener for save button
   $(".saveBtn").click(function() {
        
        //grab values from description
        // console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id")

        //put in local storage
        localStorage.setItem(time, text);
    })

    //local storage grab
    $("#09 .description").val(localStorage.getItem("09"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));



    function timeTracker() {
        var currentHour = moment().hour();

        //looping over each hour block
        $(".time-block").each(function () {
            var hourBlock =  parseInt($(this).attr("id"));
            // console.log(hourBlock, currentHour)

            //when the hourblock is before the current time
            if(hourBlock < currentHour) {
                //classes found in css file change hour block color
                $(this).addClass("past");
            }
            //when the hourblock is the same as the current time
            else if (hourBlock === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            //when the hourblock is after the current time  
            else { 
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })

    }

    //run function
    timeTracker();



 





















})