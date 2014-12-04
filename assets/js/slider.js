$(document).ready(function() {
 
  var owl = $("#owl-demo");
 
  owl.owlCarousel({
      items : 3, //10 items above 1000px browser width
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
//    owl.trigger('owl.next');
      owl.trigger('owl.goTo',0);
  })
  $("#business").click(function(){
//    owl.trigger('owl.prev');
    owl.trigger('owl.goTo',1);
  })
    $("#universal").click(function(){
//    owl.trigger('owl.prev');
    owl.trigger('owl.goTo',2);
  })
  
});

//$(document).ready(function(){
//          $("#slider").owlCarousel({
//          item: 3,      
////          pagination:  false,
//          navigation : false, // Show next and prev buttons
//          slideSpeed : 300,
//          paginationSpeed : 400,
//          singleItem:true,
//          afterInit : function(elem){
//          var that = this
//          that.owlControls.prependTo(elem)
//          }        
//    });

//     $('.owl-controls .owl-page span').remove(); 
//     $('.owl-controls .clickable .owl-page span').remove(); 
//     $('.owl-page').addClass('col-xs-4'); 
//    
//     $('.owl-controls .owl-page:first').append('<div class=""><button class="btn btn-lg price_btn">Стандарт</button></div>');
//     $('.owl-controls .owl-page:nth-child(2)').append('<div class=""><button class="btn btn-lg price_btn">Бизнес</button></div>');
//     $('.owl-controls .owl-page:last').append('<div class=""><button class="price_btn">Универсал</button></div>');
//    
////     $('.owl-controls .owl-page').append('<div class=""><button class="btn btn-lg btn-warning">Warning</button></div>');       
////     $('.owl-controls .clickable .owl-page').append('<div class=""><button class="btn btn-lg btn-warning">Warning</button></div>');  
////        $( window ).resize(function() {
////     $('.owl-controls .owl-page span').remove(); 
////     $('.owl-controls .clickable .owl-page span').remove(); 
////     $('.owl-page').addClass('col-xs-4'); 
////    
////     $('.owl-controls .owl-page:first').append('<div class=""><button class="btn btn-lg price_btn">Стандарт</button></div>');
////     $('.owl-controls .owl-page:nth-child(2)').append('<div class=""><button class="btn btn-lg price_btn">Бизнес</button></div>');
////     $('.owl-controls .owl-page:last').append('<div class=""><button class="price_btn">Универсал</button></div>');
////        });
    

//});