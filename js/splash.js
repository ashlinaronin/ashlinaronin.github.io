$(document).ready(function() {

  var expanded = null;


  var expandSquare = function(selector, small, big) {
    var width, padding;
    $(selector).click(function(event) {
      // Toggle width and padding
      width = (width == big ? small : big);
      padding = width;

      $(this).animate({
        width: width,
        paddingBottom: padding,
      }, 1000);

      // Set expanded to the currently expanded box
      if (width == big) {
        expanded = selector;
        console.log('expanded: ' + expanded);
      }
    });
  }

  expandSquare('div#projects', '15%', '50%');
  expandSquare('div#music', '15%', '50%');
  expandSquare('div#video', '15%', '50%');

});
