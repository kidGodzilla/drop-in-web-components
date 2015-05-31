if (!window.Droplets) document.write('<script src="http://kidgodzilla.github.io/drop-in-web-components/library/loader.js"></script>');

setTimeout(function () {
    Droplets.registerComponent({
        name: "fill-murray",
        afterRender: function (componentID) {
            componentID = "DemoComponent"; // Test facilitation
            $(document).ready(function () {

                $component = $('#' + componentID);

                $('<div class="fill-murray-component"></div>').insertAfter($component);

                $component = $(".fill-murray-component");

                /**
                 * Retrieve cached innerHTML for this component
                 */
                var innerHTML = Droplets.getInnerHTML(componentID);
                $component.html(innerHTML);

                /**
                 * Get & nice variables, set defaults, etc.
                 */
                var width = $("#" + componentID).attr('data-width') || 200;
                var height = $("#" + componentID).attr('data-height') || 200;
                if (width) width = parseInt(width);
                if (height) height = parseInt(height);
                if (typeof(width) !== "number") width = 200;
                if (typeof(height) !== "number") height = 200;

                /**
                 * Load Bill Murray on this component
                 */
                $component.append('<img src="http://www.fillmurray.com/' + width + '/' + height + '/">');
            });
        }
    });
}, 3200);
