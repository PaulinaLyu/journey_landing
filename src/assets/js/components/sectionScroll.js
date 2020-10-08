$("[data-scroll]").on("click", function(event) {
	event.preventDefault();

	let scrollElement = $(this).data("scroll");
	let scrollElementPosition = $(scrollElement).offset().top;

	$("body").removeClass('show-nav');
	navToggle.removeClass('active');
	nav.removeClass('show');
	
	$("html, body").animate({
		scrollTop: scrollElementPosition - headerH
	}, 500)
});