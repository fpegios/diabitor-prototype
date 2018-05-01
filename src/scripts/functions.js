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
        $( getDataComponent("history-measurement") + " .day").html(measurements[id].day);
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
        $( getDataComponent("parent-history-measurement") + " .day").html(measurements[id].day);
    }
}

// get component reference value
function getDataComponent(component) {
    return "[data-component=" + component + "]";
}