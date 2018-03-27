require.config({
	"paths": {
		// Use the source files, instead of the built version.
		"dom-duck": "../src/DOM-Duck"
	}
})

define(["dom-duck"], function(duck)
{
	console.log(duck);
});
