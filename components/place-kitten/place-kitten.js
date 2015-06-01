/**
 * PLACEKITTEN COMPONENT
 */

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
                render: function (componentID) {

                    $component = $('#' + componentID);

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

                }
            });
        }
    }

})();
