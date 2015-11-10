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
    var shrinker = function() {
      TweenLite.to(selector, speed,
        {width: small, height: small, ease:Power2.easeInOut
      });
    }

    var hideText = function() {
      var thisContent = $(selector).find(':nth-child(2)');
      // var hider = new TweenLite.to(thisContent, )
      // $(selector).find(':nth-child(2)').hide();
      // var slowerSpeed = speed/2;
      TweenLite.to(thisContent, speed/2,
        {autoAlpha:0, onComplete: shrinker});
    }

    hideText();

    // Switch pointer styles
    $(selector).addClass('se-resize');
    $(selector).removeClass('nw-resize');
  }

  var grow = function(selector) {
    var showText = function() {
      var thisContent = $(selector).find(':nth-child(2)');
      TweenLite.to(thisContent, speed/2, {autoAlpha:1});
    }

    var grower = function() {
      TweenLite.to(selector, speed,
        {width: big, height: big, ease:Power2.easeInOut,
        onComplete: showText}
      );
    }

    grower();

    // Switch pointer styles
    $(selector).addClass('nw-resize');
    $(selector).removeClass('se-resize');
  }

  // Generate click event handlers for 3 divs with given sizes
  // var small = '15%';
  // var big = '40%';
  // var speed = 600;
  var small = '150px';
  var big = '400px';
  var speed = 1;
  expandSquare('div#projects', small, big, speed);
  expandSquare('div#music', small, big, speed);
  expandSquare('div#video', small, big, speed);

});
