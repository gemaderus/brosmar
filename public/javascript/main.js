console.log("Congratulations! You are set!");

$(".menu-header, .close-header").on("click", function(e){
  e.preventDefault();

  var element = $(".menu-holder");
  if(element.hasClass("active")) {
    element.removeClass("active");
   } else {
     element.addClass("active");
   }

});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots: true
        }
    }
})
