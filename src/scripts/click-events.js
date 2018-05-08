// initialize click events
function initClickEvents() {    
    //////////////////////////////////////////////////////////////
    // HOME
    //////////////////////////////////////////////////////////////
    
    $( "#kid-mode" ).off().click(function() {
        if (kid.active) {
            showKidMenu("kid-monitor");
            showComponent("kid-monitor");
            currentMode = "kid";
        } else {
            $( getDataComponent("home") + " .modal" ).removeClass("hidden");
        }
    });

    $( "#parent-mode" ).off().click(function() {
        if (kid.active) {
            updateParentStatus();
            showComponent("parent-status");
        } else {
            showComponent("parent-setup");
        }
        currentMode = "parent";
    });

    $( getDataComponent("home") + " .modal .submit" ).off().click(function() {
        $( getDataComponent("home") + " .modal" ).addClass("hidden");
    });

    //////////////////////////////////////////////////////////////
    // KID
    //////////////////////////////////////////////////////////////

    $( ".kid.subtitle" ).off().click(function() {
        currentMode = "parent";
        updateParentStatus();
        showComponent("parent-status");
        notifyIfNewMeasurement();
    });

    // KID BOTTOM MENU
    $( ".kid-monitor-tab" ).off().click(function() {
        showKidMenu("kid-monitor");
        showComponent("kid-monitor");
    });
    
    $( ".kid-history-tab" ).off().click(function() {
        $( getDataComponent("kid-history") + " .meas-1 .value").html(measurements[0].value);
        $( getDataComponent("kid-history") + " .meas-1 .date").html(measurements[0].date);
        $( getDataComponent("kid-history") + " .meas-1 .time").html(measurements[0].time);
        $( getDataComponent("kid-history") + " .meas-1 img").attr('src', measurements[0].img);

        $( getDataComponent("kid-history") + " .meas-2 .value").html(measurements[1].value);
        $( getDataComponent("kid-history") + " .meas-2 .date").html(measurements[1].date);
        $( getDataComponent("kid-history") + " .meas-2 .time").html(measurements[1].time);
        $( getDataComponent("kid-history") + " .meas-2 img").attr('src', measurements[1].img);

        $( getDataComponent("kid-history") + " .meas-3 .value").html(measurements[2].value);
        $( getDataComponent("kid-history") + " .meas-3 .date").html(measurements[2].date);
        $( getDataComponent("kid-history") + " .meas-3 .time").html(measurements[2].time);
        $( getDataComponent("kid-history") + " .meas-3 img").attr('src', measurements[2].img);
        
        draw(measurements, "graph-kid");
        showKidMenu("kid-history");
        showComponent("kid-history");
    });

    // KID MONITOR
    $( getDataComponent("kid-monitor") + " #monitor-btn" ).off().click(function() {
        $( getDataComponent("kid-monitor") + " .modal" ).removeClass("hidden");
    });

    $( getDataComponent("kid-monitor") + " .submit" ).off().click(function() {
        $( getDataComponent("kid-monitor") + " .modal" ).addClass("hidden");
        measureGlucoseLevel();
        $( getDataComponent("kid-measurement") + " .face img").attr('src', measurements[0].face);
        $( getDataComponent("kid-measurement") + " .feedback .image img").attr('src', measurements[0].feedbackImg);
        $( getDataComponent("kid-measurement") + " .feedback .action").html(measurements[0].feedbackAction);
        kid.hasNewMeasurement = true;
        showKidMenu("kid-measurement");
        showComponent("kid-measurement");
    });

    // KID MEASUREMENT
    $( getDataComponent("kid-measurement") + " .back-btn" ).off().click(function() {
        showKidMenu("kid-monitor");
        showComponent("kid-monitor");
    });

    // KID HISTORY
    $( getDataComponent("kid-history") + " .meas-1" ).off().click(function() {
        kidHistoryMeasurement = 0;
        updateHistoryMeasurement("kid", kidHistoryMeasurement);
        showKidMenu("kid-history-measurement");
        showComponent("kid-history-measurement");
    });

    $( getDataComponent("kid-history") + " .meas-2" ).off().click(function() {
        kidHistoryMeasurement = 1;
        updateHistoryMeasurement("kid", kidHistoryMeasurement);
        showKidMenu("kid-history-measurement");
        showComponent("kid-history-measurement");
    });

    $( getDataComponent("kid-history") + " .meas-3" ).off().click(function() {
        kidHistoryMeasurement = 2;
        updateHistoryMeasurement("kid", kidHistoryMeasurement);
        showKidMenu("kid-history-measurement");
        showComponent("kid-history-measurement");
    });

    // KID HISTORY MEASUREMENT
    $( getDataComponent("kid-history-measurement") + " .left-action-btn" ).click(function() {
        showKidMenu("kid-history");
        showComponent("kid-history");
        kidHistoryMeasurement = 0;
        $( getDataComponent("kid-history-measurement") + " .nav-arrow.prev" ).hide();
    });

    $( getDataComponent("kid-history-measurement") + " .nav-arrow.prev" ).off().click(function() {
        kidHistoryMeasurement = kidHistoryMeasurement - 1;
        updateHistoryMeasurement("kid", kidHistoryMeasurement);
    });

    $( getDataComponent("kid-history-measurement") + " .nav-arrow.next" ).off().click(function() {
        kidHistoryMeasurement = kidHistoryMeasurement + 1;
        updateHistoryMeasurement("kid", kidHistoryMeasurement);
    });

    // KID INJECTION NOTIFICATION
    $( getDataComponent("kid-injection-notification") ).off().click(function() {
        notifyForMeasurement(5);
        showComponent("kid-monitor");
    });

    // KID MEASUREMENT NOTIFICATION
    $( getDataComponent("kid-measurement-notification") ).off().click(function() {
        showComponent("kid-monitor");
    });

    //////////////////////////////////////////////////////////////
    // PARENT
    //////////////////////////////////////////////////////////////

    // TOP BAR
    $( ".parent.subtitle" ).off().click(function() {
        if ( kid.active) {
            notifyForInjection(5);
            currentMode = "kid";
            showKidMenu("kid-monitor");
            showComponent("kid-monitor");
        }
    });

    // PARENT BOTTOM MENU
    $( ".parent-status-tab" ).off().click(function() {
        showComponent("parent-status");
    });
    
    $( ".parent-history-tab" ).off().click(function() {
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
        
        draw(measurements, "graph-parent");
        showComponent("parent-history");
    });

    $( ".parent-settings-tab" ).off().click(function() {
        $( getDataComponent("parent-settings") + " .settings-name").html(kid.name);
        $( getDataComponent("parent-settings") + " .settings-age").html(kid.age);
        $( getDataComponent("parent-settings") + " .settings-regimen").html(kid.regimenType);
        $( getDataComponent("parent-settings") + " .settings-ic").html(kid.icRatio);

        $( getDataComponent("parent-settings") + " .settings-input-name").val(kid.name);
        $( getDataComponent("parent-settings") + " .settings-input-age").val(kid.age);
        $( getDataComponent("parent-settings") + " .settings-input-regimen").val(kid.regimenType);
        $( getDataComponent("parent-settings") + " .settings-input-ic").val(kid.icRatio);
        $( ".settings-teen" ).prop('checked', kid.isTeen);
        showComponent("parent-settings");
    });

    // PARENT SETUP
    $( getDataComponent("parent-setup") + " .submit" ).off().click(function() {
        kid.name = $( ".setup-name" ).val();
        kid.age = $( ".setup-age" ).val();
        kid.regimenType = $( ".setup-regimen" ).val();
        kid.icRatio = $( ".setup-ic" ).val();
        kid.isTeen = $('.setup-teen').is(":checked");
        showComponent("parent-setup-2");
    });

    // PARENT SETUP 2
    $( getDataComponent("parent-setup-2") + " .back-btn" ).off().click(function() {
         $( ".setup-name" ).val(kid.name);
         $( ".setup-age" ).val(kid.age);
         $( ".setup-regimen" ).val(kid.regimenType);
         $( ".setup-ic" ).val(kid.icRatio);
         $( ".setup-teen" ).prop('checked', kid.isTeen);
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
        updateParentStatus();
        showComponent("parent-status");
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

    $( getDataComponent("parent-settings") + " .settings-teen" ).off().change(function() {
        kid.isTeen = $('.settings-teen').is(":checked");
    });

    // PARENT NOTIFICATION
    $( getDataComponent("parent-notification") ).off().click(function() {
        updateParentStatus();
        showComponent("parent-status");
    });
}