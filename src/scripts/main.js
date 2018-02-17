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
        historyMeasurement = 0;
        $( ".history-measurement .nav-arrow.prev" ).hide();
    });
    $( ".parent-history-measurement .left-action-btn" ).click(function() {
        show(".parent-history");
        parentHistoryMeasurement = 0;
        $( ".parent-history-measurement .nav-arrow.prev" ).hide();
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
        historyMeasurement = 0;
        updateHistoryMeasurement("kid", historyMeasurement);
        show(".history-measurement");
    });
    $( ".history .meas-2" ).off().click(function() {
        historyMeasurement = 1;
        updateHistoryMeasurement("kid", historyMeasurement);
        show(".history-measurement");
    });
    $( ".history .meas-3" ).off().click(function() {
        historyMeasurement = 2;
        updateHistoryMeasurement("kid", historyMeasurement);
        show(".history-measurement");
    });
    $( ".history-measurement .nav-arrow.prev" ).off().click(function() {
        historyMeasurement = historyMeasurement - 1;
        updateHistoryMeasurement("kid", historyMeasurement);
    });
    $( ".history-measurement .nav-arrow.next" ).off().click(function() {
        historyMeasurement = historyMeasurement + 1;
        updateHistoryMeasurement("kid", historyMeasurement);
    });
    $( ".parent-history .meas-1" ).off().click(function() {
        parentHistoryMeasurement = 0;
        updateHistoryMeasurement("parent", parentHistoryMeasurement);
        show(".parent-history-measurement");
    });
    $( ".parent-history .meas-2" ).off().click(function() {
        parentHistoryMeasurement = 1;
        updateHistoryMeasurement("parent", parentHistoryMeasurement);
        show(".parent-history-measurement");
    });
    $( ".parent-history .meas-3" ).off().click(function() {
        parentHistoryMeasurement = 2;
        updateHistoryMeasurement("parent", parentHistoryMeasurement);
        show(".parent-history-measurement");
    });
    $( ".parent-history-measurement .nav-arrow.prev" ).off().click(function() {
        parentHistoryMeasurement = parentHistoryMeasurement - 1;
        updateHistoryMeasurement("parent", parentHistoryMeasurement);
    });
    $( ".parent-history-measurement .nav-arrow.next" ).off().click(function() {
        parentHistoryMeasurement = parentHistoryMeasurement + 1;
        updateHistoryMeasurement("parent", parentHistoryMeasurement);
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
    historyMeasurement = 0;
    parentHistoryMeasurement = 0;
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
        if (id == 0) {
            $( ".parent-history-measurement .nav-arrow.prev" ).hide();
            $( ".parent-history-measurement .nav-arrow.next" ).show();
        } else if (id == 1) {
            $( ".parent-history-measurement .nav-arrow.prev" ).show();
            $( ".parent-history-measurement .nav-arrow.next" ).show();
        } else if (id == 2) {
            $( ".parent-history-measurement .nav-arrow.prev" ).show();
            $( ".parent-history-measurement .nav-arrow.next" ).hide();
        }
        $( ".parent-history-measurement .glucose-bottle img").attr('src', measurements[id].img);
        $( ".parent-history-measurement .message").html(measurements[id].message);
        $( ".parent-history-measurement .value").html(measurements[id].value);
        $( ".parent-history-measurement .date").html(measurements[id].date);
        $( ".parent-history-measurement .day").html(measurements[id].day);
    }
}