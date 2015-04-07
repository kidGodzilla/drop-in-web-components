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

    $(document).ready(function () {
        $('[data-component-name]').each(function () {
            var $this = $(this);
            var elID = $this.attr('id');

            if (elID) Droplets.innerHTML[elID] = $this.html();
        });

        // Load HTML Includes
        Droplets.HTMLIncludes();
    });

    $(document).ready(function () {

        /**
         * Run component scripts
         */
        setInterval(function () {
            while (Droplets.renderQueue.length) {
                var name = Droplets.renderQueue.shift();
                $('[data-component-name=' + name + ']').each(function () {
                    var elID = $(this).attr('id');
                    var obj = Droplets.componentLookup[name];

                    if (obj && obj.beforeRender && typeof(obj.beforeRender) === "function") obj.beforeRender(elID);
                    if (obj && obj.afterRender && typeof(obj.afterRender) === "function") obj.afterRender(elID);
                });
            }
        }, 100);

    });



})();