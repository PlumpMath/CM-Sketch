test( "hello test", function() {
  ok( 1 == "1", "Passed!" );
});

test( "datastream getter methods", 3, function() {
	var $ds = $("#ds-array").dsArray();

	equal( 10, $ds.getRows(), "We expect the # of rows to be 10." );
	equal( 10, $ds.getCols(), "We expect the # of columns to be 10.");
	equal( 10, $ds.getMaxVal(), "We expect the max val to be 10.");
	console.log($ds.getRows().getCols().getMaxVal());
});