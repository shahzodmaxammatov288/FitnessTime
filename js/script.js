/* Aos js begin */
	AOS.init({
		offset: 150,
		duration: 1200
	});
/* Aos js end */

$(function () {
	/* menu start ############################## */ /* menu start ############################## */ /* menu start ############################## */
	$('.header_menu_button').click( function() {
		$('.header_menu_ul').toggleClass('active');
	}) 
	$(window).resize(function(){
		if($(window).width() > 992 ) {
			$('.header_menu_ul').removeClass('active');
		}
	})
/* menu end ############################## */ /* menu end ############################## */ /* menu end ############################## */


	/* slider start ############################## */ /* slider start ############################## */ /* slider start ############################## */
	function slider() {
		const btn_left = document.querySelector('.left'),
			btn_right = document.querySelector('.right'),
			images = document.querySelectorAll('.header_slider_item_box');
			let i = 0;

			btn_left.onclick = function() {
				images[i].classList.remove('active');
				i--;
				if(i < 0) {
					i = images.length - 1
				}
				images[i].classList.add('active');
			}
			btn_right.onclick = function() {
				images[i].classList.remove('active');
				i++;
				if(i > images.length - 1) {
					i = 0;
				}
				images[i].classList.add('active');
			}
	}
	slider();
	/* slider end ############################## */ /* slider end ############################## */ /* slider end ############################## */


	/* trainers Start ############################## */ /* trainers Start ############################## */ /* trainers Start ############################## */
	$('.trainers_card').click(function() {
		$('.trainers_card').removeClass('active');
		$(this).addClass('active');
	})
	/* trainers end ############################## */ /* trainers end ############################## */ /* trainers end ############################## */


	/* Partners Start ############################## *//* Partners Start ############################## *//* Partners Start ############################## */
	$('#elastislide').elastislide();
	/* Partners End ############################## *//* Partners End ############################## *//* Partners End ############################## */


	/* Back to top Begin*/
	$('.top').click(() => {
		$('html,body').animate({scrollTop:0}, 2000);
	})
	/* Back to top End*/
	
	/* Scroll link Begin*/

	let link = $('.header_menu_ul ul a');

	link.on('click',function(e){
		e.preventDefault();

		link.removeClass('active');

		let selector = $(this).addClass('active').attr('href');
		let target = $(selector);

		$('html,body').animate({scrollTop:target.offset().top-96}, 1500);

	})

	/* Scroll link End*/



})


