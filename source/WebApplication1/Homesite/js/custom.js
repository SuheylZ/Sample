/* =====================================
All JavaScript fuctions Start
======================================*/
(function ($) {
	
    'use strict';
/*--------------------------------------------------------------------------------------------
	document.ready ALL FUNCTION START
---------------------------------------------------------------------------------------------*/	
// > testimonial function by = slick.min.js ========================== //

	function testimonial_v_slider(){
		jQuery('.slick-testimonials-content').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: false,
			vertical: true,
			asNavFor: '.slick-testimonials-thumbnails',
			responsive: [
				{
				breakpoint: 480,
				settings: {vertical: false,}
				}
			]
		});
		
		jQuery('.slick-testimonials-thumbnails').slick({
			slidesToShow:3,
			slidesToScroll:1,
			centerMode: true,
			asNavFor: '.slick-testimonials-content',
			vertical: true,
			focusOnSelect: true,
			responsive: [
				{
				breakpoint: 1200,
				settings: {slidesToShow:3}
				},
				{
				breakpoint: 480,
				settings: {
					vertical: false,
					slidesToShow:3
				}
				}
			]
		});
	}

	// > testimonial function by = slick.min.js ========================== //

	function testimonial_2_slider(){
		jQuery('.slick-testimonials-2').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: true,
			fade: false,
			vertical: false,
			autoplay:true,
			asNavFor: '.slick-testimonials-2-thumb',
			responsive: [
				{
					breakpoint: 768,
					settings: {slidesToShow:1}
				},
				{
				breakpoint: 480,
				settings: {
					slidesToShow:1
				}
				},

			]
		});
		
		jQuery('.slick-testimonials-2-thumb').slick({
			slidesToShow:3,
			slidesToScroll:1,
			centerMode: true,
			asNavFor: '.slick-testimonials-2',
			vertical: false,
			focusOnSelect: true,
			autoplay:true,
			responsive: [
				{
				breakpoint: 1200,
				settings: {slidesToShow:3}
				},
				{
				breakpoint: 480,
				settings: {
					vertical: false,
					slidesToShow:3
				}
				}
			]
		});
	}

	// > testimonial function by = slick.min.js ========================== //

	function testimonial_3_slider(){
		jQuery('.slick-testimonials-3').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			fade: false,
			vertical: false,
			autoplay:true,
			asNavFor: '.slick-testimonials-3-thumb',
			responsive: [
				{
					breakpoint: 1025,
					settings: {slidesToShow:2}
				},
				{
					breakpoint: 768,
					settings: {slidesToShow:1}
				},
				{
					breakpoint: 480,
					settings: {slidesToShow:1}
				},

			]
		});
		
		jQuery('.slick-testimonials-3-thumb').slick({
			slidesToShow:3,
			slidesToScroll:1,
			centerMode: true,
			asNavFor: '.slick-testimonials-3',
			vertical: false,
			focusOnSelect: true,
			autoplay:false,
			responsive: [
				{
				breakpoint: 1200,
				settings: {slidesToShow:3}
				},
				{
				breakpoint: 480,
				settings: {
					vertical: false,
					slidesToShow:3
				}
				}
			]
		});
	}	
	 

//--------Home 1 Slider------------//
	function slider_home1(){
		var swiper = new Swiper(".twm-slider", {
			slidesPerView: 1,
			speed: 3000,
			grabCursor: true,
			parallax: true,
			loop:true,
			autoplay: true,
			autoplay: {delay: 5000,},
			scrollbar: {
				el: ".swiper-scrollbar",
				hide: false,
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
				renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + "</span>";
				},
			},
		});
	}

//--------Home 2 Slider------------//
	function slider_home2(){
		var swiper = new Swiper(".twm-slider2", {
			slidesPerView: 1,
			speed: 3000,
			grabCursor: true,
			parallax: true,
			effect: 'fade',
			speed: 2000,
			loop:true,
			autoplay: false,
			autoplay: {delay: 4000,},
			scrollbar: {
				el: ".swiper-scrollbar",
				hide: false,
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
				renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + "</span>";
				},
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	}	
//--------Home 3 Slider------------//
function slider_home3(){
	var swiper = new Swiper(".twm-slider3", {
		slidesPerView: 1,
		speed: 1000,
		grabCursor: true,
		parallax: true,
		effect: 'fade',
		loop:true,
		autoplay: true,
		autoplay: {delay: 10000,},
		pagination: {
			el: ".swiper-pagination",
			dynamicBullets: false,
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
}

// >Backgroung image scroling right function by = jquery.bgscroll.js		
	function bg_image_moving(){
		jQuery( function() {			  
		jQuery('.bg-image-moving').bgscroll({scrollSpeed:30 , direction:'v' });
		jQuery('.bg-image-moving2').bgscroll({scrollSpeed:20 , direction:'h'});
		});
	}

// > Video responsive function by = custom.js ========================= //	
	function video_responsive(){	
		jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
		jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');	
	}  


 // > LIGHTBOX Gallery Popup function	by = lc_lightbox.lite.js =========================== //      
 	function lightbox_popup(){
        lc_lightbox('.elem', {
            wrap_class: 'lcl_fade_oc',
            gallery : true,	
            thumb_attr: 'data-lcl-thumb', 
            
            skin: 'minimal',
            radius: 0,
            padding	: 0,
            border_w: 0,
        });
	}			

// > magnificPopup for video function	by = magnific-popup.js ===================== //	
	function magnific_video(){	
		jQuery('.mfp-video').magnificPopup({
			type: 'iframe',
		});
	}

// Vertically center Bootstrap modal popup function by = custom.js ==============//
	function popup_vertical_center(){	
		jQuery(function() {
			function reposition() {
				var modal = jQuery(this),
				dialog = modal.find('.modal-dialog');
				modal.css('display', 'block');
				
				// Dividing by two centers the modal exactly, but dividing by three 
				// or four works better for larger screens.
				dialog.css("margin-top", Math.max(0, (jQuery(window).height() - dialog.height()) / 2));
			}
			// Reposition when a modal is shown
			jQuery('.modal').on('show.bs.modal', reposition);
			// Reposition when the window is resized
			jQuery(window).on('resize', function() {
				jQuery('.modal:visible').each(reposition);
			});
		});
	}

// > Main menu sticky on top  when scroll down function by = custom.js ========== //		
	function sticky_header(){
		if(jQuery('.sticky-header').length){
			var sticky = new Waypoint.Sticky({
			  element: jQuery('.sticky-header')
			});
		}
	}

// > Sidebar sticky  when scroll down function by = theia-sticky-sidebar.js ========== //		
	function sticky_sidebar(){		
		$('.rightSidebar')
			.theiaStickySidebar({
				additionalMarginTop: 100
			});		
	}

// > page scroll top on button click function by = custom.js ===================== //	
	function scroll_top(){
		jQuery("button.scroltop").on('click', function() {
			jQuery("html, body").animate({
				scrollTop: 0
			}, 1000);
			return false;
		});

		jQuery(window).on("scroll", function() {
			var scroll = jQuery(window).scrollTop();
			if (scroll > 900) {
				jQuery("button.scroltop").fadeIn(1000);
			} else {
				jQuery("button.scroltop").fadeOut(1000);
			}
		});
	}
	
// > input type file function by = custom.js ========================== //	 	 
	function input_type_file_form(){
		jQuery(document).on('change', '.btn-file :file', function() {
			var input = jQuery(this),
				numFiles = input.get(0).files ? input.get(0).files.length : 1,
				label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
			input.trigger('fileselect', [numFiles, label]);
		});

		jQuery('.btn-file :file').on('fileselect', function(event, numFiles, label) {
			var input = jQuery(this).parents('.input-group').find(':text'),
				log = numFiles > 10 ? numFiles + ' files selected' : label;
			if (input.length) {
				input.val(log);
			} else {
				if (log) alert(log);
			}
		});	
	}

// > input Placeholder in IE9 function by = custom.js ======================== //	
	function placeholderSupport(){
	/* input placeholder for ie9 & ie8 & ie7 */
		jQuery.support.placeholder = ('placeholder' in document.createElement('input'));
		/* input placeholder for ie9 & ie8 & ie7 end*/
		/*fix for IE7 and IE8  */
		if (!jQuery.support.placeholder) {
			jQuery("[placeholder]").on('focus', function () {
				if (jQuery(this).val() === jQuery(this).attr("placeholder")) jQuery(this).val("");
			}).blur(function () {
				if (jQuery(this).val() === "") jQuery(this).val(jQuery(this).attr("placeholder"));
			}).blur();

			jQuery("[placeholder]").parents("form").on('submit', function () {
				jQuery(this).find('[placeholder]').each(function() {
					if (jQuery(this).val() === jQuery(this).attr("placeholder")) {
						 jQuery(this).val("");
					}
				});
			});
		}
		/*fix for IE7 and IE8 end */
	}	

	// > Nav submenu show hide on mobile by = custom.js
	function mobile_nav(){
		jQuery(".sub-menu").parent('li').addClass('has-child');
		jQuery("<div class='fa fa-angle-right submenu-toogle'></div>").insertAfter(".has-child > a");

		jQuery('.has-child a+.submenu-toogle').on('click',function(ev) {

			jQuery(this).parent().siblings(".has-child ").children(".sub-menu").slideUp(500, function(){
				jQuery(this).parent().removeClass('nav-active');
			});

			jQuery(this).next(jQuery('.sub-menu')).slideToggle(500, function(){
				jQuery(this).parent().toggleClass('nav-active');
			});

			ev.stopPropagation();
		});
	
	}
	 
	// Mobile side drawer function by = custom.js
	function mobile_side_drawer(){
		jQuery('#mobile-side-drawer').on('click', function () { 
			jQuery('.mobile-sider-drawer-menu').toggleClass('active');
		});
	}	
	
//  > Top Search bar Show Hide function by = custom.js =================== //	

	function site_search(){
		jQuery('a[href="#search"]').on('click', function(event) {                    
		jQuery('#search').addClass('open');
		jQuery('#search > form > input[type="search"]').focus();
	});
				
	jQuery('#search, #search button.close').on('click keyup', function(event) {
		if (event.target === this || event.target.className === 'close') {
			jQuery(this).removeClass('open');
		}
	});  
 	}	

//  Client logo Carousel function by = owl.carousel.js ========================== //
	function home_client_carousel(){
	jQuery('.home-client-carousel').owlCarousel({
		loop:true,
		nav:false,
		dots: true,				
		margin:5,
		autoplay:true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:2,
			},
			480:{
				items:3,
			},			
			767:{
				items:4,
			},
			1000:{
				items:4
			}
		}
	});
	}

	//  Client logo Carousel function by = owl.carousel.js ========================== //
	function home_client_carousel_2(){
		jQuery('.home-client-carousel2').owlCarousel({
			loop:true,
			nav:false,
			dots: false,				
			margin:5,
			autoplay:true,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			responsive:{
				0:{
					items:2,
				},
				480:{
					items:3,
				},			
				767:{
					items:4,
				},
				1000:{
					items:6
				}
			}
		});
	}

	//  Client logo Carousel function by = owl.carousel.js ========================== //
	function home_client_carousel_3(){
		jQuery('.home-client-carousel3').owlCarousel({
			loop:true,
			nav:false,
			dots: false,				
			margin:5,
			autoplay:true,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			responsive:{
				0:{
					items:2,
				},
				480:{
					items:3,
				},			
				767:{
					items:4,
				},
				1000:{
					items:6
				}
			}
		});
	}	
	
	//  Service Gallery Carousel function by = owl.carousel.js ========================== //
	function services_gallery_carousel(){
		jQuery('.services-gallery-one').owlCarousel({
			loop:true,
			nav:true,
			dots: false,				
			margin:15,
			autoplay:true,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			responsive:{
				0:{
					items:1,
				},
				480:{
					items:1,
				},			
				767:{
					items:2,
				},
				1000:{
					items:2,
				},
				1200:{
					items:3
				}
			}
		});
	}

		//  Service Gallery Carousel function by = owl.carousel.js ========================== //
		function services_gallery_carousel4(){
			jQuery('.services-gallery-four').owlCarousel({
				loop:true,
				nav:true,
				dots: false,				
				margin:15,
				autoplay:true,
				navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
				responsive:{
					0:{
						items:1,
					},
					480:{
						items:1,
					},			
					767:{
						items:2,
					},
					1000:{
						items:2,
					},
					1200:{
						items:3
					}
				}
			});
		}

//  Counter Section function by = counterup.min.js
	function counter_section(){
		jQuery('.counter').counterUp({
			delay: 10,
			time: 3000
		});	
	}	

//  Booking Form Section function by = custom.js
	function booking_form(){
		jQuery("div.booking-tab-menu>div.list-group>a").click(function(e) {
			e.preventDefault();
			jQuery(this).siblings('a.active').removeClass("active");
			jQuery(this).addClass("active");
			var index = $(this).index();
			jQuery("div.booking-tab>div.booking-tab-content").removeClass("active");
			jQuery("div.booking-tab>div.booking-tab-content").eq(index).addClass("active");
		});
	}

	// > projects_carousel Full Screen with no margin function by = owl.carousel.js ========================== //
	function project_carousel(){
		jQuery('.project-carousel').owlCarousel({
			loop:true,
			nav:true,
			dots: false,				
			margin:70,
			autoplay:true,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				640:{
					items:1
				},						
				991:{
					items:2
				}
			}
		});
	}

	// > projects_carousel Full Screen with no margin function by = owl.carousel.js ========================== //
	function project_carousel_2(){
		jQuery('.project-carousel-2').owlCarousel({
			loop:true,
			nav:true,
			dots: false,				
			margin:70,
			autoplay:true,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:1
				},
				767:{
					items:2
				},						
				1024:{
					items:3
				},
				1365:{
					items:4
				}
			}
		});
	}


/*--------------------------------------------------------------------------------------------
	Window on load ALL FUNCTION START
---------------------------------------------------------------------------------------------*/
	// > masonry function function by = isotope.pkgd.min.js ========================= //	

	function masonryBox() {
		if ( jQuery().isotope ) {      
			var $container = jQuery('.masonry-wrap');
				$container.isotope({
					itemSelector: '.masonry-item',
					transitionDuration: '1s',
					originLeft: true,
					stamp: '.stamp',
				});

			$container.imagesLoaded().progress( function() {
				$container.isotope('layout');
			});

			jQuery('.masonry-filter li').on('click',function() {                           
				var selector = jQuery(this).find("a").attr('data-filter');
				jQuery('.masonry-filter li').removeClass('active');
				jQuery(this).addClass('active');
				$container.isotope({ filter: selector });
				return false;
			});
		};
	}
	

// > page loader function by = custom.js ========================= //		
	function page_loader() {
		$('.loading-area').fadeOut(1000);
	}

/*--------------------------------------------------------------------------------------------
    Window on scroll ALL FUNCTION START
---------------------------------------------------------------------------------------------*/

    function color_fill_header() {
        var scroll = $(window).scrollTop();
        if(scroll >= 100) {
            $(".is-fixed").addClass("color-fill");
        } else {
            $(".is-fixed").removeClass("color-fill");
        }
    }
	

/*--------------------------------------------------------------------------------------------
	document.ready ALL FUNCTION START
---------------------------------------------------------------------------------------------*/
	jQuery(document).ready(function() {
		// > testimonial function by = slick.min.js ========================== //
	    testimonial_v_slider(),
		// > testimonial function by = slick.min.js ========================== //
	    testimonial_2_slider(),
		// > testimonial function by = slick.min.js ========================== //
	    testimonial_3_slider(),
		//Home 1 Slider------------//
		slider_home1(),
		//Home 2 Slider------------//
		slider_home2(),
		//Home 3 Slider------------//
		slider_home3(),
		// >Backgroung image scroling right function by = jquery.bgscroll.js		
		bg_image_moving(),
		// > Top Search bar Show Hide function by = custom.js  		
		site_search(),	
		// > Video responsive function by = custom.js 
		video_responsive(),
		 // > LIGHTBOX Gallery Popup function	by = lc_lightbox.lite.js =========================== //      
		lightbox_popup(),
		// > magnificPopup for video function	by = magnific-popup.js
		magnific_video(),
		// > Vertically center Bootstrap modal popup function by = custom.js
		popup_vertical_center();
		// > Main menu sticky on top  when scroll down function by = custom.js		
		sticky_header(),
	    // > Sidebar sticky  when scroll down function by = theia-sticky-sidebar.js ========== //		
		sticky_sidebar(),
		// > page scroll top on button click function by = custom.js	
		scroll_top(),
		// > input type file function by = custom.js	 	
		input_type_file_form(),
		// > input Placeholder in IE9 function by = custom.js		
		placeholderSupport(),
		// > Nav submenu on off function by = custome.js ===================//
		mobile_nav(),
		// Mobile side drawer function by = custom.js
		mobile_side_drawer(),
		//  Client logo Carousel function by = owl.carousel.js ========================== //
		home_client_carousel(),
		//  Client logo Carousel function by = owl.carousel.js ========================== //
	    home_client_carousel_2(),
		//  Client logo Carousel function by = owl.carousel.js ========================== //
	    home_client_carousel_3(),
		//  Service Gallery Carousel function by = owl.carousel.js ========================== //
		services_gallery_carousel(),
		//  Service Gallery Carousel function by = owl.carousel.js ========================== //
		services_gallery_carousel4(),
		//  Counter Section function by = counterup.min.js ========================== //
		counter_section(),
		//  Booking Form Section function by = custom.js
		booking_form(),
		// > projects_carousel Full Screen with no margin function by = owl.carousel.js ========================== //
	     project_carousel();
		 // > projects_carousel Full Screen with no margin function by = owl.carousel.js ========================== //
	     project_carousel_2();      
				
	}); 	

/*--------------------------------------------------------------------------------------------
	Window Load START
---------------------------------------------------------------------------------------------*/
jQuery(window).on('load', function () {
	// > masonry function function by = isotope.pkgd.min.js		
	masonryBox(),
	// > page loader function by = custom.js		
	page_loader();
});

 /*===========================
	Window Scroll ALL FUNCTION START
===========================*/

jQuery(window).on('scroll', function () {
// > Window on scroll header color fill 
	color_fill_header();
});
	

/*===========================
	Document on  Submit FUNCTION START
===========================*/

	// > Contact form function by = custom.js	
	jQuery(document).on('submit', 'form.cons-contact-form', function(e){
		e.preventDefault();
		var form = jQuery(this);
		/* sending message */
		jQuery.ajax({
			url: 'https://thewebmax.com/Logitrago/form-handler2.php',
			
			data: form.serialize() + "&action=contactform",
			type: 'POST',
			dataType: 'JSON',
			beforeSend: function() {
				jQuery('.loading-area').show();
			},

			success:function(data){
				jQuery('.loading-area').hide();
				if(data['success']){
				jQuery("<div class='alert alert-success'>"+data['message']+"</div>").insertBefore('form.cons-contact-form');
				}else{
				jQuery("<div class='alert alert-danger'>"+data['message']+"</div>").insertBefore('form.cons-contact-form');	
				}
			}
		});
		jQuery('.cons-contact-form').trigger("reset");
		return false;
	});

/*===========================
	Document on  Submit FUNCTION END
===========================*/	

	
})(window.jQuery);