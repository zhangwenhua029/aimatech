/*$(function(){
	var lIndex = 0 ;
	var Time = null;
	$(".libt ul li").click(function(){
	$(this).addClass("hover").siblings().removeClass("hover");
	var nIndex = $(this).index();
	$(".cli").eq(nIndex).fadeIn().siblings(".cli").fadeOut();
	lIndex = nIndex;
	clearInterval(Time);//ÕâÊÇÊ²Ã´ÒâË¼£¿
	auto();
    })
   function auto(){
		Time = setInterval(function(){//Ã¿¸ô¶à³¤Ê±¼äÖ´ÐÐÊÂ¼þ¡£
			(lIndex<2)?(lIndex++):(lIndex=0);//Èç¹ûlIndex<3Ôò¼Ó1£¬·ñÔòÎª0£»
			$(".libt ul li").eq(lIndex).addClass("hover").siblings().removeClass("hover");
			$(".cli").eq(lIndex).fadeIn(2000).siblings(".cli").fadeOut(2000);
			},5000);
		};

		auto();
	
	
})*/
(function($){
	$.fn.clickm = function(){
		init.call(this);		
	}
	function init(){
		$this=$(this);	
		var $libt=$this.find(".libt li");//$(".libt li",$this);
		var $cli=$this.find(".cli");
		console.log($cli);
		var lIndex = 0 ;
		var Time = null;
		$libt.click(function(){
			$(this).addClass("hover").siblings().removeClass("hover");
			var nIndex = $(this).index();
			$cli.eq(nIndex).fadeIn().siblings(".cli").fadeOut();			
			lIndex = nIndex;
			clearInterval(Time);//ÕâÊÇÊ²Ã´ÒâË¼£¿
			auto();
	    })
	    function auto(){
			Time = setInterval(function(){//Ã¿¸ô¶à³¤Ê±¼äÖ´ÐÐÊÂ¼þ¡£
				(lIndex<2)?(lIndex++):(lIndex=0);//Èç¹ûlIndex<3Ôò¼Ó1£¬·ñÔòÎª0£»
				$libt.eq(lIndex).addClass("hover").siblings().removeClass("hover");
				$cli.eq(lIndex).fadeIn(2000).siblings(".cli").fadeOut(2000);
				},5000);
			};

			auto();
			
	}
	
})(jQuery);
