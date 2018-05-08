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
    currentDay = ("0" + (new Date().getDate() - 1)).slice(-2);
    currentMonth = ("0" + (new Date().getMonth() + 1)).slice(-2);

    for (time = 1; time <= 4; time++) {
        measurement.date = currentMonth + "-" + currentDay;

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

    if ((new Date().getDate() - 1) < 1) {
        currentDay = 30;
        currentMonth = ("0" + (new Date().getMonth())).slice(-2);
    } else {
        currentDay = ("0" + (new Date().getDate() - 2)).slice(-2);
        currentMonth = ("0" + (new Date().getMonth() + 1)).slice(-2);
    }

    for (time = 1; time <= 4; time++) {
        measurement.date = currentMonth + "-" + currentDay;

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

    if ((new Date().getDate() - 2) < 1) {
        currentDay = 29;
        currentMonth = ("0" + (new Date().getMonth())).slice(-2);
    } else {
        currentDay = ("0" + (new Date().getDate() - 3)).slice(-2);
        currentMonth = ("0" + (new Date().getMonth() + 1)).slice(-2);
    }

    for (time = 1; time <= 4; time++) {
        measurement.date = currentMonth + "-" + currentDay;

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

// get measurement details
function measureGlucoseLevel() {
    currentDay = ("0" + new Date().getDate()).slice(-2);
    currentMonth = ("0" + (new Date().getMonth() + 1)).slice(-2);
    measurement.date = currentMonth + "-" + currentDay; 

    currentHour = ("0" + new Date().getHours()).slice(-2);
    currentMinute = ("0" + (new Date().getMinutes())).slice(-2);
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

    if (measurements[0].feedbackΜessage == measurementMessage[0]) {
        $( getDataComponent("parent-status") + " .glucose-data").removeClass("ok high");
        $( getDataComponent("parent-status") + " .glucose-data").addClass("low");
    } else if (measurements[0].feedbackΜessage == measurementMessage[1]) {
        $( getDataComponent("parent-status") + " .glucose-data").removeClass("ok low");
        $( getDataComponent("parent-status") + " .glucose-data").addClass("high");
    } else {
        $( getDataComponent("parent-status") + " .glucose-data").removeClass("low high");
        $( getDataComponent("parent-status") + " .glucose-data").addClass("ok");
    }

}

// notify kid for injection after specific seconds
function notifyForInjection(sec) {
    injectionNotificationTimeout = setTimeout(function(){ 
        time = (Math.floor(Math.random() * 4) + 1);
        if (time == 1) { // breakfast
            doses = kid.breakfastDose;
        } else if (time == 2) { // lunch
            doses = kid.lunchDose;
        } else if (time == 3) { // dinner
            doses = kid.dinnerDose;
        } else if (time == 4) { // bedtime
            doses = kid.bedDose;
        }

        if (doses == 1) {
            message = doses + " " + measurementAction[1]; 
        } else {
            message = doses + " " + measurementAction[3];
        }
        $( getDataComponent("kid-injection-notification") + " .message .subtitle").html(message);
        $( getDataComponent("kid-injection-notification") + " .datetime .date").html("now");
        $( getDataComponent("kid-injection-notification") + " .datetime .time").html("");
        if (currentMode == "kid") {
            $( getDataComponent("kid-monitor") + " .modal" ).addClass("hidden");
            showModal("kid-injection-notification") ;
        }
    }, sec * 1000);
}

// notify kid for measurement after specific seconds
function notifyForMeasurement(sec) {
    measurementNotificationTimeout = setTimeout(function(){ 
        $( getDataComponent("kid-measurement-notification") + " .datetime .date").html("now");
        $( getDataComponent("kid-measurement-notification") + " .datetime .time").html("");
        if (currentMode == "kid") {
            $( getDataComponent("kid-monitor") + " .modal" ).addClass("hidden");
            showModal("kid-measurement-notification") ;
        }
    }, sec * 1000);
}

// notify parent for new measurement
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

// draw d3 graph
function draw(data, graph) {

    $( "svg" ).remove();

    // get the first ten elements of data
    data = [
        data[0],
        data[1],
        data[2],
        data[3],
        data[4],
        data[5],
        data[6],
        data[7],
        data[8],
        data[9]
    ];

    // set the dimensions and margins of the graph
    var margin = {top: 20, right: 20, bottom: 40, left: 50},
        width = 375 - margin.left - margin.right,
        height = 250 - margin.top - margin.bottom,
        max_bgl_value = 21,
        kidsAge = 10,
        high_threshold = 10,
        low_threshold = 6;

    
    if (kid > 12) {
        high_threshold = 12;
        low_threshold = 8;
    } else {
        high_threshold = 10;
        low_threshold = 6;
    }

    // parse the date / time
    var parseDate = d3.timeParse("%Y-%m-%d %H:%M:%S");
    // %e space padded day of month
    // %B full month name
    var formatTime = d3.timeFormat("%e/%B");

    // set the ranges
    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    // define the div for the tooltip
    var div = d3.select(graph).append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

    var calculated_bgl_line = d3.line()
        .x( function(d) { return x(d.timestamp); })
        .y( function(d) { return y(d.calculated_bgl); });

    var high_threshold_line = d3.line()
        .x(function(d){ return x(d.timestamp); })
        .y(function(d){ return y(high_threshold); });

    var low_threshold_line = d3.line()
        .x(function(d){ return x(d.timestamp); })
        .y(function(d){ return y(low_threshold); })

    var svg = d3.select(graph).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    data.forEach(function(d, i) {
        currTimestamp = "2018-" + d.date + " " + d.time + ":00";
        d.timestamp = parseDate(currTimestamp);
        d.calculated_bgl = +d.value;
    });

    data.sort(function(a, b){
        return a["timestamp"]-b["timestamp"];
    });

    // scale the range of data
    x.domain(d3.extent(data, function(d){
        return d.timestamp;
    }));
    y.domain([0, d3.max(data, function(d){
        return Math.max(d.calculated_bgl, max_bgl_value);
    })]);

    // Add the calculated_bgl path.
    svg.append("path")
        .data([data])
        .attr("class", "line temp-probe temperature")
        .attr("d", calculated_bgl_line);

    svg.append("path")
        .data([data])
        .attr("class", "line high-threshold")
        .attr("d", high_threshold_line)

    svg.append("path")
        .data([data])
        .attr("class", "line low-threshold")
        .attr("d", low_threshold_line)


    // add the X Axis
    svg.append("g")
        .attr("transform", "translate(0,"+ height + ")")
        .call(d3.axisBottom(x)
              .tickFormat(d3.timeFormat("%m-%d")))
        .selectAll("text")	
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-65)");

    // text label for the x axis
    //   svg.append("text")             
    //       .attr("transform",
    //             "translate(" + (width/2) + " ," + 
    //                            (height + margin.top + 10) + ")")
    //       .style("text-anchor", "middle")
    //       .text("Time of day");

    // add the Y Axis
    svg.append("g")
        .call(d3.axisLeft(y));
     
    // text label for the y axis
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x",0 - (height / 2))
        .attr("dy", "1.75em")
        .style("text-anchor", "middle")
        .text("Glucose level (mmol/L"); 
}