setTimeout(function(){

$("ul").on("click","li",function(){
	$(this).toggleClass("selected");

})

$("ul").on("click", "span",function(event){
	
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

$("input[type='text']").on("keypress",function(event){
	if(event.which === 13){
		if($(this).val() != ""){
		var newtodo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class=\"fa fa-trash\"></i></span>	" + newtodo + "</li>");
	}
}
})

$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle();
})


},200);