$(document).ready(function() {

	$('.signup form').on("ajax:success", function(e, data) {
		console.log(data);
		successPath(data);
	});

	$('.signup form').on("ajax:error", function(e, data) {
		console.log($.parseJSON(data.responseText).error);
		errorHandling(e, data);
	});
});

function successPath(data) {
	$('.text .mem_event:first-child').before("<div class='mem_event'> <div class='title'>" + data.first_name + " " + data.last_name + "</div> <div class='band'>" + data.band + "</div> </div>");
}


function errorHandling(e, data) {
	var errors = $.parseJSON(data.responseText).error;
	var px = 30 * errors.length;
	$('.signup').animate({
		height: '+=' + px + 'px'
	}, 500);
	for (e in errors) {
		$('.signup').append('<div style=" font-size: 17px; text-align: center; color: white;">' + errors[e] + '<div>');
	}
	setTimeout(function() {
		$('.signup').html('');
		$('.signup').animate({
			height: '-=' + px + 'px'
		}, 500);
	}, 10000);
}