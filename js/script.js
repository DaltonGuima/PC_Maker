(function () {
	$('#navbar-trigger').on('click', function() {
		$('#navbar-trigger').toggleClass('animate');
    //Close and open menu
    var navbar = $('#navbar');
    navbar.toggleClass('hide-navbar show-navbar');
    //Expand or shrink Main content when opened or closed menu
     var mainpanel = $('#main-panel');
    mainpanel.toggleClass('hidden-navbar opened-navbar');
    //Make the logo smaller or bigger when opened or closed menu
      var mainheader = $('#main-header');
    mainheader.toggleClass('hidden-navbar-header opened-navbar-header');
	})
})();
