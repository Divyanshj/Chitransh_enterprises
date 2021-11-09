/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );
// Sticky Navbar
$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('.navbar').addClass('nav-sticky');
    } else {
        $('.navbar').removeClass('nav-sticky');
    }
});
//SLIDER
$(function() {
  $('.owl-carousel.testimonial-carousel').owlCarousel({
    nav: false,
    dots: false,
    autoplay:true,
    autoplayTimeout:1000,
   autoplayHoverPause:true,
   loop:true,
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 3,
      }
    }
  });
});
$(function() {
  $('.owl-carousel.testimonial-carousel-3').owlCarousel({
    nav: false,
    dots: false,
    autoplay:true,
    autoplayTimeout:1000,
   autoplayHoverPause:true,
   loop:true,
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 3,
      }
    }
  });
});
$(function() {
  $('.owl-carousel.testimonial-carousel-2').owlCarousel({
    nav: false,
    dots: false,
    autoplay:true,
    autoplayTimeout:4000,
   autoplayHoverPause:true,
   animateOut: 'fadeOutLeft',
      animateIn: 'fadeIn',
   loop:true,
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 1,
      }
    }
  });
});
