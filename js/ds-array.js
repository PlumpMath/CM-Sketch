
/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */


// the semi-colon before the function invocation is a safety 
// net against concatenated scripts and/or other plugins 
// that are not closed properly.
;(function ( $, window, document, undefined ) {
    
    // undefined is used here as the undefined global 
    // variable in ECMAScript 3 and is mutable (i.e. it can 
    // be changed by someone else). undefined isn't really 
    // being passed in so we can ensure that its value is 
    // truly undefined. In ES5, undefined can no longer be 
    // modified.
    
    // window and document are passed through as local 
    // variables rather than as globals, because this (slightly) 
    // quickens the resolution process and can be more 
    // efficiently minified (especially when both are 
    // regularly referenced in our plugin).

    // Create the defaults once
    var pluginName = "dsArray",
        defaults = {
            // # of rows in the datastream array
            rows: 10,
            // # of columns in the datastream array
            cols: 10,
            // the maximum value the each array cell can have
            maxVal: 10,
        };

    // The actual plugin constructor
    function DataStream_Array( element, options ) {
        this.element = element;

        // jQuery has an extend method that merges the 
        // contents of two or more objects, storing the 
        // result in the first object. The first object 
        // is generally empty because we don't want to alter 
        // the default options for future instances of the plugin
        this.options = $.extend( {}, defaults, options) ;
        
        this._defaults = defaults;
        this._name = pluginName;
        
        this.init();
    }

    DataStream_Array.prototype.init = function () {
        // Place initialization logic here
        // We already have access to the DOM element and
        // the options via the instance, e.g. this.element 
        // and this.options
        var opts = this.options;
        var $this = this;

        /*
         * Accessor Methods
         *
         */

        /*
         * TODO: I would like accessor methods to be chainable, if that's possible.
         */

        // get the # of rows in the datastream array
        $.fn.getRows = function() {
            return opts.rows;    
        }
        
        // get the # of columns in the datastream array
        $.fn.getCols = function() {
            return opts.cols;    
        }
        // get the max value allowed in each array cell
        $.fn.getMaxVal = function() {
            return opts.maxVal;    
        }
    };

    // A really lightweight plugin wrapper around the constructor, 
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if ( !$.data(this, "plugin_" + pluginName )) {
                $.data( this, "plugin_" + pluginName, 
                new DataStream_Array( this, options ));
            }
        });
    }

})( jQuery, window, document );