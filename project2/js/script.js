$(function() {
	scrollHt();
	$(window).resize( function() {
		scrollHt();
	})

});

function scrollHt() {
	var height = $(window).innerHeight(),
		feedHeader = $("#feed header").height();
		console.log(height, $("#view").css("height"))
		//userHeight = $("#user").height();
	$("#entries").css({"height":height - feedHeader - 70});
	$("#view").css({"height":height})
}