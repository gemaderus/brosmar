$(".menu-header, .close-header").on("click", function(e){
  e.preventDefault();

  var element = $(".menu-holder");
  if(element.hasClass("active")) {
    element.removeClass("active");
   } else {
     element.addClass("active");
   }

});

$('.owl-carousel').owlCarousel({
  navigation : false, // Show next and prev buttons
  slideSpeed : 300,
  paginationSpeed : 400,
  singleItem:true
});

$('.js-scroll').on('click', function(e){
  e.preventDefault();

  var hash = $(this).attr('href');
  $('body').scrollTo( hash, 800 );
});

$.cookieBar({
  message: "Usamos cookies para ofrecerte un mejor servicio, en ningún caso usamos tus datos para beneficio personal o para venderlos a terceros. Si continúas navegando aceptas nuestro uso de las Cookies.",
  fixed: true,
  bottom: true,
  acceptText: 'Lo entiendo',
});
