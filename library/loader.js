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
        loadStylesheet("/drop-in-web-components/library/style.css");
        loadStylesheet("//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css");

        // JavaScript Dependencies
        if (!window.$) loadScript("//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js");
        if (!window._) loadScript("//cdn.jsdelivr.net/lodash/3.5.0/lodash.compat.min.js");
        loadScript("//www.bittitan.com/internal-bootstrap/bootstrap.min.js");

        // Core
        if (!window.Core) loadScript("http://kidgodzilla.github.io/drop-in-web-components/library/core.js");
        if (!window.Droplets) loadScript("http://kidgodzilla.github.io/drop-in-web-components/library/init.js");
        loadScript("http://kidgodzilla.github.io/drop-in-web-components/library/utils.js");
        loadScript("http://kidgodzilla.github.io/drop-in-web-components/library/packages.js");

        // Components Library
        loadScript("http://kidgodzilla.github.io/drop-in-web-components/library/registerComponent.js");

        // Script Runner
        loadScript("http://kidgodzilla.github.io/drop-in-web-components/library/components.js");

        window.asyncLoaderComplete = true;
    }

})();
