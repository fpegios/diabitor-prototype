$( document ).ready(function() {
    includeComponents();
});

// HIDE PRELOADER WHEN EVERYTHING IS LOADED
// $(window).on('load', function() {
//     setTimeout(function() {
//         hidePreloader();
//     }, 2000);
// });

// generate html components
function includeComponents() { 
    var components = $('[data-component]');
    $.each(components, function(){
        var file = 'dist/html/' + $(this).data('component') + '.html';
        $(this).load(file, function() {
            initClickEvents();
        });
    });
}