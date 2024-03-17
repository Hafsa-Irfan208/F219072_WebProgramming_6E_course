function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var period = "AM";

    if (hours >= 12) {
        period = "PM";
    }

    if (hours > 12) {
        hours = hours - 12;
    }

    if (hours === 0) {
        hours = 12;
    }

    $('#hours').text(("0" + hours).slice(-2));
    $('#minutes').text(("0" + minutes).slice(-2));
    $('#seconds').text(("0" + seconds).slice(-2));
    $('#period').text(period);
}

$(document).ready(function() {
    setInterval(updateClock, 1000);
});
