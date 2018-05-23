var classListSupport = 'classList' in document.createElement('_');
var scrollTo = 'scrollTo' in document.createElement('_');
var querySelectorSupport = 'querySelector' in document.createElement('_');
var eventListenerSupport = 'addEventListener' in document.createElement('_');
var support = false;

checkSupport();
start();
function checkSupport(){
  if(classListSupport){
    if(querySelectorSupport){
      if(eventListenerSupport){
        if(scrollTo){
          support = true;
        }
      }
    }
  }
}
function start(){
  if(support){
    var buttons = document.querySelectorAll('nav ul li a');
    for(var i = 0; i < buttons.length; i++){
      buttons[i].addEventListener('click', function(e){
        e.preventDefault();
        scrollTo(document.querySelector('section'), 0, 1250);
      });
    }

    function scrollTo(element, to, duration) {
      var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

      var animateScroll = function(){
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
          setTimeout(animateScroll, increment);
        }
      };
      animateScroll();
    }

    Math.easeInOutQuad = function (t, b, c, d) {
      t /= d/2;
    	if (t < 1) return c/2*t*t + b;
    	t--;
    	return -c/2 * (t*(t-2) - 1) + b;
    };
  }
}
