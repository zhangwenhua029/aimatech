$(function(){
	//footer¿ªÊ¼
	var $fun_model= $(".footer_model");
	$fun_model.mouseover(function(){
		$this = $(this);
		$this.addClass("funhover");
		$this.children("span.footer_icon").addClass("footer_icohover");
		$this.children("span.weixinerwei").show();			
	})				
	$fun_model.mouseout(function(){
		$this = $(this);
		$this.removeClass("funhover");
		$this.children("span.footer_icon").removeClass("footer_icohover");
		$this.children("span.weixinerwei").hide();
	})	
	$(".banner_wrap").clickm();
	$(".active").clickm();
	//footer½áÊø
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
