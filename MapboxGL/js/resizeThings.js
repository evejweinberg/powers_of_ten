function reCenterBoxes(){



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


function centerBoxDivs(thing) {

		var boxcenterX = ($(window).width() / 2) - $(thing).width() / 2;
		var boxcenterY = ($(window).height() / 2) - $(thing).width() / 2;
		$(thing).css({
				"left": boxcenterX
		});
		$(thing).css({
				"top": boxcenterY
		});

};


$(window).load(function(){
	reCenterBoxes()
	centerBoxDivs("#box1static");
	centerBoxDivs("#box2");
	centerBoxDivs("#box3");
	centerBoxDivs("#box4");
	centerBoxDivs("#box5");
	centerBoxDivs("#box6");
	centerBoxDivs("#box7");
	centerBoxDivs("#box8");
	centerBoxDivs("#box9");
	centerBoxDivs("#box10");
});
$(window).resize(function(){
	reCenterBoxes()
	centerBoxDivs("#box1static");
	centerBoxDivs("#box2");
	centerBoxDivs("#box3");
	centerBoxDivs("#box4");
	centerBoxDivs("#box5");
	centerBoxDivs("#box6");
	centerBoxDivs("#box7");
	centerBoxDivs("#box8");
	centerBoxDivs("#box9");
	centerBoxDivs("#box10");
});



function centerThis(string){



}



function scaleBoxDown(thing, width, height, newopac) {
		var boxcenterX = ($(window).width() / 2) - $(thing).width();
		var boxcenterY = ($(window).height() / 2) - $(thing).height();


		$(thing).animate({
				width: width,
				height: height,
				left: ($(window).width() / 2) - (width / 2),
				top: ($(window).height() / 2) - (height / 2),
				opacity: newopac
		}, {
				duration: 8000,
				step: function(now, fx) {
						// console.log($(thing).width())
				}
		});

}
