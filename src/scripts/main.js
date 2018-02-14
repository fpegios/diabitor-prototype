$( "#open-monitor-btn" ).click(function() {
    hide(".login");
    show(".monitor");
});

$( "#open-login" ).click(function() {
    hide(".monitor");
    show(".login");
});

function show(element){
    $( element).removeClass("hidden");
    $( element).addClass("visible");
}

function hide(element){
    $( element).removeClass("visible");
    $( element).addClass("hidden");
}