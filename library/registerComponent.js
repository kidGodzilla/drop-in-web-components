(function () {

    Droplets.registerGlobal('componentLookup', {});
    Droplets.registerGlobal('renderQueue', []);

    /**
     * REGISTER COMPONENT
     * Registers a new component
     */
    Droplets.registerGlobal('registerComponent', function (obj) {

        var scriptCount = 0;

        /**
         * Setup
         */
        // Base object for a component
        var base = {
            DropletsourceURL: null
        };

        // Extend the base object with the object passed-in
        if ($ && obj) obj = $.extend({}, base, obj);


        /**
         * Register our component in the lookup table
         */
        if (obj.ID) Droplets.componentLookup[obj.ID] = obj;


        // Load Scripts
        if (obj.scripts && obj.scripts.length) {
            scriptCount = obj.scripts.length;
            for (var i = 0; i < obj.scripts.length; i++)
                $.getScript(obj.scripts[i], function () {
                    scriptCount--;
                });
        }

        // Load Stylesheets
        if (obj.stylesheets && obj.stylesheets.length) {
            for (var j = 0; j < obj.stylesheets.length; j++)
                Droplets.loadStylesheet(obj.stylesheets[j]);
        }

        /**
         * Add the component to the render queue (eventually)
         */
        var s = setInterval(function () {
            if (!scriptCount) {
                if (obj.ID) Droplets.renderQueue.push(obj.ID);
                clearInterval(s);
            }
        }, 100);

    });
})();
