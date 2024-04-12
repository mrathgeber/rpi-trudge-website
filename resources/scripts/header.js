$(function () {
   var output = "";
   var body = $("body").html();

   output += "<div id='home'> <div id='header-wrapper'>";

   // Trudge favicon
   output += "<a href='index.html'>" +
      "<img src='resources/images/strudge-logo.png' class='favicon' alt='Trudge Logo'>" +
      "</a>";

   output += "<div class='header'>";

   // Header title
   output += "<div>" +
      "<a href='index.html'>" +
      "<h1 id='title'>RPI ULTIMATE</h1>" +
      "</a>" +
      "</div>";

   // Nav bar
   output += "<nav>" +
      "<p class='nav-element'><a href='ultimate101.html'>Ultimate 101</a></p>" +
      "<p class='nav-element'><a href='officers.html'>Meet The Crew</a></p>" +
      "<p class='nav-element'><a href='about.html'>About</a></p>" +
      "</nav>";

   output += "</div>";
   output += "</div>";

   output += "<div id='sticky' class='header'>" +
      "<div>" +
      "<a href='index.html'>" +
      "<h1 id='title'>RPI ULTIMATE</h1>" +
      "</a>" +
      "</div>";

   output += "<nav>" +
   "<p class='nav-element'><a href='ultimate101.html'>Ultimate 101</a></p>" +
   "<p class='nav-element'><a href='officers.html'>Meet The Crew</a></p>" +
   "<p class='nav-element'><a href='about.html'>About</a></p>" +
   "</nav>";
   
   output+= "</div>";

   // output += "<img class='home-img' src='resources/images/trudge-capital.jpg' alt='Trudge at Capital'>";

   // output += "</div>";

   output += body;

   $("body").html(output);
});

document.addEventListener('scroll', onScroll);

function onScroll() {
   var scrollPosition = window.scrollY,
      showHeaderPosition = 400;

   // Determine if position is at a certain point
   if (scrollPosition >= showHeaderPosition) {
      $('#sticky').css('display', 'flex');
      
   }
   else {
      $('#sticky').css('display', 'none');
   }
}