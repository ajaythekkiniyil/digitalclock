function startClock() {
    var tag = null;
    var date = new Date();
    var hours = date.getHours(); //return 0-23

    if (hours < 12) {
        tag = "AM";
    }
    if (hours > 12) {
        tag = "PM";

        hours -= 12;
        if (hours < 10) {
            //setting hours to two digit - adding zero infront
            hours = "0" + hours.toString();
        }



    }
    if (hours == 0) {
        hours = 12;
        tag = 'PM';
    }


    var minutes = date.getMinutes(); //return 0-59
    //setting minutes to two digit - adding zero infront
    if (minutes < 10) {
        minutes = "0" + minutes.toString();
    }

    var seconds = date.getSeconds(); //return 0-59
    //setting seconds to two digit - adding zero infront
    if (seconds < 10) {
        seconds = "0" + seconds.toString();
    }
    var string = (hours.toString() + ":" + minutes.toString() + ":" + seconds.toString() + " " + tag)
    document.getElementById('display').innerHTML = string;
}
window.setInterval(startClock, 1000);