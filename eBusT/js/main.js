

$(document).ready( function() {

	const swup = new Swup();

// bottom bar effect

	$(".bb_tab").click( function() {

		$(".bb_tab.active").removeClass("active");
		$(this).addClass("active");

		var position = $(this).position();
		var leftOffset = position.left;

		$(".bottombar .bar").css({
			"left": leftOffset,
		});

	});

// side menu open

	$(".menu_item").click( function() {

	});

	$(".menu_trigger").click( function() {
		$(".side_menu").toggleClass("hidden");
	});

});
