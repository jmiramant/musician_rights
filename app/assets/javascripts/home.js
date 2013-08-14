var selectTab = function(){
		$('ul.tabs').each(function() {
		var $active, $content, $links = $(this).find('a');
		$active = $($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);
		$active.addClass('active');
		$content = $($active.attr('href'));

		$links.not($active).each(function() {
			$($(this).attr('href')).hide();
		});

		$(this).on('click', 'a', function(e) {
			$active.removeClass('active');
			$content.hide();

			$active = $(this);
			$content = $($(this).attr('href'));

			$active.addClass('active');
			$content.show();

			e.preventDefault();
		});
	});
};


$(document).ready(function() {
	selectTab();

	$('.love_button').addClass('button');

	$('.join').on('click', function() {
		window.location.href = "/members?flash=Sign Up Below to Join the Movement";
	});

	if (window.location.pathname == '/'){
		$('.button').on('click', function() {
			window.location.href = "/members?flash=Sign Up Below to Join the Movement";
		});
		$('.button').html('Become a Member');
	}
	if (window.location.pathname == '/members'){
		$('.love_button').hide();
		}

	setTimeout(function(){
		$('.flash').fadeIn(300);
	}, 1000);

	$('.memo_one .memo_box').on('click', function(e){
			e.preventDefault();
		$('.memo').fadeIn();
	});

	$('.memo .button').on('click', function() {
		$('.exit_mem').fadeOut();
	});

	$('.memo_two .memo_box').on('click', function(e){
			e.preventDefault();
		$('.home_love').fadeIn();
	});

	$('.close').on('click', function() {
		$('.home_love').fadeOut();
		$('.exit_mem').fadeOut();
	});

});