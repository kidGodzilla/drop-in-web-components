/**
 * OBJECT INITIALIZATION
 */
// Creates a new instance of the Core object
if (Core) var core = new Core();

// Mix in some lodash
if (core && _ && $) var Droplets = $.extend({}, _, core);