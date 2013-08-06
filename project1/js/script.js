$(function() {
	scrollHt();
	$(window).resize( function() {
		scrollHt();
	})

});

function scrollHt() {
	var height = $(window).innerHeight(),
		inboxHeader = $("#inbox header").height();
	$("#inbox .content").css({"height":height - inboxHeader - 130});
	$("#inbox, #leftBar, #view, #chat").css({"height":height})
}