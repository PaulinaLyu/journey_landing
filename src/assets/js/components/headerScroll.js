headerScroll();
$(window).on("scroll resize", function() {
	headerScroll();
});

function headerScroll() {			
	let scrollTop = $(this).scrollTop();

	if( scrollTop >= (introH - headerH) ) {
		header.addClass("header--dark");
	} else {
		header.removeClass("header--dark");
	}
}