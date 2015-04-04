(function () {

    Components.registerGlobal('components', []);
    Components.registerGlobal('componentLookup', {});

    Components.registerGlobal('renderQueue', []);

    Components.registerGlobal('registerComponent', function (obj) {

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
            console.log("loading scripts...");
            for (var i = 0; i < obj.scripts.length; i++)
                $.getScript(obj.scripts[i]);
        }

        // Load Stylesheets
        if (obj.stylesheets) {
            console.log("loading stylesheets...");
            for (var j = 0; j < obj.stylesheets.length; j++)
                Components.loadStylesheet(obj.stylesheets[j]);
        }

        /**
         * Add the component to the render queue
         */
        if (obj.name) Components.renderQueue.push(obj.name);

    });
})();