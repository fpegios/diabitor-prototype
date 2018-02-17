$( document ).ready(function() {
    includeComponents();
    initVariables();
});

// HIDE PRELOADER WHEN EVERYTHING IS LOADED
$(window).on('load', function() {
    hidePreloader();
});

// include all html components
function includeComponents() {
    var includes = $('[data-include]');
    $.each(includes, function(){
        var file = 'src/views/' + $(this).data('include') + '.html';
        $(this).load(file, function() {
            initClickEvents();
        });
    });
}

// initialize click events
function initClickEvents() {
    // HEADER
    // 
    $( ".measurement .left-action-btn" ).click(function() {
        show(".monitor");
    });
    $( ".history-measurement .left-action-btn" ).click(function() {
        show(".history");
        historyMeasurementKid = 0;
        $( ".history-measurement .nav-arrow.prev" ).hide();
    });

    // BODY
    // 
    $( "#kid-mode" ).click(function() {
        show(".monitor");
    });
    $( "#parent-mode" ).click(function() {
        show(".parent-status");
    });
    
    $( "#monitor-btn" ).click(function() {
        show(".measurement");
    });
    $( ".history .meas-1" ).off().click(function() {
        historyMeasurementKid = 0;
        updateHistoryMeasurement("kid", historyMeasurementKid);
        show(".history-measurement");
    });
    $( ".history .meas-2" ).off().click(function() {
        historyMeasurementKid = 1;
        updateHistoryMeasurement("kid", historyMeasurementKid);
        show(".history-measurement");
    });
    $( ".history .meas-3" ).off().click(function() {
        historyMeasurementKid = 2;
        updateHistoryMeasurement("kid", historyMeasurementKid);
        show(".history-measurement");
    });
    $( ".history-measurement .nav-arrow.prev" ).off().click(function() {
        historyMeasurementKid = historyMeasurementKid - 1;
        updateHistoryMeasurement("kid", historyMeasurementKid);
    });
    $( ".history-measurement .nav-arrow.next" ).off().click(function() {
        historyMeasurementKid = historyMeasurementKid + 1;
        updateHistoryMeasurement("kid", historyMeasurementKid);
    });
    
    // FOOTER
    //
    $( ".monitor-tab" ).click(function() {
        show(".monitor");
    });
    
    $( ".history-tab" ).click(function() {
        show(".history");
    });
    
    $( ".profile-tab" ).click(function() {
        show(".profile");
    });
    
    $( ".parent-status-tab" ).click(function() {
        show(".parent-status");
    });
    
    $( ".parent-history-tab" ).click(function() {
        show(".parent-history");
    });
}

// hide preloader
function hidePreloader() {
    $('.preloader-container').addClass('transparent');
    $(".preloader-container").on("webkitTransitionEnd otransitonend oTransitionEnd msTransitionEnd transitionend", function(event) {
        $('.preloader-container').remove();
    });
}

// hide active element and show the selected one
function show(element){
    $(".active").removeClass("active").addClass("hidden");
    $( element).removeClass("hidden").addClass("active");
}

// initialize variables
function initVariables() {
    historyMeasurementKid = 0;
    ParentHistoryMeasurement = 0;
}

// update history measurement page
function updateHistoryMeasurement(mode, id) {
    if (mode == "kid") {
        if (id == 0) {
            $( ".history-measurement .nav-arrow.prev" ).hide();
            $( ".history-measurement .nav-arrow.next" ).show();
        } else if (id == 1) {
            $( ".history-measurement .nav-arrow.prev" ).show();
            $( ".history-measurement .nav-arrow.next" ).show();
        } else if (id == 2) {
            $( ".history-measurement .nav-arrow.prev" ).show();
            $( ".history-measurement .nav-arrow.next" ).hide();
        }
        $( ".history-measurement .glucose-bottle img").attr('src', measurements[id].img);
        $( ".history-measurement .message").html(measurements[id].message);
        $( ".history-measurement .value").html(measurements[id].value);
        $( ".history-measurement .date").html(measurements[id].date);
        $( ".history-measurement .day").html(measurements[id].day);
    } else {

    }
}