$(function () {

   function toggleVisibility(element) {
      var content = "#" + element.id + "-content";
      var arrow = "#" + element.id + "-arrow";
      $(content).toggle(400);
      $(arrow).toggleClass("visible");
      $(arrow).css({ 'transform': $(arrow).hasClass('visible') ? 'rotate(90deg)' : 'rotate(0deg)' });
   }

   $(".u101-heading").on("click", function() {
      toggleVisibility(this);
   });
});