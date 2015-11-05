$(document).ready(function() {

  var expanded = null;

  var expandSquare = function(selector, small, big, speed) {
    $(selector).click(function(event) {
      if (!expanded) {
        grow(this);
        expanded = this;
      } else if (expanded === this) {
        shrink(this);
        expanded = null;
      } else if ((expanded) && (expanded !== this)) {
        shrink(expanded);
        grow(this);
        expanded = this;
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

  // Generate click event handlers for 3 divs with given sizes
  var small = '15%';
  var big = '40%';
  var speed = 600;
  expandSquare('div#projects', small, big, speed);
  expandSquare('div#music', small, big, speed);
  expandSquare('div#video', small, big, speed);

});
