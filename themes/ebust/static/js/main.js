

$(document).ready( function() {


	$("#matr, #pwd, #serv").hide();


	$("#welcome").click( function() {
		$(this).fadeOut(300, function() {
			//Stuff to do *after* the animation takes place
			$("#matr").fadeIn();
		});
	});

	$("#matr [data-confirm]").click( function() {
		$("#matr").fadeOut(300, function() {
			//Stuff to do *after* the animation takes place
			$("#pwd").fadeIn();
		});
	});

	$("#pwd [data-confirm]").click( function() {
		$("#pwd").fadeOut(300, function() {
			//Stuff to do *after* the animation takes place
			$("#serv").fadeIn();
		});
	});

	$("#serv [data-confirm]").click( function() {
		$("#login").fadeOut(300, function() {
			//Stuff to do *after* the animation takes place
		});
	});

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
