$(function(){
   $('.multiple-items').slick({
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 1,
	arrows: true,
	dots:true,
	responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
    ]
  });    
});