$(document).ready(function() {

	function switchActiveButton(targetButton) {
		$(".navbar-nav").find(".active").removeClass("active");
		targetButton.addClass("active");
	}

	function switchActiveSection(targetID)
	{
		var activeSection = $(".section").filter(function(index) { return $(this).hasClass("activeSection"); });
		if (activeSection.attr("id") != targetID)
		{
			activeSection.removeClass("activeSection");
			$(".section").filter(function(index) { return $(this).attr("id") == targetID; })
				.addClass("activeSection");
		}
	}

	function toggleActiveSection(targetID)
	{
		var targetSection = $("#"+targetID);
		if (targetSection.hasClass("activeSection"))
		{
			targetSection.removeClass("activeSection");
		} else
		{
			targetSection.addClass("activeSection");
		}
	}

	// navigation button press - page switch
	$(".nav-link").on("click", function(){
		switchActiveButton($(this).parent());
		switchActiveSection($(this).attr("data-sectionID"));
		// collapse mobile menu on selection
		$(".navbar-collapse").collapse('hide');
	});

	// toggle - project descriptions
	$(".proj-link").on("click", function(){
		toggleActiveSection($(this).attr("data-sectionID"));
	});
});

