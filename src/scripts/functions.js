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
    if (id == 0) {
        $( getDataComponent(mode + "-history-measurement") + " .nav-arrow.prev" ).hide();
        $( getDataComponent(mode + "-history-measurement") + " .nav-arrow.next" ).show();
    } else if (id == 1) {
        $(getDataComponent(mode + "-history-measurement") + " .nav-arrow.prev" ).show();
        $(getDataComponent(mode + "-history-measurement") + " .nav-arrow.next" ).show();
    } else if (id == 2) {
        $( getDataComponent(mode + "-history-measurement") + " .nav-arrow.prev" ).show();
        $( getDataComponent(mode + "-history-measurement") + " .nav-arrow.next" ).hide();
    }
    $( getDataComponent(mode + "-history-measurement") + " .glucose-bottle img").attr('src', measurements[id].img);
    $( getDataComponent(mode + "-history-measurement") + " .message").html(measurements[id].feedbackΜessage);
    $( getDataComponent(mode + "-history-measurement") + " .value").html(measurements[id].value);
    $( getDataComponent(mode + "-history-measurement") + " .date").html(measurements[id].date);
    $( getDataComponent(mode + "-history-measurement") + " .time").html(measurements[id].time);
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
                measurement.feedbackΜessage = measurementMessage[0];
                measurement.feedbackImg = measurementFeedbackImg[0];
                measurement.feedbackAction = measurementAction[0];
            } else if (measurement.value > 10) { // high
                doses = (Math.floor(Math.random() * 3) + 1);
                measurement.img = measurementImage[1]
                measurement.feedbackΜessage = measurementMessage[1];
                measurement.feedbackImg = measurementFeedbackImg[1];
                if (doses == 1) {
                    measurement.feedbackAction = doses + " " + measurementAction[1];  
                } else {
                    measurement.feedbackAction = doses + " " + measurementAction[3];
                }
            } else { // normal
                measurement.img = measurementImage[2]
                measurement.feedbackΜessage = measurementMessage[2];
                measurement.feedbackImg = measurementFeedbackImg[2];
                measurement.feedbackAction = measurementAction[2];
            }
            measurements.unshift(measurement);
            measurement = [];
        }
    }
}

// get measurement details
function measureGlucoseLevel() {
    currentDay = ("0" + new Date().getDate()).slice(-2);
    currentMonth = ("0" + (new Date().getMonth() + 1)).slice(-2);
    measurement.date = currentDay + "/" + currentMonth; 

    currentHour = ("0" + new Date().getHours()).slice(-2);
    currentMinute = ("0" + (new Date().getMinutes() + 1)).slice(-2);
    measurement.time = currentHour + ":" + currentMinute;

    measurement.value = ((Math.floor(Math.random() * 140) + 20) / 10).toFixed(1);

    if (measurement.value < 6) { // low
        measurement.img = measurementImage[0];
        measurement.face = measurementFace[0];
        measurement.feedbackΜessage = measurementMessage[0];
        measurement.feedbackImg = measurementFeedbackImg[0];
        measurement.feedbackAction = measurementAction[0];
    } else if (measurement.value > 10) { // high
        doses = (Math.floor(Math.random() * 3) + 1);
        measurement.img = measurementImage[1]
        measurement.face = measurementFace[1];
        measurement.feedbackΜessage = measurementMessage[1];
        measurement.feedbackImg = measurementFeedbackImg[1];
        if (doses == 1) {
            measurement.feedbackAction = doses + " " + measurementAction[1];  
        } else {
            measurement.feedbackAction = doses + " " + measurementAction[3];
        }
    } else { // normal
        measurement.img = measurementImage[2]
        measurement.face = measurementFace[2];
        measurement.feedbackΜessage = measurementMessage[2];
        measurement.feedbackImg = measurementFeedbackImg[2];
        measurement.feedbackAction = measurementAction[2];
    }
    measurements.unshift(measurement);
    measurement = [];
}

// show menu in kid mode only if the kid is teen
function showKidMenu(component) {
    if (kid.isTeen) {
        $( getDataComponent(component) + " .footer" ).removeClass("hidden");
    } else {
        $( getDataComponent(component) + " .footer" ).addClass("hidden");
    }
}

// update parent status component with lstest measurements
function updateParentStatus() {
    $( getDataComponent("parent-status") + " .glucose-tube img").attr('src', measurements[0].img);
    $( getDataComponent("parent-status") + " .glucose-data .date").html(measurements[0].date);
    $( getDataComponent("parent-status") + " .glucose-data .time").html(measurements[0].time);
    $( getDataComponent("parent-status") + " .glucose-data .value").html(measurements[0].value);
    $( getDataComponent("parent-status") + " .feedback .message").html(measurements[0].feedbackΜessage);
}

// notify kid for measurement after specific seconds
function notifyForMeasurementAfter(sec, isAfterMeal) {
    setTimeout(function(){ 
        datetime = (Math.floor(Math.random() * 4) + 1);
        if (isAfterMeal) {
            $( getDataComponent("kid-notification") + " .message .title").html("AFTER MEAL MEASUREMENT!");
        } else {
            $( getDataComponent("kid-notification") + " .message .title").html(kidNotificationMessage[datetime]);
        }
        $( getDataComponent("kid-notification") + " .datetime .date").html("now");
        $( getDataComponent("kid-notification") + " .datetime .time").html("");
        if (currentMode == "kid") {
            $( getDataComponent("kid-monitor") + " .modal" ).addClass("hidden");
            showModal("kid-notification") ;
        }
    }, sec * 1000);
}

function notifyIfNewMeasurement() {
    if (kid.hasNewMeasurement) {
        $( getDataComponent("parent-notification") + " .face img").attr('src', measurements[0].face);
        $( getDataComponent("parent-notification") + " .message .message").html(measurements[0].feedbackΜessage);
        $( getDataComponent("parent-notification") + " .message .value").html(measurements[0].value + " <span class=\"ml\">mmol/l</span>");
        $( getDataComponent("parent-notification") + " .datetime .date").html(measurements[0].date);
        $( getDataComponent("parent-notification") + " .datetime .time").html(measurements[0].time);
        if (currentMode == "parent") {
            showModal("parent-notification") ;
        }
        kid.hasNewMeasurement = false;
    }
    
}