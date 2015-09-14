$(document).ready(function(){


// Clear placeholder
	(function() {
		$('input,textarea').focus(function(){
				$(this).data('placeholder',$(this).attr('placeholder'))
				$(this).attr('placeholder','');
		});
		$('input,textarea').blur(function(){
			$(this).attr('placeholder',$(this).data('placeholder'));
		});
	}());

// Validation
	$.validate({
		validateOnBlur : true,
		scrollToTopOnError : false,
		validateOnEvent: true
	});

// menu toggle
	$('#menu_toggle').on('click', function(){
		$(this).toggleClass('is-active');
		$('.nav-main').slideToggle();
	});

// Slick Slider
	$('.slider').slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 7000
	});

// Selectric
	$('.form-select').selectric();

// Slim Scroll
	$(function(){
	    $('.selectric-scroll').slimScroll({
	    	alwaysVisible: true,
      		railVisible: true,
      		railColor: '#555',
      		railOpacity: 0.2,
	        height: '150px',
	        color: '#555',
	        opacity: 1,
	        size: '3px',
	        distance: '2px'
	    });
	});
	
	
});