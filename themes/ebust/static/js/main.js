

$(document).ready( function() {

	// const swup = new Swup();

	// bottom bar

	$(".bb_tab").click( function() {

		// tab bar effect

		$(".bb_tab.active").removeClass("active");
		$(this).addClass("active");

		var position = $(this).position();
		var leftOffset = position.left;

		$(".bottombar .bar").css({
			"left": leftOffset,
		});


		// apertura partial

		var tabId = $(this).attr("data-tab");

		$(".partial_content").removeClass("show").hide();


		$('#' + tabId).show().addClass("show");



	});

	// side menu open

	$(".menu_item").click( function() {

	});

	$(".menu_trigger").click( function() {
		$(".side_menu").toggleClass("hidden");
	});

});
