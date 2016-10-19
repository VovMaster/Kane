$(document).ready(function() {
	
	$('.slider').slick({
	  dots: true,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear',
	  nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" style=""></button>',
	  prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button" style=""></button>'
	});

	$('.button-menu').click(function(){
		$(this).toggleClass('open-nav');
		if($(this).hasClass('open-nav')) {
			$('.main-nav').slideDown();
		}else {
			$('.main-nav').slideUp();
		}
	});

	
	$('.select-style').ikSelect({
		autoWidth: false,
		ddFullWidth: false,
		equalWidths: false,
		dynamicWidth: false
		
	});

	$('.tabs-style a').click(function() {
		var dateTab = $(this).attr('date-tab');
		$('.tabs-style li').removeClass('active');
		$(this).parent().addClass('active');
		$('[date-tabcontent]').removeClass('active');
		$('[date-tabcontent=' + dateTab + ']').addClass('active');
		return false
	})

});
