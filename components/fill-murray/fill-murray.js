Droplets.registerComponent({
name: "fill-murray",
afterRender: function (componentID) {
$(document).ready(function () {
/**
* Retrieve cached innerHTML for this component
*/
var innerHTML = Droplets.getInnerHTML(componentID);
$("#" + componentID + " .fill-murray-component").html(innerHTML);

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
$("#" + componentID + " .fill-murray-component").append('<img src="http://www.fillmurray.com/' + width + '/' + height + '/">');
});
}
});
<div class="fill-murray-component"></div>
