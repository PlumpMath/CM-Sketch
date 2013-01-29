test( "hello test", function() {
  ok( 1 == "1", "Passed!" );
});

module( "datastream setter/getter methods", {
	setup: function() {
		$ds = $("#ds-array").dsArray();
	},
	teardown: function() {
		$ds.empty();
	}
});
test( "datastream getter methods", 3, function() {
	equal( 10, $ds.getRows(), "We expect the # of rows to be 10." );
	equal( 10, $ds.getCols(), "We expect the # of columns to be 10.");
	equal( 10, $ds.getMaxVal(), "We expect the max val to be 10.");
});

test( "datastream setter methods", 3, function() {
	ok( true, $ds.setRows(5), "We expect setRows to exist.");
	ok( true, $ds.setCols(5), "We expect setCols to exist.");
	ok( true, $ds.setMaxVal(5), "We expect setMaxVal to exist.");
});
