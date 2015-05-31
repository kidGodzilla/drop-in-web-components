"use strict";

(function () {

    /**
     * Assign IDs
     */
    Droplets.assignIDsToElements();


    /**
     * Remember the insides
     */
    Droplets.registerGlobal('innerHTML', {});


    /**
     * Gets the cached innerHTML for a specific component, by ID
     * This is useful inside a component since it only has a component reference
     */
    Droplets.registerGlobal('getInnerHTML', function (elID) {
        var innerHTML = Droplets.innerHTML[elID] || "";
        return innerHTML.trim();
    });


    $(document).ready(function () {

        /**
         * Assign [data-source-url] attribute for components using CDN syntax
         */
        Droplets.resolveDroplets();


        /**
         * Prepare components
         */
        $(document).ready(function () {
            $('[data-component-name]').each(function () {
                var $this = $(this);
                var elID = $this.attr('id');

                $this.addClass('droplet-loading');

                if (elID) Droplets.innerHTML[elID] = $this.html();
            });

            // Load HTML Includes
            Droplets.HTMLIncludes();
        });


        /**
         * Run component scripts as they are loaded asynchronously
         */
        setInterval(function () {
            while (Droplets.renderQueue.length) {
                var elID = Droplets.renderQueue.shift();
                console.log(elID);
                $('#' + elID).each(function () {
                    var name = $(this).attr('data-component-name');
                    var obj = Droplets.componentLookup[name];

                    if (obj && obj.beforeRender && typeof(obj.beforeRender) === "function") obj.beforeRender(elID);
                    if (obj && obj.afterRender && typeof(obj.afterRender) === "function") obj.afterRender(elID);
                    $(this).removeClass('droplet-loading');
                    $(this).addClass('droplet-ready');
                });
            }
        }, 100);

    });

})();