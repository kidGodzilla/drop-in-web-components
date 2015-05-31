/**
 * FILL-MURRAY COMPONENT
 */
(function () {

    /**
     * ----------------------------
     * BOILERPLATE - DO NOT MODIFY |
     * ----------------------------
     */
    if (!window.Droplets) document.write('<script src="http://kidgodzilla.github.io/drop-in-web-components/library/loader.js"></script>');
    if (!window._DropletResolvers) window._DropletResolvers = {};
    var tmp = (0|Math.random()*9e6).toString(36);

    window._DropletResolvers[tmp] = setInterval(function () {
        if (window.Droplets) {
            clearInterval(window._DropletResolvers[tmp]);

            /**
             * ----------------
             * END BOILERPLATE |
             * ----------------
             */
            Droplets.registerComponent({
                name: "fill-murray",
                afterRender: function (componentID) {

                    $(document).ready(function () {

                        $('#' + componentID).attr('id', componentID + '-instantiator');

                        $('<div id="' + componentID + '" class="fill-murray-component demo-component"></div>').insertAfter($('#' + componentID + '-instantiator'));

                        $component = $('#' + componentID);

                        var attributes = $('#' + componentID + '-instantiator').prop("attributes");

                        // loop through <select> attributes and apply them on <div>
                        $.each(attributes, function() {
                            if (this.name !== 'class' && this.name !== 'data-component-name' && this.name !== 'src' && this.name !== 'id')
                                $component.attr(this.name, this.value);
                        });

                        $('#' + componentID + '-instantiator').remove();

                        /**
                         * Retrieve cached innerHTML for this component
                         */
                        var innerHTML = Droplets.getInnerHTML(componentID);
                        $component.html(innerHTML);

                        /**
                         * Get & nice variables, set defaults, etc.
                         */
                        var width = $component.attr('data-width') || 200;
                        var height = $component.attr('data-height') || 200;
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
    }, 250);
})();
