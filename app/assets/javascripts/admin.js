$(document).ready(function() {
	$('.create_event form').on("ajax:success", function(e, data) {
		console.log(data);
	});

	$('.create_event form').on("ajax:error", function(e, data) {
		console.log(data);
	});
});