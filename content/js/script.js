$(function(){
	  new WOW().init();
	var winh= $(window).height();
	$('.allpage , .carousel-item').height(winh)
	});
	
	
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        $(".fixed-top ").addClass("darkHeader");
    } else {
        $(".fixed-top ").removeClass("darkHeader");
    }
});

  
		
		// Animenu
// -------
// https://github.com/catalinred/animenu
// https://twitter.com/catalinred

(function(){
  var animenuToggle = document.querySelector('.animenu__toggle'),
      animenuNav    = document.querySelector('.animenu__nav'),
      hasClass = function( elem, className ) {
        return new RegExp( ' ' + className + ' ' ).test( ' ' + elem.className + ' ' );
      },
      toggleClass = function( elem, className ) {
        var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ' ) + ' ';
        if( hasClass(elem, className ) ) {
          while( newClass.indexOf( ' ' + className + ' ' ) >= 0 ) {
            newClass = newClass.replace( ' ' + className + ' ' , ' ' );
          }
          elem.className = newClass.replace( /^\s+|\s+$/g, '' );
        } else {
          elem.className += ' ' + className;
        }
      },           
      animenuToggleNav =  function (){        
        toggleClass(animenuToggle, "animenu__toggle--active");
        toggleClass(animenuNav, "animenu__nav--open");        
      }

  if (!animenuToggle.addEventListener) {
    animenuToggle.attachEvent("onclick", animenuToggleNav);
  }
  else {
    animenuToggle.addEventListener('click', animenuToggleNav);
  }
})()