$(document).ready(function() {

  $('#slideshow > div:gt(0)').hide();
  setInterval(function() {
    $('#slideshow > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow');
  }, 4000);


  $('h2#music-header').click(function() {
    $('div#music-content').toggle(500);
  });

  $('h2#video-header').click(function() {
    $('div#video-content').toggle(500);
  });

  $('h2#projects-header').click(function() {
    $('div#projects-content').toggle(500);
  });

});
