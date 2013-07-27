$(document).ready(function() {
	$('.signup form').on("ajax:success", function(e, data) {
		console.log(data);
	});

	$('.signup form').on("ajax:error", function(e, data) {
		console.log(data);
	});
});