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
    // var contentChild = '#' + selector.attributes[0].value + '-content';
    // $(selector).find(contentChild).toggle(speed);

    $(selector).animate({width: small, paddingBottom: small}, speed);
    $(selector).addClass('se-resize');
    $(selector).removeClass('nw-resize');
    // $(selector + '-content').toggle();
    // console.dir(selector);
    // var contentChild = '#' + selector.attributes[0].value + '-content';
    // console.log('contentChild: ' + contentChild);
    // console.dir(gotit);
  }

  var grow = function(selector) {
    // var contentChild = '#' + selector.attributes[0].value + '-content';
    // $(selector).find(contentChild).toggle(speed);

    $(selector).animate({width: big, paddingBottom: big}, speed);
    $(selector).addClass('nw-resize');
    $(selector).removeClass('se-resize');
    // $(selector + '-content').toggle();
    // var contentChild = '#' + selector.attributes[0].value +
    // var lastchild = $(selector).last();

    // console.dir(lastchild);

  }

  // Generate click event handlers for 3 divs with given sizes
  var small = '15%';
  var big = '40%';
  var speed = 600;
  expandSquare('div#projects', small, big, speed);
  expandSquare('div#music', small, big, speed);
  expandSquare('div#video', small, big, speed);

});
