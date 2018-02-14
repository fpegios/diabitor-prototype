// HEADER CONTROLLER
// 
$( ".measurement .left-action-btn" ).click(function() {
    show(".monitor");
});

// BODY CONTROLLER
// 
$( "#kid-mode" ).click(function() {
    show(".monitor");
});

$( "#parent-mode" ).click(function() {
    show(".monitor");
});

$( "#monitor-btn" ).click(function() {
    show(".measurement");
});

// FOOTER CONTROLLER
//
$( ".monitor-tab" ).click(function() {
    show(".monitor");
});

$( ".profile-tab" ).click(function() {
    show(".profile");
});

// FUNCTIONS
// 
// hide active element and show the selected one
function show(element){
    $(".active").removeClass("active").addClass("hidden");
    $( element).removeClass("hidden").addClass("active");
}

function hide(element){
    $( element).removeClass("visible");
    $( element).addClass("hidden");
}