$(document).ready(function() {

  var expanded = null;
  var phasers = [];

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
    // Hide text before shrinking square
    var shrinker = function() {
      TweenLite.to(selector, speed,
        {width: small, height: small, ease:Power2.easeInOut
      });
    }

    var hideText = function() {
      var thisContent = $(selector).find(':nth-child(2)');
      TweenLite.to(thisContent, speed/2,
        {autoAlpha:0, onComplete: shrinker});
    }

    // Get just name string from selector object, then play that phaser
    var selectorString = selector.attributes[0].value;
    phasers[selectorString].pause();

    // Reset border to black before hiding text
    TweenLite.to(selector, speed/4,
      {borderColor:'black', easing: Power3.easeInOut}
    );

    hideText();

    // Switch pointer styles
    $(selector).addClass('se-resize');
    $(selector).removeClass('nw-resize');

    // Hide this border to make sure other squares can show their borders
    $(selector).removeClass('border-on-top');
  }

  var grow = function(selector) {
    // Grow square before showing text
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
    // Get just name string from selector object, then play that phaser
    var selectorString = selector.attributes[0].value;
    phasers[selectorString].play();

    // Switch pointer styles
    $(selector).addClass('nw-resize');
    $(selector).removeClass('se-resize');

    // mess with z-index to show border on top
    $(selector).addClass('border-on-top');
  }


  var makeBorderPhaser = function(selector, speed, colors) {
    // Define a new timeline to repeat infinitely back-and-forth.
    // Make it paused by default so we can play it programmatically.
    var sqt = new TimelineMax({repeat:-1, yoyo:true, paused:true});

    // Add a tween for each color to the timeline
    colors.forEach(function(color) {
      sqt.to(selector, speed, {borderColor:color, ease:easing});
    });

    // Return this timeline so we can control it from elsewhere
    return sqt;
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

  // Set up phasers for borders and save them to scoped array
  // so we can access them from within the square handlers
  var colors = ['red', 'green', 'blue', 'yellow'];
  var speed = 1;
  var easing = Power3.easeInOut;
  phasers['projects'] = makeBorderPhaser('#projects', speed, colors, easing);
  phasers['music'] = makeBorderPhaser('#music', speed, colors, easing);
  phasers['video'] = makeBorderPhaser('#video', speed, colors, easing);

});