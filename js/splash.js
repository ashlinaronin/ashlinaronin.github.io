$(document).ready(function() {

  var expanded = null;


  var expandSquare = function(selector, small, big, speed) {
    // locally scoped width and padding for toggle on the given div
    var width = small;
    var padding = small;
    $(selector).click(function(event) {

      // Only expand it if there is no other square expanded
      if (!expanded) {
        $(this).animate({width: big, paddingBottom: big}, speed);

        // Set currently expanded value and adjust cursors
        expanded = selector;
        $(this).addClass('nw-resize');
        $(this).removeClass('se-resize');

      } else if (expanded === selector) {
        // width = padding = small;
        $(this).animate({width: small, paddingBottom: small}, speed);

        // Remove currently expanded value and adjust cursors
        expanded = null;
        $(this).addClass('se-resize');
        $(this).removeClass('nw-resize')
      } else if ((expanded) && (expanded !== selector)) {
        $(expanded).animate({width: small, paddingBottom: small}, speed);
        $(expanded).addClass('se-resize');
        $(expanded).removeClass('nw-resize');

        $(this).animate({width: big, paddingBottom: big}, speed);
        expanded = selector;
        $(this).addClass('nw-resize');
        $(this).removeClass('se-resize');
        // $(expanded).animate()
        console.log('trying to open ' + selector + ' but ' + expanded + ' is expanded');
      }

      console.log('in ' + selector + ' after animation, expanded: ' + expanded);
    });
  }

  var shrink = function(selector) {}
  var grow = function(selector) {}


  // Generate event handlers for 3 divs with given sizes
  var small = '15%';
  var big = '40%';
  var speed = 600;
  expandSquare('div#projects', small, big, speed);
  expandSquare('div#music', small, big, speed);
  expandSquare('div#video', small, big, speed);

});

// Toggle width and padding
// width = (width == big ? small : big);
