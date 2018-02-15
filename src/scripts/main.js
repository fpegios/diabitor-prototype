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

$( "#measurement-1" ).click(function() {
    console.log("measurement-1");
});

$( "#measurement-2" ).click(function() {
    console.log("measurement-2");
});

$( "#measurement-3" ).click(function() {
    console.log("measurement-3");
});

// FOOTER CONTROLLER
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

// FUNCTIONS
// 
// hide active element and show the selected one
function show(element){
    $(".active").removeClass("active").addClass("hidden");
    $( element).removeClass("hidden").addClass("active");
}