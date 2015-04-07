(function () {

    /**
     * Load an external stylesheet
     */
    Droplets.registerGlobal('loadStylesheet', function (resource) {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = resource;
        link.media = 'all';
        head.appendChild(link);
    });


    /**
     * Find highest data-id-offset
     */
    Droplets.registerGlobal('findDataIDOffset', function (callback) {
        var total = 0;
        for (var i = 0; i < 1000; i++) {
            if ($('#component-'+i).length === 0)
                total++;

            if (total === 5) {
                Droplets.set('idOffset', i);
                $('body').attr('data-id-offset', i);
                callback(i);
                return true;
            }
        }
    });


    /**
     * Ensure all elements have Ids
     */
    Droplets.registerGlobal('assignIDsToElements', function (offset) {
        var i = $('body').attr('data-id-offset') || 0;
        $('body *').each(function () {
            if (!$(this).attr('id') || $(this).attr('id') === "") {
                $(this).attr('id', 'component-' + i++);
                $('body').attr('data-id-offset', i);
            }
        });
    });


    /**
     * Handle includes
     */
    Droplets.registerGlobal('HTMLIncludes', function () {
        $(document).ready(function () {
            $('[data-source-url]').each(function () {
                var sourceURL = $(this).attr('data-source-url');

                $(this).load(sourceURL, function () {
                    // Ensure all new elements have IDs
                    Droplets.assignIDsToElements();
                });
            });
        });
    });

    Droplets.registerGlobal('onCondition', function (condition, callback) {
        var s = setInterval(function () {

            // Early return if our condition is not a function
            if (!condition || !typeof(condition) === "function") {
                clearInterval(s);
                return false;
            }

            // Evaluate our condition. If true, perform callback & clear our interval, otherwise, do nothing.
            if (condition()) {
                if (callback && typeof(callback) === "function") callback();
                clearInterval(s);
            }

        }, 100);
    });

})();