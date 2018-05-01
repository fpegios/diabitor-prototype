// initialize click events
function initClickEvents() {
    // HEADER
    // 
    $( getDataComponent("measurement") + " .left-action-btn" ).click(function() {
        $( getDataComponent("measurement") + " .glucose-data" ).addClass("transparent");
        $( getDataComponent("measurement") + " .glucose-message" ).addClass("transparent");
        $( getDataComponent("measurement") + " .glucose-bottle img").attr('src', "");
        showComponent("monitor");
    });

    $( getDataComponent("history-measurement") + " .left-action-btn" ).click(function() {
        showComponent("history");
        historyMeasurement = 0;
        $( getDataComponent("history-measurement") + " .nav-arrow.prev" ).hide();
    });
    $( getDataComponent("parent-history-measurement") + " .left-action-btn" ).click(function() {
        showComponent("parent-history");
        parentHistoryMeasurement = 0;
        $( getDataComponent("parent-history-measurement") + " .nav-arrow.prev" ).hide();
    });

    // BODY
    //
    $( "#kid-mode" ).click(function() {
        // showComponent("sign-up");
    });
    $( "#parent-mode" ).off().click(function() {
        if (kid.active) {
            showComponent("parent-status");
        } else {
            showComponent("parent-setup");
        }
    });

    $( "#monitor-btn" ).click(function() {
        showComponent("measurement");
        $( getDataComponent("measurement") + " .glucose-bottle img").attr('src', "assets/tube.gif");

        setTimeout(function() {
            $( getDataComponent("measurement") + " .glucose-data" ).removeClass("transparent");
            setTimeout(function() {
                $( getDataComponent("measurement") + " .glucose-message" ).removeClass("transparent");
            }, 750);
        }, 2800);
    });
    
    $( getDataComponent("history") + " .meas-1" ).off().click(function() {
        historyMeasurement = 0;
        updateHistoryMeasurement("kid", historyMeasurement);
        showComponent("history-measurement");
    });
    $( getDataComponent("history") + " .meas-2" ).off().click(function() {
        historyMeasurement = 1;
        updateHistoryMeasurement("kid", historyMeasurement);
        showComponent("history-measurement");
    });
    $( getDataComponent("history") + " .meas-3" ).off().click(function() {
        historyMeasurement = 2;
        updateHistoryMeasurement("kid", historyMeasurement);
        showComponent("history-measurement");
    });
    $( getDataComponent("history-measurement") + " .nav-arrow.prev" ).off().click(function() {
        historyMeasurement = historyMeasurement - 1;
        updateHistoryMeasurement("kid", historyMeasurement);
    });
    $( getDataComponent("history-measurement") + " .nav-arrow.next" ).off().click(function() {
        historyMeasurement = historyMeasurement + 1;
        updateHistoryMeasurement("kid", historyMeasurement);
    });
    $( getDataComponent("parent-history") + " .meas-1" ).off().click(function() {
        parentHistoryMeasurement = 0;
        updateHistoryMeasurement("parent", parentHistoryMeasurement);
        showComponent("parent-history-measurement");
    });
    $( getDataComponent("parent-history") + " .meas-2" ).off().click(function() {
        parentHistoryMeasurement = 1;
        updateHistoryMeasurement("parent", parentHistoryMeasurement);
        showComponent("parent-history-measurement");
    });
    $( getDataComponent("parent-history") + " .meas-3" ).off().click(function() {
        parentHistoryMeasurement = 2;
        updateHistoryMeasurement("parent", parentHistoryMeasurement);
        showComponent("parent-history-measurement");
    });
    $( getDataComponent("parent-history-measurement") + " .nav-arrow.prev" ).off().click(function() {
        parentHistoryMeasurement = parentHistoryMeasurement - 1;
        updateHistoryMeasurement("parent", parentHistoryMeasurement);
    });
    $( getDataComponent("parent-history-measurement") + " .nav-arrow.next" ).off().click(function() {
        parentHistoryMeasurement = parentHistoryMeasurement + 1;
        updateHistoryMeasurement("parent", parentHistoryMeasurement);
    });
    
    // FOOTER
    //
    $( ".monitor-tab" ).click(function() {
        showComponent("monitor");
    });
    
    $( ".history-tab" ).click(function() {
        showComponent("history");
    });
    
    $( ".profile-tab" ).click(function() {
        showComponent("profile");
    });
    
    $( ".parent-status-tab" ).click(function() {
        showComponent("parent-status");
    });
    
    $( ".parent-history-tab" ).click(function() {
        showComponent("parent-history");
    });
    
}