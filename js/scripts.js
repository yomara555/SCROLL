$(document).ready(function(){
	
	var height = $(window).height();

	ajustesiniciales();

	function ajustesiniciales(){
		$("section#body").css({"margin-top": height - 80 + "px"});
	}

	$(document).scroll(function(){
		var scrollTop = $(this).scrollTop();
		var pixels = scrollTop / 70;

		if(scrollTop < height){
			$("section#contenedor_general").css({
				"-webkit-filter":"blur(" + pixels + "px)",
				"background-position": "center -" + pixels * 10 + "px"
			})
		}
		
	});
});