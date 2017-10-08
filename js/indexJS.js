$(document).ready(function() {

	// navigation button press
	$(".nav-link").on("click", function(){
		// switch active button
		$(".navbar-nav").find(".active").removeClass("active");
		$(this).parent().addClass("active");

		// switch open accordion section
		var targetID = $(this).attr("data-sectionID");
		var activeSection = $(".section").filter(function(index) { return $(this).hasClass("activeSection"); });
		if (activeSection.attr("id") != targetID)
		{
			activeSection.removeClass("activeSection");
			$(".section").filter(function(index) { return $(this).attr("id") == targetID; })
				.addClass("activeSection");
		}

		// collapse mobile menu on selection
		$(".navbar-collapse").collapse('hide');
	});

});

