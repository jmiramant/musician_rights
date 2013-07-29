$(document).ready(function() {
	$("a.openform").click(function() {
		$.fancybox(
			$('.new_user').html(), {
				'width': 950,
				'height': 1100,
				'autoScale': false,
				'hideOnContentClick': false
			},
			'onComplete' : function() {
				$('#new_user form').on('submit', function() {
					console.log('ummsm');
					$.fancybox.close
				});
			}
		);
	});
});