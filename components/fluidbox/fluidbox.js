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
                         * Load Fluidbox on this component
                         */
                        $component.fluidbox();
                    });


                },
                scripts: ['//cdnjs.cloudflare.com/ajax/libs/fluidbox/1.4.3.1/jquery.fluidbox.min.js'],
                stylesheets: ['//cdnjs.cloudflare.com/ajax/libs/fluidbox/1.4.3.1/css/fluidbox.css']
            });
        }
    }

})();