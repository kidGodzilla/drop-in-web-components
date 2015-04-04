(function () {
    function loadScriptAsync (resource) {
        var sNew = document.createElement("script");
        sNew.async = true;
        sNew.src = resource;
        var s0 = document.getElementsByTagName('script')[0];
        s0.parentNode.insertBefore(sNew, s0);
    }

    function loadScript (resource) {
        document.write('<script src="' + resource + '"></script>');
    }

    function loadStylesheet (resource) {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = resource;
        link.media = 'all';
        head.appendChild(link);
    }

    if (!window.asyncLoaderComplete) {

        // Core
        // loadStylesheet("library/style.css");

        // JavaScript Dependencies
        if (!window.$) loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js");
        if (!window._) loadScript("https://cdn.jsdelivr.net/lodash/3.5.0/lodash.compat.min.js");

        // Core
        loadScript("library/core.js");
        loadScript("library/init.js");
        loadScript("library/utils.js");

        // Components Library
        loadScript("library/registerComponent.js");

        // Script Runner
        loadScript("library/components.js");

        window.asyncLoaderComplete = true;
    }

})();
