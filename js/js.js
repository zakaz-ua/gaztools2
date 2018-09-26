  $('.main__sl').slick();
  $('.adv__sl').slick({
  	  asNavFor: '.adv__list'
  });

  $('.adv__list').slick({
  	  asNavFor: '.adv__sl',
  	  arrows: false,
  	  focusOnSelect: true,
  	  slidesToShow: 7,
  });

  $('.about__sl').slick({
	  dots: true,
	  asNavFor: '.about__sl__text'
  });

  $('.about__sl__text').slick({
 	  asNavFor: '.about__sl',
 	  arrows: false
  });

