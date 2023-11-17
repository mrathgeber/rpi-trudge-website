$(function () {
   $.ajax({
      type: "GET",
      url: "resources/officers.json",
      dataType: "json",
      success: function(officerData){

         $.each(officerData.officers, function(i, item) {
            var output = "";
            output += '<div class="bio">';
            output += '<img class="profile" src="' + item.image + '" alt="' + item.name + '">';
            output += '<h2 class="name">' + item.name + '</h2>';
            // output += '<h4 class="position">' + item.position + '</h4>';
            output += '<h4 class="about">' + item.position + ' &#183; ' + item.year + ' &#183; ' + item.major;
            output += '<h4 class="email">Email: ' + item.email + '</h4>';

            // stats
            output += '<div class="stats">';
            $.each(item.stats, function(i, stat) {
               output += '<p class="stat">' + stat + '</p>';
            });
            output += '</div>';

            // fun facts
            output += '<div class="fun-facts">';
            $.each(item.funfacts, function(i, fact) {
               output += '<p class="fun-fact">' + fact + '</p>';
            });
            output += '</div>'; 

            output += '</div>';

            $('#bios').append(output);
         });
      }, error: function(msg) {
         alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
   });
});