/*
 * DataStream Array Unit Tests
 */

// test the array's setter & getter methods
module( "datastream setter/getter methods");
test( "datastream getter methods", 4, function() {

	// initialize array
	var $ds = $('#qunit-fixture').dsArray()

	// run tests on getter methods
	equal( 10, $ds.getRows(), "We expect the # of rows to be 10." );
	equal( 10, $ds.getCols(), "We expect the # of columns to be 10.");
	equal( 10, $ds.getMaxVal(), "We expect the max val to be 10.");
	ok( true, $ds.getCell(0, 0), "We expect some integer to be returned");

	// destroy jQ object
	$ds.remove();
});
test( "datastream setter methods", 3, function() {

	// initialize array
	var $ds = $('#qunit-fixture').dsArray()

	// run tests on setter methods
	ok( true, $ds.setRows(5), "We expect setRows to exist.");
	ok( true, $ds.setCols(5), "We expect setCols to exist.");
	ok( true, $ds.setMaxVal(5), "We expect setMaxVal to exist.");

	// destroy jQ object
	$ds.remove();
});

// test the array's initialzation & modification methods
module( "datastream array init & mod", {
	setup: function() {
	},
	teardown: function() {
	}
});
test( "set rows, cols, maxValue & reset array", 6, function() { 
	// initialize a new datastream array to something other than the defaults
	// of 10x10 with a maxVal of 10
	var $ds = $("#ds-array").dsArray({
		rows: 15,
		cols: 15,
		maxVal: 15
	});

	// test getter methods
	equal( 15, $ds.getRows(), "We expect the # of rows to be 15." );
	equal( 15, $ds.getCols(), "We expect the # of rows to be 15." );
	equal( 15, $ds.getMaxVal(), "We expect the max val to be 15.");

	// test the chaining of setter methods
	$ds.setRows(5).setCols(5).setMaxVal(5);
	// reinitialize the array
	$ds.initArray();

	// retest getter methods to see if setter methods took effect
	equal( 5, $ds.getRows(), "We expect the # of rows to be 5." );
	equal( 5, $ds.getCols(), "We expect the # of rows to be 5." );
	equal( 5, $ds.getMaxVal(), "We expect the max val to be 5.");

	// remove the jQ object
	$ds.remove();
});