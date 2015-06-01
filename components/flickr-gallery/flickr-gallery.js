// BEGIN BOILERPLATE
var cid = document.currentScript.id;

(function () {

    var tmp = (0|Math.random()*9e6).toString(36);
    if (!window.Droplets) document.write('<script src="http://kidgodzilla.github.io/drop-in-web-components/library/loader.js"></script>');
    if (!window._DropletResolvers) window._DropletResolvers = {};
    if (!window._DropletResolvers._queue) window._DropletResolvers._queue = [];

    window._DropletResolvers._queue.push(tmp);
    window._DropletResolvers[tmp] = {};
    window._DropletResolvers[tmp].cid = cid;
    window._DropletResolvers[tmp].callback = function (componentID) {

        if (window.Droplets) {

            Droplets.registerComponent({
                ID: componentID,

                // END BOILERPLATE
                render: function (componentID) {

                    $component = $('#' + componentID);

                    $(document).ready(function () {
                        var userID = $component.attr('data-user-id');
                        $component.nanoGallery({
                            kind: 'flickr',
                            userID: userID
                        });
                    });


                },
                scripts: ['https://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.5.4/jquery.nanogallery.min.js'],
                stylesheets: ['https://cdnjs.cloudflare.com/ajax/libs/nanogallery/5.5.4/css/nanogallery.min.css']
            });
        }
    }

})();