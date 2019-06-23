const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();

setTimeout(function(){
    $('#message').fadeOut('slow');
}, 3000);

$(document).ready(function() {
    $('#selector').select2({
        placeholder: "City (All)",
    });
});

function hideLoader() {
    $('#loading').fadeOut("slow");
}

$(window).ready(hideLoader);

setTimeout(hideLoader, 5000);
