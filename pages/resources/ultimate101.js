$(function () {
   function toggle_p1() {
      $("#rules-10").toggle(400);
   }
   function toggle_p2() {
      $("#rules-3").toggle(400);
   }
   function toggle_p3() {
      $("#dictionary").toggle(400);
   }

   function toggle_dict_basic_term() {
      $("#basic-terminology").toggle(400);
   }
   function toggle_dict_throws() {
      $("#throws").toggle(400);
   }
   function toggle_dict_cuts() {
      $("#cuts").toggle(400);
   }
   function toggle_dict_other_term() {
      $("#other-terminology").toggle(400);
   }
   function toggle_dict_infractions() {
      $('#infractions').toggle(400);
   }

   $("#u101-h1").on("click", toggle_p1);
   $("#u101-h2").on("click", toggle_p2);
   $("#u101-h3").on("click", toggle_p3);

   $("#dict-h1").on("click", toggle_dict_basic_term);
   $("#dict-h2").on("click", toggle_dict_throws);
   $("#dict-h3").on("click", toggle_dict_cuts);
   $("#dict-h4").on("click", toggle_dict_other_term);
   $("#dict-h5").on("click", toggle_dict_infractions);
});