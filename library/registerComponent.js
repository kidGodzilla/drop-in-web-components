(function () {

    // Components.registerGlobal('components', []);
    Components.registerGlobal('componentLookup', {});
    Components.registerGlobal('renderQueue', []);

    /**
     * REGISTER COMPONENT
     * Registers a new component
     */
    Components.registerGlobal('registerComponent', function (obj) {

        var scriptCount = 0;

        /**
         * Setup
         */
        // Base object for a component
        var base = {
            componentSourceURL: null
        };

        // Extend the base object with the object passed-in
        if ($ && obj) obj = $.extend({}, base, obj);


        /**
         * Register our component in the lookup table
         */
        if (obj.name) Components.componentLookup[obj.name] = obj;


        // Load Scripts
        if (obj.scripts) {
            scriptCount = obj.scripts.length;
            for (var i = 0; i < obj.scripts.length; i++)
                $.getScript(obj.scripts[i], function () {
                    scriptCount--;
                });
        }

        // Load Stylesheets
        if (obj.stylesheets) {
            for (var j = 0; j < obj.stylesheets.length; j++)
                Components.loadStylesheet(obj.stylesheets[j]);
        }

        /**
         * Add the component to the render queue (eventually)
         */
        var s = setInterval(function () {
            if (!scriptCount) {
                if (obj.name) Components.renderQueue.push(obj.name);
                clearInterval(s);
            }
        }, 100);

    });
})();