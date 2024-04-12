$(function () {
   var output = "";

   output += "<footer>"

   output += "<div class='footer-info'>";

   output += "<div class='footer-nav'>" +
               "<h3>Site Links</h3>" +
               "<div class='site-links'>" +
                  "<a href=ultimate101.html>Ultimate 101</a>" +
                  "<a href=officers.html>Meet The Crew</a>" +
                  "<a href=about.html>About</a>" +
               "</div>" +
             "</div>";

   output += "<div class='hr-holder'><div class='hr'></div></div>";

   output += "<div class='footer-contact'>" +
               "<p>Site Design: Matteo Rathgeber</p>" +
               "<p>Webmaster: Matteo Rathgeber</p>" +
               "<p>Contact Me: rathgm@rpi.edu</p>" +
               "<p>Last Updated: 12 Apr 2024</p>" +
               "<p>v1.1.0</p>" +
             "</div>";

   output += "</div>"; // End .footer-info

   if (window.innerWidth < 768) {
      output = "<footer><div class='footer-info'>";
   }

   output += "<div class='socials-wrapper'>";

   output += "<div class='socials'>" +
               "<h4>Trudge</h4><p>(Men's Team)</p>" +
               "<div>" +
                  "<a href='https://www.instagram.com/rpitrudgeultimate/?hl=en' target='_blank'><i class='fab fa-instagram'></i></a>" +
                  "<a href='https://twitter.com/rpitrudge' target='_blank'><i class='fab fa-twitter'></i></a>" +
                  "<a href='https://www.facebook.com/RPITRUDGEULTIMATE/' target='_blank'><i class='fab fa-facebook'></i></a>" +
               "</div>" +
             "</div>";

   output += "<div class='vl-holder'><div class='vl'></div></div>";

   output += "<div class='socials'>" +
               "<h4>Strut</h4><p>(Women's Team)</p>" +
               "<div>" +
                  "<a href='https://www.instagram.com/rpistrut/?hl=en' target='_blank'><i class='fab fa-instagram'></i></a>" +
                  "<a href='https://twitter.com/rpistrut?lang=en' target='_blank'><i class='fab fa-twitter'></i></a>" +
                  "<a href='https://www.facebook.com/RPIStrut/' target='_blank'><i class='fab fa-facebook'></i></a>" +
               "</div>" +
             "</div>";

   output += "</div>"; // End .socials-wrapper
   
   if (window.innerWidth >= 768) {
      output += "<div class='footer-right-section'>" +
                "<div class='secret'></div>" +
                "</div>";
   }

   output += "</footer>";

   $("body").append(output);
});