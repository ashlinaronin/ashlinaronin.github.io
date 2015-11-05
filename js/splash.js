$(document).ready(function() {

  var expanded = null;

  var expandSquare = function(selector, small, big, speed) {
    // locally scoped width and padding for toggle on the given div
    var width = small;
    var padding = small;
    $(selector).click(function(event) {

      // Only expand it if there is no other square expanded
      if (!expanded) {
        grow(selector);
        expanded = selector;
      } else if (expanded === selector) {
        shrink(selector);
        expanded = null;
      } else if ((expanded) && (expanded !== selector)) {
        shrink(expanded);
        grow(selector);
        expanded = selector;
      }
    });
  }

  var shrink = function(selector) {
    $(selector).animate({width: small, paddingBottom: small}, speed);
    $(selector).addClass('se-resize');
    $(selector).removeClass('nw-resize');
  }

  var grow = function(selector) {
    $(selector).animate({width: big, paddingBottom: big}, speed);
    $(selector).addClass('nw-resize');
    $(selector).removeClass('se-resize');
  }


  // Generate event handlers for 3 divs with given sizes
  var small = '15%';
  var big = '40%';
  var speed = 600;
  expandSquare('div#projects', small, big, speed);
  expandSquare('div#music', small, big, speed);
  expandSquare('div#video', small, big, speed);

});
