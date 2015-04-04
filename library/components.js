"use strict";

(function () {

    /**
     * Assign IDs
     */
    Components.assignIDsToElements();

    /**
     * Remember the insides
     */
    Components.registerGlobal('innerHTML', {});

    $(document).ready(function () {
        $('[data-component-name]').each(function () {
            var $this = $(this);
            var elID = $this.attr('id');

            if (elID) Components.innerHTML[elID] = $this.html();
        });

        // Load HTML Includes
        Components.HTMLIncludes();
    });

    $(document).ready(function () {

        /**
         * Run component scripts
         */
        setInterval(function () {
            while (Components.renderQueue.length) {
                var name = Components.renderQueue.shift();
                $('[data-component-name=' + name + ']').each(function () {
                    var elID = $(this).attr('id');
                    var obj = Components.componentLookup[name];

                    if (obj && obj.beforeRender && typeof(obj.beforeRender) === "function") obj.beforeRender(elID);
                    if (obj && obj.afterRender && typeof(obj.afterRender) === "function") obj.afterRender(elID);
                });
            }
        }, 100);

    });



})();