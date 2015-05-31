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
     * executeAfterRender is responsible for instanciating a new droplet based on
     * the droplet constructor, Executing an afterRender callback script, and
     * cleaning up the instanciator.
     */
    Droplets.registerGlobal('executeAfterRender', function (componentID, callback) {
        $(document).ready(function () {

            // Instanciates a new droplet and transitions it to the ready state
            $('#' + componentID).attr('id', componentID + '-instantiator');
            $('<div id="' + componentID + '" class="droplet-ready"></div>').insertAfter($('#' + componentID + '-instantiator'));

            var $component = $('#' + componentID);
            var attributes = $('#' + componentID + '-instantiator').prop("attributes");

            // Attributes must be passed to the new droplet instance from the instanciator
            $.each(attributes, function() {
                if (this.name !== 'class' && this.name !== 'classnames' && this.name !== 'name' && this.name !== 'src' && this.name !== 'id')
                    $component.attr(this.name, this.value);
            });

            // Classnames must be passed to the new droplet instance from the instanciator
            if ($('#' + componentID + '-instantiator').attr('classnames'))
                $component.attr('class', $component.attr('class') + " " + $('#' + componentID + '-instantiator').attr('classnames'));

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

                $this.addClass('droplet-loading');

                if (elID) Droplets.innerHTML[elID] = $this.html();
            });

            // Load HTML Includes
            // Droplets.HTMLIncludes();
        });


        /**
         * Run component scripts as they are loaded asynchronously
         */
        setInterval(function () {
            while (Droplets.renderQueue.length) {
                var name = Droplets.renderQueue.shift();
                $('script[name=' + name + '].droplet-loading').each(function () {
                    var elID = $(this).attr('id');
                    var obj = Droplets.componentLookup[name];

                    if (obj && obj.beforeRender && typeof(obj.beforeRender) === "function") obj.beforeRender(elID);
                    if (obj && obj.afterRender && typeof(obj.afterRender) === "function") Droplets.executeAfterRender(elID, obj.afterRender);
                });
            }
        }, 100);

    });

})();