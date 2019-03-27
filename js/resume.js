

$( '#navbarSupportedContent .navbar-nav a' ).on( 'click', function () {
	$( '#navbarSupportedContent .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});

$('.js-scroll-trigger').click(function() {
  $('.navbar-collapse').collapse('hide');
});
