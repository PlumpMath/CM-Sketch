/*
 * DataStream Array Unit Tests
 */

// test the array's setter & getter methods
module( "datastream setter/getter methods", {
	setup: function() {
		$('<div id="dsSetGetMethods"></div>').appendTo('#qunit-fixture');
		$dsSetGet = $('#dsSetGetMethods').dsArray();
	},
	teardown: function() {
		$dsSetGet.empty();
		$dsSetGet.remove();
		delete $dsSetGet;
	}
});
test( "datastream getter methods", 4, function() {
	
	// run tests on getter methods
	equal( $dsSetGet.getRows(), 10, "We expect the # of rows to be 10." );
	equal( $dsSetGet.getCols(), 10, "We expect the # of columns to be 10.");
	equal( $dsSetGet.getMaxVal(), 10, "We expect the max val to be 10.");
	ok( true, $dsSetGet.getCell(0, 0), "We expect some integer to be returned");


});
test( "datastream setter methods", 3, function() {

	// run tests on setter methods
	ok( $dsSetGet.setRows(5), true, "We expect setRows to exist.");
	ok( $dsSetGet.setCols(5), true, "We expect setCols to exist.");
	ok( $dsSetGet.setMaxVal(5), true, "We expect setMaxVal to exist.");

});

// test the array's initialzation & modification methods
module( "datastream array init & mod", {
	setup: function() {
		$('<div id="dsInit"></div>').appendTo('#qunit-fixture');
		$dsInit = $('#dsInit').dsArray({
			rows: 15,
			cols: 15,
			maxVal: 15
		});
	},
	teardown: function() {
	}
});
test( "set rows, cols, maxValue & reset array", 6, function() { 
	
	// test getter methods
	equal( $dsInit.getRows(), 15, "We expect the # of rows to be 15." );
	equal( $dsInit.getCols(), 15, "We expect the # of rows to be 15." );
	equal( $dsInit.getMaxVal(), 15, "We expect the max val to be 15.");

	// test the chaining of setter methods
	$dsInit.setRows(5).setCols(5).setMaxVal(5);
	// reinitialize the array
	$dsInit.initArray();

	// retest getter methods to see if setter methods took effect
	equal( $dsInit.getRows(), 5, "We expect the # of rows to be 5." );
	equal( $dsInit.getCols(), 5, "We expect the # of rows to be 5." );
	equal( $dsInit.getMaxVal(), 5, "We expect the max val to be 5.");
});