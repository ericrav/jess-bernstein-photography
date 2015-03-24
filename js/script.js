$(document).ready(function() {


    $(".gallery").justifiedGallery({
        margins: 10,
        rowHeight: 220
    });

    var blanket = $(".blanket");
    var galleryImage = $(".gallery-fullscreen .image");
    var gallery = $(".gallery-fullscreen");
    var currentImage;

    $(".gallery img").click(function(e) {
        console.log(e);
        currentImage = e.target;
        var imgSrc = e.target.src;
        galleryImage.css("background-image", "url(" + imgSrc + ")");
        blanket.addClass("cover");
        gallery.addClass("active");

        $(".next-image").removeClass("no-more");
        $(".prev-image").removeClass("no-more");

        if ($(currentImage).next("img").length == 0) $(".next-image").addClass("no-more");
        else if ($(currentImage).prev("img").length == 0) $(".prev-image").addClass("no-more");
    });

    $(".prev-image").click(function(e) {
        $(".next-image").removeClass("no-more");
        currentImage = $(currentImage).prev("img");
        galleryImage.css("background-image", "url(" + $(currentImage).attr("src") + ")");
        if ($(currentImage).prev("img").length == 0) $(".prev-image").addClass("no-more");
    });

    $(".next-image").click(function(e) {
        $(".prev-image").removeClass("no-more");
        currentImage = $(currentImage).next("img");
        galleryImage.css("background-image", "url(" + $(currentImage).attr("src") + ")");
        if ($(currentImage).next("img").length == 0) $(".next-image").addClass("no-more");
    });

    $(".close").click(function(e) {
        blanket.removeClass("cover");
        gallery.removeClass("active");
    });

    $(".color-toggle").click(function(e) {
        if ($(this).hasClass("toggle-black")) {
            $(this).removeClass("toggle-black").addClass("toggle-white");
            blanket.removeClass("blanket-white").addClass("blanket-black");
        } else {
            $(this).removeClass("toggle-white").addClass("toggle-black");
            blanket.removeClass("blanket-black").addClass("blanket-white");

        }
    });


    // $(window).scroll(function() {
    //     var scroll = $(window).scrollTop();
    //     if (scroll > 90) {
    //         $(".header").addClass("hidden");
    //         $(".nav.original").addClass("fixed");
    //         $(".clone").addClass("standin");
    //         if (scroll > 180) $(".section-header").addClass("visible");
    //         else $(".section-header").removeClass("visible");
    //     } else {
    //         $(".section-header").removeClass("visible");
    //         $(".header").removeClass("hidden");
    //         $(".nav.original").removeClass("fixed");
    //         $(".clone").removeClass("standin");
    //     }
    // });
});