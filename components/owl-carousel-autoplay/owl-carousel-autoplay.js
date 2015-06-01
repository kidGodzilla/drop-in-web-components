// BEGIN BOILERPLATE
var cid = document.currentScript.id;

(function () {

    var tmp = (0|Math.random()*9e6).toString(36);
    if (!window.Droplets) document.write('<script src="http://kidgodzilla.github.io/drop-in-web-components/library/loader.js"></script>');
    if (!window._DropletResolvers) window._DropletResolvers = {};
    if (!window._DropletResolvers._queue) window._DropletResolvers._queue = [];

    window._DropletResolvers._queue.push(tmp);
    window._DropletResolvers[tmp] = {};
    window._DropletResolvers[tmp].cid = cid;
    window._DropletResolvers[tmp].callback = function (componentID) {

        if (window.Droplets) {

            Droplets.registerComponent({
                ID: componentID,

                // END BOILERPLATE
                render: function (componentID, $component) {

                    $(document).ready(function () {
                        /**
                         * Retrieve cached innerHTML for this component
                         */
                        var innerHTML = Droplets.getInnerHTML(componentID);
                        $component.html(innerHTML);

                        /**
                         * Get & nice variables, set defaults, etc.
                         */
                        var timeout = $component.attr('data-carousel-timeout') || 3000;
                        var itemCount = $component.attr('data-carousel-items') || 4;
                        if (timeout) timeout = parseInt(timeout);
                        if (itemCount) itemCount = parseInt(itemCount);
                        if (typeof(timeout) !== "number") timeout = 3000;
                        if (typeof(itemCount) !== "number") itemCount = 4;

                        /**
                         * Load Owl Carousel on this component
                         */
                        $component.owlCarousel({
                            autoPlay: timeout,
                            items : itemCount,
                            itemsDesktop : [1199,3],
                            itemsDesktopSmall : [979,3]
                        });
                    });

                },
                scripts: ['http://kidgodzilla.github.io/drop-in-web-components/components/owl-carousel-basic/js/owl.carousel.min.js'],
                stylesheets: ['http://kidgodzilla.github.io/drop-in-web-components/components/owl-carousel-basic/css/owl.carousel.css', 'http://kidgodzilla.github.io/drop-in-web-components/components/owl-carousel-basic/css/owl.theme.css']
            });
        }
    }

})();