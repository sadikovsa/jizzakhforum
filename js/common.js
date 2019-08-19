$(function () {

	// sliders
	$('.owl-carousel.shops-experts__slider').owlCarousel({
		loop: false,
		margin: 0,
		nav: true,
		navText: ['<span class="icon-prev"></span>', '<span class="icon-next"></span>'],
		dots: false,
		items: 7,
		slideBy: 1,
		smartSpeed: 1000,
		autoplaySpeed: 1000,
		responsive: {
			300: {
				items: 1,
			},
			768: {
				items: 3
			},
			1024: {
				items: 5
			},
			1200: {
				items: 7
			}
		}
	});

	// masks
	$(".phone").mask("+7(999) 999-99-99");
	$(".date-from").mask("99.99.9999");
	$(".date-to").mask("99.99.9999");

	// mobile menu
	if ($(window).width() < 1200) {
		// Mobile Menu
		var burger = $('#burgerBtn');
		var mobileMenuBlock = $('.header-nav');

		burger.on('change', function () {
			mobileMenuBlock.toggleClass('show');
		});

		$(document).on('click', function (e) {
			var target = e.target;
			if (!target.closest('.btn-transparent') && !target.closest('.header-cart') && !target.closest('.burger') && !$(target).closest(".header-nav").length) {
				burger.prop('checked', false);
				mobileMenuBlock.removeClass('show');
			}
		});
	}
	
//scroll
	$(".header-menu").on("click", "a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),
			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id);
		topOffset = top.offset().top;
		if (top.length > 0) {
			//анимируем переход на расстояние - top за 1500 мс
			$('body,html').animate({
				scrollTop: topOffset
			}, 700);
		}
	});
	
	// YouTube 
	$(".youtube").each(function () {
		// Based on the YouTube ID, we can easily find the thumbnail image
		$(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');
		var videoModal = $('#videoModal');
		// Overlay the Play icon to make it look like a video player
		$(this).append($('<div/>', {
			'class': 'play'
		}));
		$(document).delegate('#' + this.id, 'click', function () {
			//videoModal.find('.youtube').attr('id', this.id);
			// Create an iFrame with autoplay set to true
			var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=0&autohide=1";
			if ($(this).data('params')) iframe_url += '&' + $(this).data('params');

			// The height and width of the iFrame should be the same as parent
			var iframe = $('<iframe/>', {
				'frameborder': '0',
				'src': iframe_url,
				'width': $(this).width(),
				'height': $(this).height(),
				'allowfullscreen': true,
				'allow': "accelerometer; encrypted-media; gyroscope; picture-in-picture"
			})
			$(this).replaceWith(iframe);
			//videoModal.modal('show');
		});

	});

});