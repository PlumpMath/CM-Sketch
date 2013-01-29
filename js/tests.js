/*
 * DataStream Array Unit Tests
 */

// test the array's setter & getter methods
module( "datastream setter/getter methods", {
	setup: function() {
		$ds = $('#qunit-fixture').dsArray()
	},
	teardown: function() {
		$ds.empty();
		$ds.remove();
	}
});
test( "datastream getter methods", 4, function() {
	// run tests on getter methods
	equal( $ds.getRows(), 10, "We expect the # of rows to be 10." );
	equal( $ds.getCols(), 10, "We expect the # of columns to be 10.");
	equal( $ds.getMaxVal(), 10, "We expect the max val to be 10.");
	ok( true, $ds.getCell(0, 0), "We expect some integer to be returned");
});
test( "datastream setter methods", 3, function() {

	// run tests on setter methods
	ok( $ds.setRows(5), true, "We expect setRows to exist.");
	ok( $ds.setCols(5), true, "We expect setCols to exist.");
	ok( $ds.setMaxVal(5), true, "We expect setMaxVal to exist.");
});

// test the array's initialzation & modification methods
module( "datastream array init & mod", {
	setup: function() {
		// initialize a new datastream array to something other than the defaults
		// of 10x10 with a maxVal of 10
		$ds = $("#qunit-fixture").dsArray({
			rows: 15,
			cols: 15,
			maxVal: 15
		});
	},
	teardown: function() {
		$ds.empty();
		$ds.remove();
	}
});
test( "set rows, cols, maxValue & reset array", 6, function() { 
	
	// test getter methods
	equal( $ds.getRows(), 15, "We expect the # of rows to be 15." );
	equal( $ds.getCols(), 15, "We expect the # of rows to be 15." );
	equal( $ds.getMaxVal(), 15, "We expect the max val to be 15.");

	// test the chaining of setter methods
	$ds.setRows(5).setCols(5).setMaxVal(5);
	// reinitialize the array
	$ds.initArray();

	// retest getter methods to see if setter methods took effect
	equal( $ds.getRows(), 5, "We expect the # of rows to be 5." );
	equal( $ds.getCols(), 5, "We expect the # of rows to be 5." );
	equal( $ds.getMaxVal(), 5, "We expect the max val to be 5.");
});