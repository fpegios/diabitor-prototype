// hide preloader
function hidePreloader() {
    $('.preloader-container').addClass('transparent');
    $(".preloader-container").on("webkitTransitionEnd otransitonend oTransitionEnd msTransitionEnd transitionend", function(event) {
        $('.preloader-container').remove();
    });
}

// hide the active component and show the selected
function showComponent(component) {
    $(".active").removeClass("active").addClass("hidden");
    $(getDataComponent(component)).addClass("active").removeClass("hidden");
}

// show component like a modal on top of the other
function showModal(component) {
    $(getDataComponent(component)).addClass("active").removeClass("hidden");
}

// update history measurement page
function updateHistoryMeasurement(mode, id) {
    if (mode == "kid") {
        if (id == 0) {
            $( getDataComponent("history-measurement") + " .nav-arrow.prev" ).hide();
            $( getDataComponent("history-measurement") + " .nav-arrow.next" ).show();
        } else if (id == 1) {
            $(getDataComponent("history-measurement") + " .nav-arrow.prev" ).show();
            $(getDataComponent("history-measurement") + " .nav-arrow.next" ).show();
        } else if (id == 2) {
            $( getDataComponent("history-measurement") + " .nav-arrow.prev" ).show();
            $( getDataComponent("history-measurement") + " .nav-arrow.next" ).hide();
        }
        $( getDataComponent("history-measurement") + " .glucose-bottle img").attr('src', measurements[id].img);
        $( getDataComponent("history-measurement") + " .message").html(measurements[id].message);
        $( getDataComponent("history-measurement") + " .value").html(measurements[id].value);
        $( getDataComponent("history-measurement") + " .date").html(measurements[id].date);
        $( getDataComponent("history-measurement") + " .time").html(measurements[id].time);
    } else {
        if (id == 0) {
            $( getDataComponent("parent-history-measurement") + " .nav-arrow.prev" ).hide();
            $( getDataComponent("parent-history-measurement") + " .nav-arrow.next" ).show();
        } else if (id == 1) {
            $( getDataComponent("parent-history-measurement") + " .nav-arrow.prev" ).show();
            $( getDataComponent("parent-history-measurement") + " .nav-arrow.next" ).show();
        } else if (id == 2) {
            $( getDataComponent("parent-history-measurement") + " .nav-arrow.prev" ).show();
            $( getDataComponent("parent-history-measurement") + " .nav-arrow.next" ).hide();
        }
        $( getDataComponent("parent-history-measurement") + " .glucose-bottle img").attr('src', measurements[id].img);
        $( getDataComponent("parent-history-measurement") + " .message").html(measurements[id].message);
        $( getDataComponent("parent-history-measurement") + " .value").html(measurements[id].value);
        $( getDataComponent("parent-history-measurement") + " .date").html(measurements[id].date);
        $( getDataComponent("parent-history-measurement") + " .time").html(measurements[id].time);
    }
}

// get component reference value
function getDataComponent(component) {
    return "[data-component=" + component + "]";
}

// generate one month measurements
function generateRandomMeasurements() {
    for (day = 1; day <= 30; day++) { 
        for (time = 1; time <= 4; time++) {
            measurement.date = day + "/" + (new Date().getMonth()) + "";

            if (time == 1) { // breakfast
                measurement.time = kid.breakfastTime;
            } else if (time == 2) { // lunch
                measurement.time = kid.lunchTime;
            } else if (time == 3) { // dinner
                measurement.time = kid.dinnerTime;
            } else if (time == 4) { // bedtime
                measurement.time = kid.bedTime;
            }
    
            measurement.value = ((Math.floor(Math.random() * 140) + 20) / 10).toFixed(1);

            if (measurement.value < 6) { // low
                measurement.img = measurementImage[0]
                measurement.message = measurementMessage[0];
                measurement.feedbackImg = measurementFeedbackImg[0];
            } else if (measurement.value > 10) { // high
                measurement.img = measurementImage[1]
                measurement.message = measurementMessage[1];
                measurement.feedbackImg = measurementFeedbackImg[1];
            } else { // normal
                measurement.img = measurementImage[2]
                measurement.message = measurementMessage[2];
                measurement.feedbackImg = measurementFeedbackImg[2];
            }
            measurements.unshift(measurement);
            measurement = [];
        }
    }
    console.log(measurements);
}