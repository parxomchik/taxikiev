$(document).ready(function(){
          $("#slider").owlCarousel({
          item: 3,      
//          pagination:  false,
          navigation : false, // Show next and prev buttons
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem:true,
          afterInit : function(elem){
          var that = this
          that.owlControls.prependTo(elem)
          }        
    });
     $('.owl-controls .owl-page span').remove(); 
     $('.owl-controls .clickable .owl-page span').remove(); 
     $('.owl-page').addClass('col-md-4'); 
    
     $('.owl-controls .owl-page:first').append('<div class=""><button class="btn btn-lg btn-warning">Стандарт</button></div>');
     $('.owl-controls .owl-page:nth-child(2)').append('<div class=""><button class="btn btn-lg btn-warning">Бизнес</button></div>');
     $('.owl-controls .owl-page:last').append('<div class=""><button class="btn btn-lg btn-warning">Универсал</button></div>');
    
//     $('.owl-controls .owl-page').append('<div class=""><button class="btn btn-lg btn-warning">Warning</button></div>');       
//     $('.owl-controls .clickable .owl-page').append('<div class=""><button class="btn btn-lg btn-warning">Warning</button></div>');       
});