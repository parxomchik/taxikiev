$(document).ready(function() {
 
  var owl = $("#owl-demo");
 
  owl.owlCarousel({
      items : 3, //10 items above 1000px browser width
      pagination:  false,
      singleItem:true,
      slideSpeed : 300,
      paginationSpeed : 400,
      afterMove : function (elem) {
           if(this.currentItem === this.maximumItem){
           $(".price_btn").removeClass("price_active");
           $(".price_btn").last().addClass("price_active");
        }
           if(this.currentItem === 0){
           $(".price_btn").removeClass("price_active");
           $(".price_btn").first().addClass("price_active");   
           }
           if(this.currentItem === 1){
           $(".price_btn").removeClass("price_active");
           $(".customNavigation div:nth-child(2) a").addClass("price_active");   
           }
      }
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
  $(".price_btn").click(function() {
    $(".price_btn").removeClass("price_active");
    $(this).addClass("price_active");
  });
});
