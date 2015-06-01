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
                render: function (componentID, $component) {

                    $(document).ready(function () {
                        /**
                         * Retrieve cached innerHTML for this component
                         */
                        var innerHTML = Droplets.getInnerHTML(componentID);
                        $component.html(innerHTML);

                        /**
                         * Load Isotope on this component
                         */
                        var $container = $component.isotope({
                            itemSelector: '.element-item',
                            layoutMode: 'fitRows',
                            getSortData: {
                                category: '[data-category]'
                            }
                        });

                        /**
                         * bind filter button click
                         */
                        $('#filters button').on('click', function () {
                            $container.isotope({
                                filter: $(this).attr('data-filter')
                            });
                        });

                        /**
                         * change is-checked & active classes on buttons
                         */
                        $('.button-group').each(function(i, buttonGroup) {
                            var $buttonGroup = $(buttonGroup);
                            $buttonGroup.on( 'click', 'button', function () {
                                $buttonGroup.find('.is-checked, .active').removeClass('is-checked active');
                                $(this).addClass('is-checked active');
                            });
                        });

                    });

                },
                scripts: ['http://mfzy.co/isotope.pkgd.js']
            });
        }
    }

})();