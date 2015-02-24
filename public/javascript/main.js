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


// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true
//         },
//         600:{
//             items:3,
//             nav:false
//         },
//         1000:{
//             items:5,
//             nav:true,
//             loop:false
//         }
//     }
// })
