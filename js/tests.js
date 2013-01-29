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