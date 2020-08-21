// Animate Smoth Scroll

$('#view-work').on('click', funktion() {
    const images = $('#images').position().top;

    $('html,body').animate({
        scrollTop: images
    }, 900);
});