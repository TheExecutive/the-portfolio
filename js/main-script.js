//placeholder js
(function($){
	$(document).ready(function() {
		$(".fancybox-thumb").fancybox({
			prevEffect	: 'none',
			nextEffect	: 'none',
			helpers	: {
				title	: {
					type: 'outside'
				}
			}
		});
	});
})(jQuery); // end private scope