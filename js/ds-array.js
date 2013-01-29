
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

        // the datastream array
        var dsArray;

        // create an array with specified rows & columns
        // TODO: make initializing the array chainable
        $.fn.initArray = function( ) {
            
            dsArray = new Array(opts.rows);

            var index;

            for(index=0; index < dsArray.length; index++) {
                dsArray[index] = new Array(opts.cols);
            }    
        }

        // initialize the array
        $.fn.initArray();
        
        /*
         * Accessor Methods
         */

        /* TODO: I would like accessor methods to be chainable, if that's possible. */
         
        // get the # of rows in the datastream array
        $.fn.getRows = function() {
            return dsArray.length; 
        }
        // get the # of columns in the datastream array
        $.fn.getCols = function() {
            return dsArray[0].length;    
        }
        // get the max value allowed in each array cell
        $.fn.getMaxVal = function() {
            return opts.maxVal;    
        }

        /*
         * Mutator Methods
         * postconditions: initArray must be called in for for this change to take effect.
         */

         // set the # of rows in the datastream array
        $.fn.setRows = function( rows ) {
            return this.each(function () {
                if( rows && typeof rows === 'number' ) {
                    opts.rows = Math.floor(rows);
                }
            });
        }
        // set the # of cols in the datastream array
        $.fn.setCols = function( cols ) {
            return this.each(function () {
                if( cols && typeof cols === 'number' ) {
                    opts.cols = Math.floor(cols);
                }
            });
        }
        // set the maximum value possible in each array cell
        $.fn.setMaxVal = function( maxVal ) {
            return this.each(function () {
                if( maxVal && typeof maxVal === 'number' ) {
                    opts.maxVal = Math.floor(maxVal);
                }
            });
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