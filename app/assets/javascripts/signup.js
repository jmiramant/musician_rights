$(document).ready(function() {
	$('.memo .button').on('click', function() {
		$('.memo').fadeOut();
		setTimeout(function() {
			$('.text .mem_event:nth-child(1)').fadeIn();
			incrementCount();
			successMessage();
		}, 1000);
	});

	$('.signup form').on("ajax:success", function(e, data) {
		if (data.opt_out === false) {
			successPath(data);
		}
		$('.memo').fadeIn();
		$(this).closest('form').find("input[type=text], textarea").val("");
		$(this).closest('form').find("input[type=number], textarea").val("");
		$(this).closest('form').find("input[type=email], textarea").val("");
	});

	$('.signup form').on("ajax:error", function(e, data) {
		errorHandling(e, data);
	});
});

function successPath(data) {
	if (data.band !== "") {
		var band = "Band: ";
	} else {
		var band = "";
	}
	$('.text .mem_event:first-child').before("<div style='display:none' class='mem_event'> <div class='title'>" + data.id + " - " + data.first_name + " " + data.last_name + "</div> <div class='band'>" + band + data.band + "</div> </div>");
}

function incrementCount() {
	var count = parseInt($('.count_bx .count').html());
	var update = ++count;
	$('.count_bx .count').html(update);
}

function successMessage() {
	$('.messages').fadeIn();
	setTimeout(function() {
		$('.messages').fadeOut();
	}, 5000);
}


function errorHandling(e, data) {
	var errors = $.parseJSON(data.responseText);
	var px = 30 * errors.length;
	$('.errors').animate({
		height: '+=' + px + 'px'
	}, 500);
	for (e in errors) {
		$('.errors').append('<div style=" font-size: 17px; text-align: center; color: $grey;">' + errors[e] + '<div>');
	}
	setTimeout(function() {
		$('.errors').html('');
		$('.errors').animate({
			height: '-=' + px + 'px'
		}, 500);
	}, 10000);
}