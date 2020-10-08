$(window).on("scroll", function() {
	let scrollTop = $(this).scrollTop();

	$("[data-scrollspy]").each(function() {
		let sectionId = $(this).data("scrollspy");
		let sectionOffset = $(this).offset().top;
		sectionOffset = sectionOffset - (windowH * 0.33333);

		if(scrollTop >= sectionOffset) {
			$('#nav [data-scroll]').removeClass('active');
			$('#nav [data-scroll="' + sectionId + '"]').addClass('active');
		}

		if(scrollTop == 0) {
			$('#nav [data-scroll]').removeClass('active');
		}

	});
});