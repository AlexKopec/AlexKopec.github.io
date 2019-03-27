window.scroll({
  top: 2500,
  left: 0,
  behavior: 'smooth'
});

// Scroll certain amounts from current position
window.scrollBy({
  top: 100, // could be negative value
  left: 0,
  behavior: 'smooth'
});

$( '#navbarSupportedContent .navbar-nav a' ).on( 'click', function () {
	$( '#navbarSupportedContent .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});

$('.js-scroll-trigger').click(function() {
  $('.navbar-collapse').collapse('hide');
});
