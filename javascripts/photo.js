
$(document).ready(function() {
    var boxes = $('.doms');
    boxes.click(function() {
        var el = $(this),
            max = 0;
        boxes.each(function() {
            var z = parseInt( $( this ).css( "z-index" ), 10 );
            max = Math.max( max, z );
        });
        el.css("z-index", max + 1 );
    });
});
