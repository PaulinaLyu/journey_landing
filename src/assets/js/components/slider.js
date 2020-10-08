introSlider.slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	autoplay: true,
	autoplaySpeed: 3000,
	speed: 500
});

$('#introSliderPrev').on('click', function() {
	introSlider.slick('slickPrev')
});

$('#introSliderNext').on('click', function() {
	introSlider.slick('slickNext')
});

offersSlider.slick({
	infinite: true,
	centerMode: true,
	centerPadding: '60px',
	slidesToShow: 5,
	arrows: false,
	dots: true,
	focusOnSelect: true,
	responsive: [

		{
			breakpoint: 1400,
			settings: {
			  centerMode: true,
			  centerPadding: '40px',
			  slidesToShow: 4
			}
		  },

		{
			breakpoint: 1200,
			settings: {
			  slidesToShow: 3
			}
		  },

		  {
			breakpoint: 768,
			settings: {
				  slidesToShow: 2,
			}
		  },

		{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1
			  }
		}
	]
});

reviewsSlider.slick({
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 2,
	arrows: false,
	dots: true,
	speed: 500,
	responsive: [
		{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			  }
		},

		
	]
});