$('scroller').on('click', function() {
    const images = $('#images').position().top;

    $('html, body').anilate(
        {
            scrollTop: images
        },
        1000
    );
});
