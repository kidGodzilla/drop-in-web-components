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

    Droplets.registerGlobal('executeAfterRender', function (elID, callback) {
        $(document).ready(function () {

            $('#' + componentID).attr('id', componentID + '-instantiator');

            $('<div id="' + componentID + '" class="fill-murray-component demo-component"></div>').insertAfter($('#' + componentID + '-instantiator'));

            var $component = $('#' + componentID);

            var attributes = $('#' + componentID + '-instantiator').prop("attributes");

            $.each(attributes, function() {
                if (this.name !== 'class' && this.name !== 'classnames' && this.name !== 'name' && this.name !== 'src' && this.name !== 'id')
                    $component.attr(this.name, this.value);
            });

            $component.attr('class', $component.attr('class') + " " + $('#' + componentID + '-instantiator').attr('classnames'));

            $('#' + componentID + '-instantiator').remove();

            if (callback && typeof(callback === "function")) callback(elID);

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
            Droplets.HTMLIncludes();
        });


        /**
         * Run component scripts as they are loaded asynchronously
         */
        setInterval(function () {
            while (Droplets.renderQueue.length) {
                var name = Droplets.renderQueue.shift();
                $('[name=' + name + '].droplet-loading').each(function () {
                    var elID = $(this).attr('id');
                    var obj = Droplets.componentLookup[name];

                    if (obj && obj.beforeRender && typeof(obj.beforeRender) === "function") obj.beforeRender(elID);
                    if (obj && obj.afterRender && typeof(obj.afterRender) === "function") Droplets.executeAfterRender(elID, obj.afterRender);
                    $(this).removeClass('droplet-loading');
                    $(this).addClass('droplet-ready');
                });
            }
        }, 100);

    });

})();