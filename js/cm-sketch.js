$( "document" ).ready( function() {

});

( function ( $ ) {

	/* 
	 * DATA STREAM ARRAY 
	 */

	// the methods of the dataStreamArray object
	var dataStreamMethods = {
		init: function( options ) {
			
			// initial settings for the data stream array
			// its length, width, & range of integers
			var settings = $.extend( {
				'length' : 10,
				'width'  : 10,
				'range'  : 10
			}, options );

			// create the array
			var dataStreamArray = new Array( length );

			for( var index = 0; index < length; index++ ) {
				dataStreamArray[index] = new Array( width );
			}

			// initialize the array
			for( var i = 0; i < length; i++ ) {
				for( var j = 0; j < width; j++ ) {
					dataStreamArray[i][j] = Math.floor(Math.random() * 10);
				}
			}
		}
	};

	// the dataStreamArray object
	$.fn.dataStreamArray = function() {

		// Methods calling logic
		// Source: http://docs.jquery.com/Plugins/Authoring
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} 
		else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} 
		else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
		}  

		// allows chaining
		return this.each( function() {
			var $this = $(this);
		});
	};
} )( jQuery );
