function perfectCenterImage(){
	console.log('resize getting called')

	$(".perfect-contain").each(function(i){
		//define containerRatio as containerHeight/containerWidth
		var containerRatio = $(this).outerWidth() / $(this).outerHeight() ;
		//define imageRatio as imageHeight/imageWidth
		var imgRatio = $("img", this).outerWidth() / $("img", this).outerHeight() ;
		//if containerRatio >= imageRatio then
		if (imgRatio >= containerRatio){
			//add css height:105%; width:auto;
			$("img", this).css({"width":"auto","height":"105%"});
		} else {
			//add css width:105%; width:auto;
			$("img", this).css({"width":"105%","height":"auto"});
		}
    //105% height or width gives image some bleed so the resize won't seem so choppy

		//add absolute center image css properties
		$("img", this).css({
			"position":"absolute",
			"top":"50%",
			"left":"50%",
			//define image margin-top as -.5 * image height
			"margin-top": -1 * $("img", this).outerHeight() * 0.5 +"px",
			//define image margin-left as -.5 * image width
			"margin-left": -1 * $("img", this).outerWidth() * 0.5 +"px"
		});

	});
}


$(window).load(function(){perfectCenterImage();});
$(window).resize(function(){perfectCenterImage();});
