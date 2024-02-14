$(function () {

   function toggleVisibility(element) {
      $("#header").toggle(400);
   }

   $(".home-img").on("click", function() {
      toggleVisibility(this);
   });
});