/* ------------------------------------------------------------
   version:	基础脚本1.0
   content: 页面布局内容，顶部导航、页头、菜单导航、侧栏导航、页脚
	author:	时代财富
	create:	2015-01-19
------------------------------------------------------------ */


/**
 * 定义布局对象CCBUI
 */
var PLayout = {
	header_nav :
	'<div id ="contenttop" class ="header_content">'+
		'<ul class =" wrap_left head_left">' +
		'<li>'+
		'<a class = "homepage" href ="index.html">'+'</a>'+	
		'</li>'+
		'<li class ="hm_nav ">'+
		'<a>简易款</a>'+
		'<div id ="wrap" class= "heada_postion hoverred">'+
		'<ul class="headpo_content" >'+
		'<li><a href = "products.html" >MINI家族</a></li>'+
		'<li>'+
		'<a href="products.html" >'+'酷派系列'+'</a>'+
		'</li>'+
		'<li>'+								
		'<a href = "products.html">'+'捷力系列'+'</a>'+
		'</li>'+	
		'<li>'+								
		'<a href = "products.html">'+'骑迹系列'+'</a>'+
		'</li>'+												
		'</ul>'+
		'<div class="clear">'+'</div>'+
		'</div>'+
		'</li>'+
		'<li class ="hm_nav">'+
		'<a >'+'豪华款'+'</a>'+
		'<div id ="wrap" class= "heada_postion hoverred">'+
		'<ul class="headpo_content" >'+
		'<li>'+								
		'<a href = "products.html" >'+'MINI家族'+'</a>'+
		'</li>'+
		'<li>'+
		'<a href="products.html" >'+'酷派系列'+'</a>'+
		'</li>'+
		'<li>'+								
		'<a href = "products.html">'+'经典系列'+'</a>'+
		'</li>'+	
		'<li>'+								
		'<a href = "products.html">'+'酷车系列'+'</a>'+
		'</li>'+	
		'<li>'+								
		'<a href = "products.html">'+'功能系列'+'</a>'+
		'</li>'+	
		'<li>'+								
		'<a href = "products.html">'+'国标系列'+'</a>'+
		'</li>'+												
		'</ul>'+
		'<div class="clear">'+'</div>'+
		'</div>'+						
		'</li>'+
		'<li class ="hm_nav">'+
		'<a >'+'锂电款'+'</a>'+
		'<div id ="wrap" class= "heada_postion hoverred" >'+
		'<ul  class="headpo_content" >'+
		'<li>'+								
		'<a href = "products.html" >'+'MINI家族'+'</a>'+
		'</li>'+
		'<li>'+
		'<a href="products.html">'+'酷派系列'+'</a>'+
		'</li>'+	
		'<li>'+
		'<a href="products.html">'+'极速系列'+'</a>'+
		'</li>'+					
		'</ul>'+
		'<div class="clear">'+'</div>'+
		'</div>'+					
		'</li>'+
		'<li class ="hm_nav">'+
		'<a>'+'服务'+'</a>'+
		'<div id ="wrap" class= "heada_postion hovergreen">'+
		'<ul class="headpo_content" >'+
		'<li>'+								
		'<a href = "###" >'+'售后体系'+'</a>'+
		'</li>'+
		'<li>'+
		'<a href="###" >'+'销售网点'+'</a>'+
		'</li>'+	
		'<li>'+
		'<a href="###" >'+'加盟流程'+'</a>'+
		'</li>'+
		'<li>'+
		'<a href="###" >'+'经销商登录'+'</a>'+
		'</li>'+						
		'</ul>'+
		'<div class="clear">'+'</div>'+
		'</div>'+						
		'</li>'+
		'<li class ="hm_nav" >'+
		'<a >'+'网上商城'+'</a>'+
		'<div id ="wrap" class= "heada_postion hovergreen" >'+
		'<ul class="headpo_content" >'+
		'<li>'+								
		'<a href = "https://aimayd.tmall.com/shop/view_shop.htm?user_number_id=2151423917&rn=b6bb75a778fc59bf1ca5924796e44e98" >'+'天猫商城'+'</a>'+
		'</li>'+
		'<li>'+
		'<a href="http://mall.jd.com/index-102074.html?cpdad=1DLSUE" >'+'京东商城'+'</a>'+
		'</li>'+
		'<li>'+
		'<a href="###" >'+'爱玛商城'+'</a>'+
		'</li>'+			
		'</ul>'+
		'<div class="clear">'+'</div>'+
		'</div>'+
		'</li>'+
		'</ul>'+
		//右边开始
		'<ul class ="wrap_right head_right">'+
		'<li class="search">'+
		'<a class = "search" >'+'</a>'+							
		'<div class="search_header">'+	
		'<div class="wrap_left search_input">'+
		'<button class="search">'+'</button>'+
		'<input value="搜索aimatech.com">'+'</input>'+
		'<div class="search_position">'+
		'<dl>'+
		'<dt>'+'快速查找'+'</dt>'+
		'<dd>'+'MINI家族'+'</dd>'+
		'<dd>'+'撒哈拉'+'</dd>'+
		'<dd>'+'经销商'+'</dd>'+
		'<dd>'+'酷派系列'+'</dd>'+
		'</dl>'+
		'</div>'+
		'</div>'+	
		'</div>'+									
		'</li>'+
		'<li class ="hm_nav">'+
		'<a class="shequ">'+'</a>'+
		'<div id ="wrap" class= "heada_postion hovergreen" >'+
		'<ul class="headpo_content" >'+
		'<li>'+								
		'<a href = "###" >'+'媒体聚焦'+'</a>'+
		'</li>'+
		'<li>'+
		'<a href="###" >'+'爱玛话题'+'</a>'+
		'</li>'+	
		'<li>'+
		'<a href="###" >'+'特别活动'+'</a>'+
		'</li>'+
		'<li>'+
		'<a href="###" >'+'视频欣赏'+'</a>'+
		'</li>'+				
		'</ul>'+
		'<div class="clear">'+'</div>'+
		'</div>'+
		'</li>'+
		'<li>'+
		'<a class="english" href="http://www.aimatech.net/">'+
		'</a>'+
		'</li>'+			
		'</ul>'+
	'</div>',
	footer_nav :
		'<div id = "wrap" class= "footertop">'+
		'<div id ="contentbottom" class = "fotopcontainer">'+	
		'<ul class = "wrap_left fotop_left">'+
		'<li class ="" >'+
		'<a class = "footer_model font18" href = "###">我们在这里</a>'+
		'</li>'+
		'<li>'+
		'<a class = "footer_model" href = "http://weibo.com/aimatech">'+
		'<span class = "footer_icon weibo">'+'</span>'+
			'官方微博'+
		'</a>'+
		'</li>'+
		'<li class = "weixin">'+
		'<a class = "footer_model " href = "###">'+
		'<span class = "footer_icon weixin">'+
		'</span>'+
		'官方微信'+
		'<span class ="weixinerwei">'+'</span>'+
			'</a>'+			
		'</li>'+
		'<li>'+
			'<a class = "footer_model" href = "###">'+
		'<span class = "footer_icon viedo">'+
				'</span>'+
				'视频专区'+
			'</a>'+
		'</li>'+
		'<li>'+
		'<a class = "footer_model" href = "https://aimayd.tmall.com/shop/view_shop.htm?user_number_id=2151423917&rn=b6bb75a778fc59bf1ca5924796e44e98">'+
		'<span class = "footer_icon tianmao">'+
			'</span>'+
			'天猫旗舰店'+
		'</a>'+
		'</li>'+
		'<li>'+
			'<a class = "footer_model" href = "http://mall.jd.com/index-102074.html?cpdad=1DLSUE">'+
		'<span class = "footer_icon jingdong">'+
					'</span>'+
					'京东旗舰店'+
				'</a>'+
			'</li>'+
		'</ul>'+
		'<div class = " wrap_right footer_rigth">'+
		'<p class=" footer_model font18">'+
		'<span class = "footer_icon phone">'+
					'</span>'+'400-882-8890'+
				'</p>'+
			'</div>'+
		'</div>'+
		'</div>'+
		'<div id= "contentbottom" class= "foote_bottom ">'+
		'<ul class= "footer_middle text_underline"  >'+
		'<li>'+
			'<dl>'+
			'<dt>产品中心</dt>'+
			'<dd><a href="###">电动自行车</a></dd>'+
		'<dd><a href="###">运动自行车</a></dd>'+
		'<dd><a href="###">爱玛三轮车</a></dd>'+
			'</dl>'+
		'</li>'+
		'<li>'+
			'<dl>'+
			'<dt>简易款</dt>'+
			'<dd><a href="products.html">MINI家族</a></dd>'+
		'<dd><a href="products.html">酷派系列</a></dd>'+
		'<dd><a href="products.html">骑迹系列</a></dd>'+
		'<dd><a href="products.html">捷力系列</a></dd>'+
			'</dl>'+
		'</li>'+					  
		'<li>'+
			'<dl>'+
			'<dt>豪华款</dt>'+
			'<dd><a href="products.html">MINI家族</a></dd>'+
		'<dd><a href="products.html">酷派系列</a></dd>'+
		'<dd><a href="products.html">经典系列</a></dd>'+
		'<dd><a href="products.html">酷车系列</a></dd>'+
		'<dd><a href="products.html">功能系列</a></dd>'+
		'<dd><a href="products.html">国标系列</a></dd>'+
			'</dl>'+
		'</li>'+
		'<li>'+
			'<dl>'+
			'<dt>锂电款</dt>'+
			'<dd><a href="products.html">MINI家族</a></dd>'+
		'<dd><a href="products.html">酷派系列</a></dd>'+
		'<dd><a href="products.html">极速系列</a></dd>'+						
			'</dl>'+
		'</li>'+
		'<li>'+
			'<dl>'+
			'<dt>购物指南</dt>'+
			'<dd><a href="###">电动车网点</a></dd>'+
		'<dd><a href="###">三轮车网点</a></dd>'+
		'<dd><a href="###">运动自行车网点</a></dd>'+
		'<dd><a href="https://aimayd.tmall.com/shop/view_shop.htm?user_number_id=2151423917&rn=b6bb75a778fc59bf1ca5924796e44e98">天猫旗舰店</a></dd>'+
		'<dd><a href="http://mall.jd.com/index-102074.html?cpdad=1DLSUE">京东旗舰店</a></dd>'+
			'</dl>'+
		'</li>'+
		'<li>'+
			'<dl>'+
			'<dt>服务</dt>'+
			'<dd><a href="###">售后体系</a></dd>'+
		'<dd><a href="###">销售网点</a></dd>'+
		'<dd><a href="###">加盟流程</a></dd>'+
		'<dd><a href="###">经销商登录</a></dd>'+
			'</dl>'+
		'</li>'+
		'<li>'+
			'<dl>'+
			'<dt>爱玛话题</dt>'+
			'<dd><a href="###">媒体聚焦</a></dd>'+
		'<dd><a href="###">行业动态</a></dd>'+
		'<dd><a href="###">爱玛社区</a></dd>'+
			'</dl>'+
		'</li>'+
		'<li>'+
			'<dl>'+
			'<dt>关于爱玛</dt>'+
			'<dd><a href="###">企业介绍</a></dd>'+
		'<dd><a href="###">发展历程</a></dd>'+
		'<dd><a href="###">企业文化</a></dd>'+
		'<dd><a href="###">荣誉</a></dd>'+
		'<dd><a href="###">视频</a></dd>'+
		'<dd><a href="###">人才招聘</a></dd>'+
		'<dd><a href="###">联系我们</a></dd>'+
		'<dd><a href="###">下载</a></dd>'+
		'<dd><a href="http://www.aimatech.net/">英文版</a></dd>'+
				'</dl>'+
			'</li>'+
		'</ul>'+		
		'<div  class ="copyright">'+
		'<div class = " wrap_left">'+
			'<p>Copyright © 2015 Aima Inc. 爱玛科技股份有限公司保留所有权利。<br/>津公安网安备 11010658496 京ICP备10215961</p>'+
		'</div>'+				
		'<ul class="wrap_right text_underline">'+
		'<li>'+
			'<a href= "index.html">网站首页</a>'+
		'</li>'+
		'<li><a href= "###">人才招聘</a></li>'+
		'<li><a href= "###">联系我们</a></li>'+
		'<li><a href= "###">网站地图</a></li>'+
			'</ul>'+					
		'</div>'+
		'<div id ="contenttop"class= "p_pos">更多选购方式：前往爱玛零售店，致电客服热线400-882-8890 或查找在你附近的授权经销商。</div>'+
		'</div>',
		transet_nav:
		'<div id="contenttop" class="search_close"><a class="wrap_right search_close ">X</a></div>',
		
		
}
$(function(){
	var _header= $("div.header"),
	 _footer = $("div.foote"),
	 _transet =$("div.body_transpt");
	if(_header){
		_header.html(PLayout.header_nav);
	};
	if(_footer){
		_footer.html(PLayout.footer_nav);
	};
	if(_transet){
		_transet.html(PLayout.transet_nav);
	};
	
	

	var $downlist= $(".header li.hm_nav");
	var Time;			
	$downlist.each(function(){	
		var $this = $(this);
		$this.click(function(){	
			$downlist.children('div.heada_postion').slideUp(300);
			$this.children('.heada_postion').slideDown(300);
			
		})
		
		$this.hover(
			clearTimeout(Time),
			function(){
				Time = setTimeout(function(){
					$this.children('.heada_postion').slideUp(500);				
				},2000)			
			}
		)
		
	})
	$('.heada_postion').mouseover(function(){
		clearTimeout(Time);
	})
	var $body=$(".body_transpt");
	var $search=$("li.search");	
	var $homeback=$("a.search_close");
	$search.click(function(){
		var $this =$(this);				
		$this.children(".search_header").fadeIn();
		$('.heada_postion').slideUp("fast");
		$body.show();
		$("body").addClass("hidden");
	})
	$body.click(function(){
		var $this =$(this);
		$this.hide();
		$(".search_header").fadeOut("slow");
		$("body").removeClass("hidden");
	})
	
	
	
});
	
	
	
