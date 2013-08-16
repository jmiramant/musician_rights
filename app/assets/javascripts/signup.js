$(document).ready(function() {
	$('.memo .button').on('click', function() {
		$('.memo').fadeOut();
		setTimeout(function() {
			$('.text .mem_event:nth-child(1)').fadeIn();
			incrementCount();
			successMessage();
		}, 1000);
	});

	if (window.location.pathname == '/members'){
		$('.third').on('click', '.love_button', function(){
			$('.lovers_popup').fadeOut();
		});
	}

	$('.signup form').on("ajax:success", function(e, data) {
		var type = $('.user_type').html();
		if (data.opt_out == false) {
			successPath(data);
		}
		if (type.search('musician') > 0 )
		{
			$('.memo').fadeIn();
		} else if (type.search('lover') > 0) {
			$('.lovers_popup .lovers_bx').fadeIn();
		} else {
			successMessage();
		}

		$(this).closest('form').find("input[type=text], textarea").val("");
		$(this).closest('form').find("input[type=number], textarea").val("");
		$(this).closest('form').find("input[type=email], textarea").val("");
	});

	$('.signup form').on("ajax:error", function(e, data) {
		errorHandling(e, data);
	});
});

function successPath(data) {
	var band = "";
	if (data.band !== "") {
		band = "Band: ";
	}
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