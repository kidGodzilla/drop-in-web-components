/**
 * FILL-MURRAY COMPONENT
 */
(function () {

    if (!window.Droplets) document.write('<script src="http://kidgodzilla.github.io/drop-in-web-components/library/loader.js"></script>');

    var tmp = (0|Math.random()*9e6).toString(36);

    window._DropletResolvers[tmp] = setInterval(function () {
        if (window.Droplets) {
            clearInterval(window._DropletResolvers[tmp]);

            Droplets.registerComponent({
                name: "fill-murray",
                afterRender: function (componentID) {

                    $(document).ready(function () {

                        $('<div class="fill-murray-component demo-component"></div>').insertAfter($('#' + componentID));
                        $component = $(".fill-murray-component");

                        /**
                         * Retrieve cached innerHTML for this component
                         */
                        var innerHTML = Droplets.getInnerHTML(componentID);
                        $component.html(innerHTML);

                        /**
                         * Get & nice variables, set defaults, etc.
                         */
                        var width = $("#" + componentID).attr('data-width') || 200;
                        var height = $("#" + componentID).attr('data-height') || 200;
                        if (width) width = parseInt(width);
                        if (height) height = parseInt(height);
                        if (typeof(width) !== "number") width = 200;
                        if (typeof(height) !== "number") height = 200;

                        /**
                         * Load Bill Murray on this component
                         */
                        $component.append('<img src="http://www.fillmurray.com/' + width + '/' + height + '/">');
                    });
                }
            });
        }
    }, 100);
})();
