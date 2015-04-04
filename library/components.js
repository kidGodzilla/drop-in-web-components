"use strict";

(function () {

    /**
     * Run HTML includes
     */
    Components.HTMLIncludes();


    $(document).ready(function () {

        /**
         * Run scripts for each component
         * (This will register each component)
         */
        //$('.component').each(function () {
        //    // Execute any associated scripts
        //    var src = $(this).find('script').html();
        //    if (src) eval(src);
        //});

        //$('.component').each(function () {
        //    // Execute any associated scripts
        //    var src = $(this).find('script').html();
        //    if (src) eval(src);
        //});


        /**
         * Run component scripts
         */
        setInterval(function () {
            while (Components.renderQueue.length) {
                var name = Components.renderQueue.shift();
                $('.component[data-component-name=' + name + ']').each(function () {
                    var elID = $(this).attr('id');
                    var obj = Components.componentLookup[name];

                    if (obj && obj.beforeRender && typeof(obj.beforeRender) === "function") obj.beforeRender(elID);
                    if (obj && obj.afterRender && typeof(obj.afterRender) === "function") obj.afterRender(elID);
                });
            }
        }, 1000);

    });



})();