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
