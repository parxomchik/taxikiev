$(window).on("load resize", function (e) {
                 if ($(window).width() <= 600) {
                    $(".item img").each(function () {
                        $(this).attr("src", $(this).attr("src").replace("assets/img/cars/", "assets/img/cars_mobile/"));
                    });
                 } else {
                    $(".item img").each(function () {
                        $(this).attr("src", $(this).attr("src").replace("assets/img/cars_mobile/", "assets/img/cars/"));
                    });
                 }

        });

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
    
    var $btn2 = $('#btn2');
$btn2.data('state', 'hover');

var enterShow = function () {
    if ($btn2.data('state') === 'hover') {
        $btn2.popover('show');
    }
};
var exitHide = function () {
    if ($btn2.data('state') === 'hover') {
        $btn2.popover('hide');
    }
};

$btn2.popover({trigger: 'manual'})
    .on('mouseenter', enterShow)
    .on('mouseleave', exitHide)




var $btn1 = $('#btn1');
$btn1.data('state', 'hover');

var enterShow = function () {
    if ($btn1.data('state') === 'hover') {
        $btn1.popover('show');
    }
};
var exitHide = function () {
    if ($btn1.data('state') === 'hover') {
        $btn1.popover('hide');
    }
};

$btn1.popover({trigger: 'manual'})
    .on('mouseenter', enterShow)
    .on('mouseleave', exitHide)




var $btn3 = $('#btn3');
$btn3.data('state', 'hover');

var enterShow = function () {
    if ($btn3.data('state') === 'hover') {
        $btn3.popover('show');
    }
};
var exitHide = function () {
    if ($btn3.data('state') === 'hover') {
        $btn3.popover('hide');
    }
};

$btn3.popover({trigger: 'manual'})
    .on('mouseenter', enterShow)
    .on('mouseleave', exitHide)


});
