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

    // FOOTER
    //
    $( ".monitor-tab" ).click(function() {
        showComponent("monitor");
    });
    
    $( ".history-tab" ).click(function() {
        showComponent("history");
    });

    //////////////////////////////////////////////////////////////
    // PARENT
    //////////////////////////////////////////////////////////////

    // PARENT BOTTOM MENU
    $( ".parent-status-tab" ).click(function() {
        showComponent("parent-status");
    });
    
    $( ".parent-history-tab" ).click(function() {
        showComponent("parent-history");
    });

    $( ".parent-settings-tab" ).click(function() {
        $( getDataComponent("parent-settings") + " .settings-name").html(kid.name);
        $( getDataComponent("parent-settings") + " .settings-age").html(kid.age);
        $( getDataComponent("parent-settings") + " .settings-regimen").html(kid.regimenType);
        $( getDataComponent("parent-settings") + " .settings-ic").html(kid.icRatio);

        $( getDataComponent("parent-settings") + " .settings-input-name").val(kid.name);
        $( getDataComponent("parent-settings") + " .settings-input-age").val(kid.age);
        $( getDataComponent("parent-settings") + " .settings-input-regimen").val(kid.regimenType);
        $( getDataComponent("parent-settings") + " .settings-input-ic").val(kid.icRatio);
        showComponent("parent-settings");
    });

    // PARENT SETUP
    $( getDataComponent("parent-setup") + " .submit" ).off().click(function() {
        kid.name = $( ".setup-name" ).val();
        kid.age = $( ".setup-age" ).val();
        kid.regimenType = $( ".setup-regimen" ).val();
        kid.icRatio = $( ".setup-ic" ).val();
        showComponent("parent-setup-2");
    });

    // PARENT SETUP 2
    $( getDataComponent("parent-setup-2") + " .back-btn" ).off().click(function() {
         $( ".setup-name" ).val(kid.name);
         $( ".setup-age" ).val(kid.age);
         $( ".setup-regimen" ).val(kid.regimenType);
         $( ".setup-ic" ).val(kid.icRatio);
         showComponent("parent-setup");
    });

    $( getDataComponent("parent-setup-2") + " .submit" ).off().click(function() {
        kid.breakfastTime = $( ".setup-breakfasttime" ).val();
        kid.lunchTime = $( ".setup-lunchtime" ).val();
        kid.dinnerTime = $( ".setup-dinnertime" ).val();
        kid.bedTime = $( ".setup-bedtime" ).val();
        showComponent("parent-setup-3");
    });

    // PARENT SETUP 3
    $( getDataComponent("parent-setup-3") + " .back-btn" ).off().click(function() {
        $( ".setup-breakfasttime" ).val(kid.breakfastTime);
        $( ".setup-lunchtime" ).val(kid.lunchTime);
        $( ".setup-dinnertime" ).val(kid.dinnerTime);
        $( ".setup-bedtime" ).val(kid.bedTime);
        showComponent("parent-setup-2");
    });

    $( getDataComponent("parent-setup-3") + " .submit" ).off().click(function() {
        kid.breakfastDose = $( ".setup-breakfastdose" ).val();
        kid.lunchDose = $( ".setup-lunchdose" ).val();
        kid.dinnerDose = $( ".setup-dinnerdose" ).val();
        kid.bedDose = $( ".setup-beddose" ).val();
        kid.active = true;
        
        generateRandomMeasurements();
        $( getDataComponent("parent-status") + " .value").html(measurements[0].value);
        $( getDataComponent("parent-status") + " .date").html(measurements[0].date);
        $( getDataComponent("parent-status") + " .time").html(measurements[0].time);
        $( getDataComponent("parent-status") + " .value").html(measurements[0].value);
        $( getDataComponent("parent-status") + " .message").html(measurements[0].message);
        $( getDataComponent("parent-status") + " .glucose-tube img").attr('src', measurements[0].img);
        $( getDataComponent("parent-status") + " .feedback img").attr('src', measurements[0].img);
        showComponent("parent-status");
    });

    // PARENT STATUS
    $( getDataComponent("parent-status") + " .parent-history-tab" ).off().click(function() {
        $( getDataComponent("parent-history") + " .meas-1 .value").html(measurements[0].value);
        $( getDataComponent("parent-history") + " .meas-1 .date").html(measurements[0].date);
        $( getDataComponent("parent-history") + " .meas-1 .time").html(measurements[0].time);
        $( getDataComponent("parent-history") + " .meas-1 img").attr('src', measurements[0].img);

        $( getDataComponent("parent-history") + " .meas-2 .value").html(measurements[1].value);
        $( getDataComponent("parent-history") + " .meas-2 .date").html(measurements[1].date);
        $( getDataComponent("parent-history") + " .meas-2 .time").html(measurements[1].time);
        $( getDataComponent("parent-history") + " .meas-2 img").attr('src', measurements[1].img);

        $( getDataComponent("parent-history") + " .meas-3 .value").html(measurements[2].value);
        $( getDataComponent("parent-history") + " .meas-3 .date").html(measurements[2].date);
        $( getDataComponent("parent-history") + " .meas-3 .time").html(measurements[2].time);
        $( getDataComponent("parent-history") + " .meas-3 img").attr('src', measurements[2].img);
        showComponent("parent-history");
    });
    
    // PARENT HISTORY
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

    // PARENT HISTORY MEASUREMENT
    $( getDataComponent("parent-history-measurement") + " .left-action-btn" ).click(function() {
        showComponent("parent-history");
        parentHistoryMeasurement = 0;
        $( getDataComponent("parent-history-measurement") + " .nav-arrow.prev" ).hide();
    });

    $( getDataComponent("parent-history-measurement") + " .nav-arrow.prev" ).off().click(function() {
        parentHistoryMeasurement = parentHistoryMeasurement - 1;
        updateHistoryMeasurement("parent", parentHistoryMeasurement);
    });

    $( getDataComponent("parent-history-measurement") + " .nav-arrow.next" ).off().click(function() {
        parentHistoryMeasurement = parentHistoryMeasurement + 1;
        updateHistoryMeasurement("parent", parentHistoryMeasurement);
    });
    
    // PARENT SETTINGS
    $( getDataComponent("parent-settings") + " .edit-btn" ).off().click(function() {
        $( getDataComponent("parent-settings") + " .save-btn").removeClass('hidden');
        $( getDataComponent("parent-settings") + " .edit-btn").addClass('hidden');
        $( getDataComponent("parent-settings") + " .input").removeClass('hidden');
        $( getDataComponent("parent-settings") + " .detail-value").addClass('hidden');
    });

    $( getDataComponent("parent-settings") + " .save-btn" ).off().click(function() {
        kid.name = $( getDataComponent("parent-settings") + " .settings-input-name" ).val();
        kid.age = $( getDataComponent("parent-settings") + " .settings-input-age" ).val();
        kid.regimenType = $( getDataComponent("parent-settings") + " .settings-input-regimen" ).val();
        kid.icRatio = $( getDataComponent("parent-settings") + " .settings-input-ic" ).val();

        $( getDataComponent("parent-settings") + " .settings-name").html(kid.name);
        $( getDataComponent("parent-settings") + " .settings-age").html(kid.age);
        $( getDataComponent("parent-settings") + " .settings-regimen").html(kid.regimenType);
        $( getDataComponent("parent-settings") + " .settings-ic").html(kid.icRatio);

        $( getDataComponent("parent-settings") + " .save-btn").addClass('hidden');
        $( getDataComponent("parent-settings") + " .edit-btn").removeClass('hidden');
        $( getDataComponent("parent-settings") + " .input").addClass('hidden');
        $( getDataComponent("parent-settings") + " .detail-value").removeClass('hidden');
    });
}