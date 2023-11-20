$(function () {
   var output = "";
   var body = $("body").html();

   output += "<div class=header>";

   // Trudge favicon
   output += "<a href='index.html'>" + 
             "<img src='resources/images/trudge-152x152.png' class='favicon' alt='Trudge Logo'>" +
             "</a>";
            
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

   output += body;

   $("body").html(output);
});