$( document ).ready(function() {
    includeComponents();
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
    
    $( "#measurement-1" ).click(function() {
        console.log("measurement-1");
    });
    
    $( "#measurement-2" ).click(function() {
        console.log("measurement-2");
    });
    
    $( "#measurement-3" ).click(function() {
        console.log("measurement-3");
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