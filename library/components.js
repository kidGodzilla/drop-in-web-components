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

    /**
     * executeRender is responsible for instanciating a new droplet based on
     * the droplet constructor, Executing a callback script, and
     * cleaning up the instanciator.
     */
    Droplets.registerGlobal('executeRender', function (componentID, callback) {
        $(document).ready(function () {

            // Instanciates a new droplet and transitions it to the ready state
            $('#' + componentID).attr('id', componentID + '-instantiator');
            $('<div id="' + componentID + '"></div>').insertAfter($('#' + componentID + '-instantiator'));

            var $component = $('#' + componentID);
            var attributes = $('#' + componentID + '-instantiator').prop("attributes");

            // Attributes must be passed to the new droplet instance from the instanciator
            $.each(attributes, function() {
                if (this.name !== 'name' && this.name !== 'src' && this.name !== 'id')
                    $component.attr(this.name, this.value);
            });

            // Remove the instanciator (cleanup)
            $('#' + componentID + '-instantiator').remove();

            // Execute the callback function (afterRender method)
            if (callback && typeof(callback === "function")) callback(componentID);

        });
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
            $('script[name][src]').each(function () {
                var $this = $(this);
                var elID = $this.attr('id');

                if (elID) Droplets.innerHTML[elID] = $this.html();
            });
        });


        /**
         * Run component scripts as they are loaded asynchronously
         */
        setInterval(function () {
            while (Droplets.renderQueue.length) {
                var elID = Droplets.renderQueue.shift();

                $('script#' + elID).each(function () {
                    var obj = Droplets.componentLookup[elID];

                    if (obj && obj.beforeRender && typeof(obj.beforeRender) === "function") obj.beforeRender(elID);
                    if (obj && obj.render && typeof(obj.render) === "function") Droplets.executeRender(elID, obj.render);
                    if (obj && obj.afterRender && typeof(obj.afterRender) === "function") obj.afterRender(elID);
                });
            }
        }, 100);

    });

})();
