$(document).ready(function() {
 
  var owl = $("#owl-demo");
 
  owl.owlCarousel({
      items : 3, //10 items above 1000px browser width
      pagination:  false,
      singleItem:true,
      slideSpeed : 300,
      paginationSpeed : 400
//      itemsDesktop : [1000,5], //5 items between 1000px and 901px
//      itemsDesktopSmall : [900,3], // betweem 900px and 601px
//      itemsTablet: [600,2], //2 items between 600 and 0
//      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });
 
  // Custom Navigation Events
  $("#standart").click(function(){
      owl.trigger('owl.goTo',0);
  })
  $("#business").click(function(){
    owl.trigger('owl.goTo',1);
  })
    $("#universal").click(function(){
    owl.trigger('owl.goTo',2);
  })
  
});
