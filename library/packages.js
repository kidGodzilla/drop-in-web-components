(function () {

    Droplets.registerGlobal('cdnPath', {
        "fill-murray"           : "kidgodzilla.github.io/drop-in-web-components/components/fill-murray/fill-murray.html",
        "flickr-gallery"        : "kidgodzilla.github.io/drop-in-web-components/components/flickr-gallery/flickr-gallery.html",
        "fluidbox"              : "kidgodzilla.github.io/drop-in-web-components/components/fluidbox/fluidbox.html",
        "google-plus-gallery"   : "kidgodzilla.github.io/drop-in-web-components/components/google-plus-gallery/google-plus-gallery.html",
        "isotope-filter"        : "kidgodzilla.github.io/drop-in-web-components/components/isotope-filter/isotope-filter.html",
        "owl-carousel-autoplay" : "kidgodzilla.github.io/drop-in-web-components/components/owl-carousel-autoplay/owl-carousel-autoplay.html",
        "owl-carousel-basic"    : "kidgodzilla.github.io/drop-in-web-components/components/owl-carousel-basic/owl-carousel-basic.html",
        "picasa-gallery"        : "kidgodzilla.github.io/drop-in-web-components/components/picasa-gallery/picasa-gallery.html",
        "place-kitten"          : "kidgodzilla.github.io/drop-in-web-components/components/place-kitten/place-kitten.html"
    });

    Droplets.registerGlobal('resolveDroplets', function () {
        $('.droplet').each(function () {
            var $this = $(this);
            var dropletName = $this.prop('tagName').toLowerCase().trim();
            
            if (!$this.attr('data-component-name'))
                $this.attr('data-component-name', dropletName);

            if (Droplets.cdnPath && Droplets.cdnPath[dropletName] && !$this.attr('data-source-url'))
                $this.attr('data-source-url', Droplets.protocol() + "//" + Droplets.cdnPath[dropletName]);
        });
    });

})();