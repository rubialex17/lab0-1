$(document).ready(function() {
	registerSearch();
});

//function registerSearch() {
//	$("#search").submit(function(ev){
//		event.preventDefault();
//		$.get($(this).attr('action'), {q: $("#q").val()}, function(data) {
//			$("#resultsBlock").empty().append(data);
//			
//		});	
//	});
//}
function registerSearch() {
	$("#search").submit(function(ev){
		event.preventDefault();
		
		$.get($(this).attr('action'), {q: $("#q").val()}, function(data){
			var template = $('#template').html();
			var rendered = Mustache.to_html(template, data);   // optional, speeds up future uses
		
		$("#resultsBlock").empty().append(rendered);
		});
		});
}