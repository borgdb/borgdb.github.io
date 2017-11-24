
function showAll() {
	jQuery("body").fadeIn(1000);
	sessionStorage.introAnimationShowing = "1";
}

jQuery(document).ready(function() {
	if(!sessionStorage.introAnimationShowing) {
		jQuery("body").hide();
		jQuery("html").click(showAll);
		window.setTimeout(showAll, 5000);
	}
});
